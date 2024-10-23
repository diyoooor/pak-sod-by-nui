import React from "react";

interface SortProps {
  sortBy: string;
  setSortBy: (value: string) => void;
}

const SortInput: React.FC<SortProps> = ({ sortBy, setSortBy }) => {
  return (
    <div className="mb-4">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="p-2 px-4  rounded w-full "
      >
        <option value="price-low-high">ราคา: ต่ำ - สูง</option>
        <option value="price-high-low">ราคา: สูง - ต่ำ</option>
        <option value="name-a-z">ชื่อ: ก - ฮ</option>
        <option value="name-z-a">ชื่อ: ฮ - ก</option>
      </select>
    </div>
  );
};

export default SortInput;
