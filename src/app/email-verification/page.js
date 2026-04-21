"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation"; 

export default function EmailVerificationPage() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const router = useRouter(); 

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    router.push("/password-reset");
  };

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden font-sans" dir="ltr">

      <div className="w-[48%] h-full bg-white px-[80px] flex flex-col justify-center shrink-0 relative">
        
        <div className="flex items-center justify-between w-full absolute top-[50px] left-0 px-[80px]">
          <div className="flex items-center gap-3">
            <Image src="/orbit-logo.png" alt="logo" width={42} height={42} priority />
            <div className="leading-tight">
              <p className="text-[#1976D2] text-[16px] font-bold">Orbit</p>
              <p className="text-[#9E9E9E] text-[10px] font-medium">ERP System</p>
            </div>
          </div>
          <Link href="/signup" className="text-[#1976D2] text-[12px] font-bold border border-[#1976D2] px-6 py-2 rounded-lg hover:bg-blue-50 transition-all">
            Sign Up
          </Link>
        </div>

        <div className="max-w-[420px] w-full m-auto mt-[160px]">
          <p className="text-[12px] text-[#9E9E9E] mb-3 font-semibold tracking-[0.1em] uppercase">
            Password recovery
          </p>

          <h2 className="text-[38px] font-bold text-[#1A1A1A] mb-4 leading-[1.1] tracking-tight">
            Email verification
          </h2>

          <p className="text-[14px] text-[#9E9E9E] mb-[50px] leading-[1.7] font-medium">
            Kindly enter the 6 digit code that has been sent to your email address.
          </p>

          <div className="grid grid-cols-6 gap-3 mb-10">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                placeholder="-"
                className="w-full h-[56px] text-center text-[22px] font-bold text-black border border-[#D0D7DE] rounded-lg focus:border-[#1976D2] outline-none text-black border"
              />
            ))}
          </div>

          <button 
            onClick={handleVerify}
            className="w-full h-[54px] flex items-center justify-center rounded-lg bg-gradient-to-r from-[#2DAAE1] to-[#2C5DAA] text-white text-[15px] font-bold shadow-md hover:opacity-95 active:scale-[0.98] transition-all"
          >
            Send
          </button>
        </div>
      </div>

      <div className="w-[52%] h-full relative overflow-hidden bg-[#F4F6F8]">
        <Image src="/forgot-bg.png.png" alt="Recovery" fill className="object-cover" priority />
      </div>

    </div>
  );
}