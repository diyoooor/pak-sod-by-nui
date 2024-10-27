"use client";
import React, { useState } from "react";
import TextField from "../components/Input/TextField";

const SearchPage = () => {
  const [keyword, setKeyword] = useState("");
  return (
    <div className="p-4">
      <section>
        <TextField
          label="ค้นหาสินค้า"
          placeholder="พิมพ์เพื่อต้นหา"
          type="text"
          value={keyword}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {}}
        />
      </section>
      <section>Product List</section>
    </div>
  );
};

export default SearchPage;
