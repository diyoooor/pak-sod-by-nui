import { useState } from "react";
import { motion } from "framer-motion";
import { PricePerUnit, Product } from "@/app/types/product-type";

interface CartItem {
  product: Product;
  quantity: number;
  unit: string;
}
interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  addToCart: (cartItem: CartItem) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  product,
  addToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedPricePerUnit, setSelectedPricePerUnit] = useState(
    product.prices[0].value
  );
  const [selectedUnit, setSelectedUnit] = useState(product.prices[0].label);

  const handleQuantityChange = (type: string) => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleUnitChange = (unit: PricePerUnit) => {
    setSelectedUnit(unit.label);
    setSelectedPricePerUnit(unit.value);
  };

  const handleAddToCart = () => {
    addToCart({ product, quantity, unit: selectedUnit });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-9/12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-center mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-40 h-40 object-contain mx-auto rounded-md"
          />
        </div>

        <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>

        <div className="mb-4">
          <div className="flex space-x-4">
            {product.prices.map((unit, index) => (
              <button
                key={index}
                onClick={() => handleUnitChange(unit)}
                className={`py-2 px-4 rounded ${
                  selectedUnit === unit.label
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {unit.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6 flex items-center">
          <label className="block font-semibold mr-4">จำนวน :</label>
          <button
            onClick={() => handleQuantityChange("decrease")}
            className="py-2 px-4 bg-gray-300 rounded-l hover:bg-gray-400"
          >
            -
          </button>
          <div className="py-2 px-4 border-t border-b">{quantity}</div>
          <button
            onClick={() => handleQuantityChange("increase")}
            className="py-2 px-4 bg-gray-300 rounded-r hover:bg-gray-400"
          >
            +
          </button>
        </div>

        <div className="mb-6">
          <p className="text-lg font-semibold">
            ราคารวม : {(selectedPricePerUnit * quantity).toFixed(2)} บาท
          </p>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="py-2 px-4 bg-gray-300 rounded hover:bg-gray-400"
          >
            ปิด
          </button>
          <button
            onClick={handleAddToCart}
            className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700"
          >
            ใส่ตะกร้า
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductModal;
