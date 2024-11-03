"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { useLiffStore } from "../store/useLiffStore";

const informationPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { logout } = useLiffStore();

  const [information, setInformation] = useState({
    name: "",
    nickname: "",
    shopName: "หลังขรรค์ชัย",
    phoneNumber: "123-456-7890",
    address: "1234 ศาลากลางน้ำ, สะเดา",
    imageUrl: "",
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInformation((previnformation) => ({
      ...previnformation,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">ข้อมูลส่วนตัว</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
        <div className="text-center mb-6">
          <img
            src={information.imageUrl}
            width={32}
            height={32}
            alt="information"
            className="w-32 h-32 object-cover rounded-full mx-auto"
          />
          {isEditing && (
            <div className="mt-4">
              <input
                type="file"
                className="block mx-auto"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const imageUrl = URL.createObjectURL(file);
                    setInformation((prev) => ({ ...prev, imageUrl }));
                  }
                }}
              />
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-semibold">ชื่อ</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={information.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          ) : (
            <p>{information.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-semibold">ชื่อเล่น</label>
          {isEditing ? (
            <input
              type="text"
              name="nickname"
              value={information.nickname}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          ) : (
            <p>{information.nickname}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-semibold">ชื่อร้าน</label>
          {isEditing ? (
            <input
              type="text"
              name="shopName"
              value={information.shopName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          ) : (
            <p>{information.shopName}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-semibold">เบอร์โทรศัพท์</label>
          {isEditing ? (
            <input
              type="text"
              name="phoneNumber"
              value={information.phoneNumber}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          ) : (
            <p>{information.phoneNumber}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-semibold">ที่อยู่</label>
          {isEditing ? (
            <input
              type="text"
              name="address"
              value={information.address}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          ) : (
            <p>{information.address}</p>
          )}
        </div>

        <div className="text-center">
          <button
            onClick={handleEditToggle}
            className={`${
              isEditing ? "bg-blue-500" : "bg-green-600"
            } text-white py-2 px-6 rounded-md font-semibold hover:bg-opacity-90`}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
          <button
            onClick={logout}
            className="flex items-center justify-center px-6 py-3 rounded-lg bg-green-500 text-white  transition "
          >
            <img
              src="/images/logo/line-icon.png"
              alt="LINE"
              className="w-6 h-6 mr-2"
            />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default informationPage;
