"use client";
import {
  IconCheck,
  IconClock,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OrderHistoryPage = () => {
  const [expandedOrder, setExpandedOrder] = useState(null);

  const [orderStatus, setOrderStatus] = useState([
    {
      id: 1,
      orderNumber: "ORD123456",
      status: "จัดส่งสำเร็จ",
      items: [
        { name: "มะเขือเทศ", quantity: 2, pricePerUnit: 3.99 },
        { name: "แตงกวา", quantity: 1, pricePerUnit: 2.49 },
      ],
      total: 10.47,
      stages: [
        { label: "รับออเดอร์", completed: true },
        { label: "กำลังจัดของ", completed: true },
        { label: "กำลังส่ง", completed: true },
        { label: "ส่งสำเร็จ", completed: true },
      ],
    },
    {
      id: 2,
      orderNumber: "ORD654321",
      status: "กำลังจัดส่ง",
      items: [{ name: "ใบเหรียง", quantity: 1, pricePerUnit: 3.49 }],
      total: 8.49,
      stages: [
        { label: "รับออเดอร์", completed: true },
        { label: "กำลังจัดของ", completed: true },
        { label: "กำลังส่ง", completed: true },
        { label: "ส่งสำเร็จ", completed: false },
      ],
    },
  ]);

  const toggleExpandOrder = (orderId) => {
    if (expandedOrder === orderId) {
      setExpandedOrder(null);
    } else {
      setExpandedOrder(orderId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">
        ประวัติการสั่งซื้อ
      </h1>

      {orderStatus.map((order) => (
        <div key={order.id} className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">
              คำสั่งซื้อ #{order.orderNumber}
            </h2>
            <button
              onClick={() => toggleExpandOrder(order.id)}
              className="text-gray-500 hover:text-gray-700"
            >
              {expandedOrder === order.id ? <IconArrowUp /> : <IconArrowDown />}
            </button>
          </div>

          <p>
            สถานะ: <span className="font-bold">{order.status}</span>
          </p>
          <p>ยอดรวม: {order.total.toFixed(2)} บาท</p>

          <AnimatePresence initial={false}>
            {expandedOrder === order.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4">
                  {order.stages.map((stage, index) => (
                    <div key={index} className="flex items-center mb-4">
                      <div
                        className={`mr-4 ${
                          stage.completed ? "text-green-500" : "text-gray-400"
                        }`}
                      >
                        {stage.completed ? <IconCheck /> : <IconClock />}
                      </div>
                      <div
                        className={`flex-grow ${
                          stage.completed ? "text-black" : "text-gray-500"
                        }`}
                      >
                        {stage.label}
                      </div>
                    </div>
                  ))}

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">รายการสินค้า</h3>
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between mb-2">
                        <p>
                          {item.name} x {item.quantity}
                        </p>
                        <p>
                          {(item.pricePerUnit * item.quantity).toFixed(2)} บาท
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default OrderHistoryPage;
