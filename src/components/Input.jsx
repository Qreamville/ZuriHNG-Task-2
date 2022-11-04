import React from "react";

const Input = ({ item }) => {
  return (
    <div className={`${item.className} flex flex-col gap-y-2`}>
      <label
        htmlFor={item.id_name}
        className="font-medium text-sm text-[#344054]"
      >
        {item.label}
      </label>
      <input
        id={item.id_name}
        type={item.type}
        name={item.id_name}
        placeholder={item.placeholder}
        required
        className="border border-[#D0D5DD] rounded-lg py-2 px-3 outline-none focus:outline-[#84CAFF] focus:border-none"
      />
    </div>
  );
};

export default Input;
