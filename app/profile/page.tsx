"use client";
import { useEffect, useState } from "react";
import { useLiffStore } from "../store/useLiffStore";
import Image from "next/image";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { logout, profile } = useLiffStore();

  const [displayName, setDisplayName] = useState<string>("");
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [shopName, setShopName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [pictureUrl, setPictureUrl] = useState<string>("");

  useEffect(() => {
    if (profile) {
      setDisplayName(profile.displayName);
      setStatusMessage(profile.statusMessage ?? "");
      setShopName(profile.shopName ?? "");
      setPhoneNumber(profile.phoneNumber ?? "");
      setAddress(profile.address ?? "");
      setPictureUrl(profile.pictureUrl ?? "");
    }
  }, [profile]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = () => {};

  return (
    <div className="min-h-screen bg-gray-100 p-6 ">
      <h1 className="text-3xl font-semibold text-center mb-6">ข้อมูลส่วนตัว</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto ">
        <div className="text-center mb-6  ">
          <Image
            src={pictureUrl}
            width={100}
            height={100}
            alt="profile"
            className="w-56 h-56 object-cover rounded-full mx-auto "
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold">ชื่อ</label>
          <p className="text-2xl font-semibold block border rounded-xl bg-gray-100 p-2">
            {displayName} {statusMessage}
          </p>
        </div>

        <div className="mb-4">
          <label className="block font-semibold">ชื่อร้าน</label>
          {isEditing ? (
            <input
              type="text"
              name="shopName"
              value={shopName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          ) : (
            <p className="text-2xl font-semibold block border rounded-xl bg-gray-100 p-2">
              {shopName}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-semibold">เบอร์โทรศัพท์</label>
          {isEditing ? (
            <input
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          ) : (
            <p className="text-2xl font-semibold block border rounded-xl bg-gray-100 p-2">
              {phoneNumber}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-semibold">รายละเอียดที่อยู่</label>
          {isEditing ? (
            <textarea
              name="address"
              defaultValue={address}
              readOnly
              className="w-full p-2 border rounded"
            />
          ) : (
            <p className="text-2xl font-semibold block border rounded-xl bg-gray-100 p-2">
              {address}
            </p>
          )}
        </div>

        <div className="text-center">
          <button
            onClick={handleEditToggle}
            className={`${
              isEditing ? "bg-blue-500" : "bg-green-600"
            } text-white py-2 px-6 rounded-md font-semibold hover:bg-opacity-90`}
          >
            {isEditing ? "บันทึก" : "แก้ไขข้อมูล"}
          </button>
        </div>
      </div>
      <section className="px-3">
        <button
          onClick={logout}
          className="flex items-center justify-center  py-3 rounded-lg bg-red-500 text-white  transition mx-auto w-full  mt-4"
        >
          ออกจากระบบ
        </button>
      </section>
    </div>
  );
};

export default ProfilePage;
