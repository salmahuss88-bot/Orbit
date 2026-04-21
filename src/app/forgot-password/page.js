"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"; 

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const router = useRouter(); 

  const handleNavigation = () => {
    router.push("/email-verification");
  };

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden font-sans" dir="ltr">

      <div className="w-[48%] h-full bg-white px-[80px] flex flex-col justify-center">

        <div className="flex items-center justify-between w-full mb-[80px]">
          <div className="flex items-center gap-3">
            <Image src="/orbit-logo.png" alt="logo" width={42} height={42} priority />
            <div className="leading-tight">
              <p className="text-[#1976D2] text-[16px] font-bold">Orbit</p>
              <p className="text-[#9E9E9E] text-[10px] font-medium">ERP System</p>
            </div>
          </div>

          <Link
            href="/signup"
            className="text-[#1976D2] text-[12px] font-bold border border-[#1976D2] px-6 py-2 rounded-lg hover:bg-blue-50 transition-all"
          >
            Sign Up
          </Link>
        </div>

        <div className="max-w-[420px] w-full text-left">

          <p className="text-[12px] text-[#9E9E9E] mb-3 font-semibold tracking-[0.1em] uppercase">
            Password recovery
          </p>

          <h2 className="text-[38px] font-bold text-[#1A1A1A] mb-4 leading-[1.1] tracking-tight">
            Forgot your password?
          </h2>

          <p className="text-[14px] text-[#9E9E9E] mb-[50px] leading-[1.7] font-medium">
            Kindly enter the email address linked to this account and we will send you a code to enable you change your password.
          </p>

          <div className="mb-8">
            <label className="block text-[14px] text-[#1A1A1A] font-bold mb-3">
              Email address
            </label>

            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[54px] px-5 text-[15px] border border-[#D0D7DE] rounded-lg focus:border-[#1976D2] outline-none transition-all placeholder:text-[#CFD8DC] text-black border"
            />
          </div>

          <button 
            onClick={handleNavigation}
            className="w-full h-[54px] flex items-center justify-center rounded-lg bg-gradient-to-r from-[#2DAAE1] to-[#2C5DAA] text-white text-[15px] font-bold shadow-md hover:opacity-95 active:scale-[0.98] transition-all"
          >
            Send
          </button>
        </div>
      </div>

      <div className="w-[52%] h-full relative overflow-hidden bg-[#F4F6F8]">
        <Image
          src="/forgot-bg.png.png"
          alt="Password Recovery"
          fill
          className="object-cover object-center"
          priority
          sizes="52vw"
        />
      </div>

    </div>
  );
}