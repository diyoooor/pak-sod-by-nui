"use client";
import { useEffect, useState } from "react";
import { useLiffStore } from "../store/useLiffStore";
import Image from "next/image";
import { BASE_API_URL } from "../utils/environments";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { logout, profile, setProfile, loading } = useLiffStore();

  const [displayName, setDisplayName] = useState<string>("-");
  const [shopName, setShopName] = useState<string>("-");
  const [phoneNumber, setPhoneNumber] = useState<string>("-");
  const [address, setAddress] = useState<string>("-");
  const [pictureUrl, setPictureUrl] = useState<string>(
    "/images/products/no-image.jpg"
  );

  useEffect(() => {
    if (profile) {
      setDisplayName(profile.displayName ?? "");
      setShopName(profile.shopName ?? "");
      setPhoneNumber(profile.phoneNumber ?? "");
      setAddress(profile.address ?? "");
      setPictureUrl(profile.pictureUrl ?? "/images/products/no-image.jpg");
    }
  }, [profile]);

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "shopName") setShopName(value);
    if (name === "phoneNumber") setPhoneNumber(value);
    if (name === "address") setAddress(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_API_URL}/api/users`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: profile!.userId,
          displayName,
          pictureUrl,
          shopName,
          phoneNumber,
          address,
        }),
      });

      if (response.ok) {
        alert("บันทึกข้อมูลสำเร็จ");
        setProfile({
          userId: profile!.userId,
          displayName,
          pictureUrl,
          shopName,
          phoneNumber,
          address,
        });
        setIsEditing(false);
      } else {
        alert("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">ข้อมูลส่วนตัว</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
        <div className="text-center mb-6">
          <Image
            src={pictureUrl}
            alt="Profile"
            width={100}
            height={100}
            className="w-56 h-56 object-cover rounded-full mx-auto"
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-semibold">ชื่อ</label>

            <p className="text-2xl h-12 font-semibold block border rounded-xl bg-gray-100 p-2">
              {displayName}
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
              <p className="text-2xl font-semibold block border rounded-xl bg-gray-100 p-2 h-12">
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
              <p className="text-2xl font-semibold block border rounded-xl bg-gray-100 p-2 h-12">
                {phoneNumber}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block font-semibold">รายละเอียดที่อยู่</label>
            {isEditing ? (
              <textarea
                name="address"
                value={address}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            ) : (
              <p className="text-2xl font-semibold block border rounded-xl bg-gray-100 p-2 h-12">
                {address}
              </p>
            )}
          </div>

          <div className="text-center space-x-4">
            {!isEditing && (
              <button
                type={"button"}
                onClick={handleEditToggle}
                className={`bg-blue-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-opacity-90`}
              >
                {"แก้ไขข้อมูล"}
              </button>
            )}

            {isEditing && (
              <>
                <button
                  type={"submit"}
                  className={`bg-light-primary  text-white py-2 px-6 rounded-md font-semibold hover:bg-opacity-90`}
                >
                  {"บันทึก"}
                </button>

                <button
                  type={"button"}
                  onClick={handleEditToggle}
                  className={`"border-green-600 border  border-green-500 text-green-500 py-2 px-6 rounded-md font-semibold hover:bg-opacity-90`}
                >
                  {"ยกเลิก"}
                </button>
              </>
            )}
          </div>
        </form>
      </div>

      <section className="px-3">
        <button
          onClick={logout}
          className="flex items-center justify-center py-3 rounded-lg bg-red-500 text-white transition mx-auto w-full mt-4"
        >
          ออกจากระบบ
        </button>
      </section>
    </div>
  );
};

export default ProfilePage;
