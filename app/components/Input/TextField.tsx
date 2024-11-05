import React, { ReactNode } from "react";

interface DynamicInputProps {
  type: string;
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  prefix?: string;
  suffix?: string;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
}

const TextField: React.FC<DynamicInputProps> = ({
  type,
  label,
  value,
  onChange,
  placeholder = "",
  className = "",
  prefix,
  suffix,
  prefixIcon,
  suffixIcon,
}) => {
  return (
    <div className={`mb-4  ${className}`}>
      <label className="block font-semibold mb-2">{label}</label>
      <div className="flex items-center border rounded">
        {prefixIcon && <span className="p-2 bg-gray-100">{prefixIcon}</span>}
        {prefix && <span className="p-2 bg-gray-100">{prefix}</span>}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="flex-1 p-2 border-none py-4 rounded-lg text-xl"
        />
        {suffix && <span className="p-2 bg-gray-100">{suffix}</span>}
        {suffixIcon && <span className="p-2 bg-gray-100">{suffixIcon}</span>}
      </div>
    </div>
  );
};

export default TextField;
