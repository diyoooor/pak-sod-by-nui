"use client";
import Image from "next/image";
import { useState } from "react";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "ชุติพงศ์  เจริญเชาว์",
    nickname: "แม็ค",
    shopName: "หลังขรรค์ชัย",
    phoneNumber: "123-456-7890",
    address: "1234 ศาลากลางน้ำ, สะเดา",
    imageUrl: "/images/profile.jpg",
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">ข้อมูลส่วนตัว</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
        <div className="text-center mb-6">
          <Image
            src={profile.imageUrl}
            width={32}
            height={32}
            alt="Profile"
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
                    setProfile((prev) => ({ ...prev, imageUrl }));
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
              value={profile.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          ) : (
            <p>{profile.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-semibold">ชื่อเล่น</label>
          {isEditing ? (
            <input
              type="text"
              name="nickname"
              value={profile.nickname}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          ) : (
            <p>{profile.nickname}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-semibold">ชื่อร้าน</label>
          {isEditing ? (
            <input
              type="text"
              name="shopName"
              value={profile.shopName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          ) : (
            <p>{profile.shopName}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-semibold">เบอร์โทรศัพท์</label>
          {isEditing ? (
            <input
              type="text"
              name="phoneNumber"
              value={profile.phoneNumber}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          ) : (
            <p>{profile.phoneNumber}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-semibold">ที่อยู่</label>
          {isEditing ? (
            <input
              type="text"
              name="address"
              value={profile.address}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          ) : (
            <p>{profile.address}</p>
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
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
