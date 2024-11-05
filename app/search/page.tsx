"use client";
import React, { useEffect, useState } from "react";
import TextField from "../components/Input/TextField";
import { Product } from "../types/product-type";
import Image from "next/image";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery.trim()) {
        fetchResults(searchQuery);
      } else {
        setResults([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const fetchResults = async (query: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/search?query=${encodeURIComponent(query)}`
      );
      if (response.ok) {
        const data = await response.json();
        setResults(data);
      } else {
        console.error("Failed to fetch results");
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <section>
        <TextField
          className="w-full"
          label=""
          placeholder="พิมพ์เพื่อค้นหา"
          value={searchQuery}
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </section>
      {loading ? (
        <section>
          {loading && <p className="text-xl  text-center py-8">กำลังโหลด...</p>}
        </section>
      ) : (
        <section>
          {results.length > 0 ? (
            <ul className="space-y-2 text-center w-full ">
              {results.map((result, index) => (
                <li
                  key={index}
                  className="border p-4 bg-white rounded-lg text-xl flex justify-between items-center"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      width={50}
                      height={150}
                      src={result.image}
                      alt={result.name}
                      className="h-20 w-20 object-contain"
                    />
                    <p>{result.name}</p>
                  </div>
                  <p>
                    ฿ {result.prices[0].value} / {result.prices[0].label}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xl  text-center py-8">ไม่พบรายการสินค้า</p>
          )}
        </section>
      )}
    </div>
  );
};

export default SearchPage;
