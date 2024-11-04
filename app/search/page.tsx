"use client";
import React from "react";
import TextField from "../components/Input/TextField";

const SearchPage = () => {
  return (
    <div className="p-4">
      <section>
        <TextField
          className="w-full"
          label="ค้นหาสินค้า"
          placeholder="พิมพ์เพื่อต้นหา"
          value={""}
          type="text"
          onChange={() => {}}
        />
      </section>
      <section>Product List</section>
    </div>
  );
};

export default SearchPage;
