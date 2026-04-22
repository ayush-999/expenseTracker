import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
const Input = ({
  value,
  onChange,
  label,
  placeholder,
  type,
  required,
  id,
  name,
  autoComplete,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <label for={id} className="text-sm text-slate-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="input-box mt-1 relative">
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          value={value}
          id={id}
          name={name}
          onChange={(e) => onChange(e)}
          className={`w-full bg-transparent outline-none ${
            type === "password" ? "password-input" : ""
          }`}
          required={required}
          autoComplete={autoComplete}
        />
        {type === "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                size={20}
                className="text-primary cursor-pointer password-icon"
                onClick={toggleShowPassword}
              />
            ) : (
              <FaRegEyeSlash
                size={20}
                className="text-slate-400 cursor-pointer password-icon"
                onClick={toggleShowPassword}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Input;
