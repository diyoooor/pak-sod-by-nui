"use client";

import Image from "next/image";
import useCartStore from "../store/cartStore";
import { IconShoppingCart, IconTrash } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { ObjectId } from "mongodb";
import { numberWithComma } from "../utils/common";

const CartPage = () => {
  const router = useRouter();
  const { cartItems, removeFromCart, cartTotal, clearCart, updateQuantity } =
    useCartStore();

  const handleQuantityChange = (
    itemId: ObjectId,
    type: string,
    quantity: number
  ) => {
    if (type === "increase") {
      updateQuantity(itemId, quantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      updateQuantity(itemId, quantity - 1);
    } else {
      alert("คุณต้องการลบสินค้านี้ใช่หรือไม่");
    }
  };

  return (
    <div className="p-4 ">
      <section className="flex justify-between my-4 items-center text-lg">
        <div className="flex">
          <IconShoppingCart className="h-5 text-light-primary" />
          <p>ทั้งหมด {cartItems.length} รายการ</p>
        </div>
        {cartItems.length > 0 && (
          <button className="text-light-primary" onClick={clearCart}>
            ลบทั้งหมด
          </button>
        )}
      </section>
      <section>
        {cartItems.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full  flex space-x-4 justify-between my-2 rounded-lg bg-white"
            >
              <Image
                src={item.image || "/images/products/no-image.jpg"}
                width={100}
                height={80}
                alt="no image"
                className="p-4 object-contain h-full self-center"
              />
              <div className=" w-full flex justify-between p-2 ">
                <div>
                  <p className="font-bold text-xl">{item.name}</p>
                  <div>1 {item.unit}</div>
                  <p>฿{item.price}</p>
                  <div className="flex space-x-2"></div>
                </div>
                <div>
                  <div className="flex justify-evenly items-center bg-gray-50 rounded-lg font-bold">
                    <button
                      className=" p-2 rounded-md text-xl"
                      onClick={() =>
                        handleQuantityChange(
                          item.productId,
                          "decrease",
                          item.quantity
                        )
                      }
                    >
                      -
                    </button>
                    <div>{item.quantity}</div>
                    <button
                      className=" p-2 rounded-md text-xl"
                      onClick={() =>
                        handleQuantityChange(
                          item.productId,
                          "increase",
                          item.quantity
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="text-sm">
                      รวม: ฿ {numberWithComma(item.price * item.quantity)}
                    </div>
                    <button
                      className="text-md flex items-center border rounded-lg p-1"
                      onClick={() => removeFromCart(item.productId)}
                    >
                      <IconTrash className="h-4 " />
                      <p> ลบสินค้า</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {cartItems.length === 0 && (
          <p className="font-bold text-xl text-center pt-10">
            ไม่พบรายการสินค้าในตะกร้า
          </p>
        )}
      </section>
      <section className="p-4 fixed bottom-0 left-0 w-full  bg-slate-100 flex items-center flex-col">
        <div className="flex justify-between w-full mb-4 text-2xl font-bold">
          <h2>รวมทั้งหมด</h2>
          <h2>฿ {numberWithComma(cartTotal)}</h2>
        </div>
        <button
          disabled={cartItems.length === 0}
          onClick={() => {
            router.push("/checkout");
          }}
          className={`w-full border py-3 rounded-lg ${
            cartItems.length === 0 ? `bg-gray-400` : `bg-light-primary`
          }   text-white`}
        >
          ชำระเงิน
        </button>
      </section>
    </div>
  );
};

export default CartPage;
