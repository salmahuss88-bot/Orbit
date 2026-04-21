"use client";
import Image from "next/image";
import { useState, useRef } from "react";

export default function VerifyPage() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

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

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden font-sans" dir="ltr">
      
      <div className="w-[48%] flex flex-col px-[70px] py-[45px] justify-between h-full bg-white relative z-10 shrink-0">
        
        <div className="flex items-center gap-3 shrink-0">
          <Image src="/orbit-logo.png" alt="logo" width={42} height={42} priority />
          <div className="leading-tight">
            <p className="text-[#1976D2] text-[16px] font-bold">Orbit</p>
            <p className="text-[#9E9E9E] text-[10px]">ERP System</p>
          </div>
        </div>

        <div className="max-w-[380px] w-full mx-auto flex-grow flex flex-col justify-center -mt-24">
          <p className="text-[14px] text-[#9E9E9E] mb-1 font-medium tracking-wide">2FA</p>
          <h2 className="text-[32px] font-bold text-[#1A1A1A] mb-10 leading-tight tracking-tight">
            Please enter the 2FA code sent to your mail.
          </h2>

          <div className="grid grid-cols-6 gap-2.5 mb-10">
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
                className="w-full h-[52px] text-center text-[22px] font-bold text-black border border-[#D0D7DE] rounded-lg focus:border-[#1976D2] outline-none transition-all placeholder:text-[#CFD8DC]"
              />
            ))}
          </div>

          <button className="w-full h-[50px] flex items-center justify-center rounded-lg bg-gradient-to-r from-[#2DAAE1] to-[#2C5DAA] text-white text-[15px] font-bold shadow-md hover:brightness-105 active:scale-[0.98] transition-all">
            Verify
          </button>
        </div>

        <div className="h-10 invisible shrink-0"></div>
      </div>

      <div className="w-[52%] h-full relative overflow-hidden bg-[#F4F6F8]">
        <Image 
          src="/verify-bg.png.png" 
          alt="Verify Background"
          fill
          className="object-cover object-center"
          priority
          sizes="52vw"
        />
      </div>
      
    </div>
  );
}