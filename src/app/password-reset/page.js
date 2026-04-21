"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"; 

export default function PasswordResetPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const router = useRouter();

  const handleReset = () => {
    router.push("/congratulations");
  };

  const EyeOpen = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );

  const EyeClosed = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.88 9.88 2 2m7.88 7.88L12 12m-2.12-2.12 4.24 4.24M17 17l5 5m-5-5-2.12-2.12M3 3l5 5m9.38 3.38A10.14 10.14 0 0 1 22 12s-3-7-10-7a9.74 9.74 0 0 0-5.39 1.61M2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61M12 15a3 3 0 1 0 0-6" />
    </svg>
  );

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden font-sans" dir="ltr">

      <div className="w-[48%] h-full bg-white px-[80px] flex flex-col justify-center shrink-0 relative">

        <div className="flex items-center justify-between w-full absolute top-[40px] left-0 px-[80px]">
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

        <div className="max-w-[420px] w-full mt-[90px] text-left">

          <p className="text-[12px] text-[#9E9E9E] mb-3 font-semibold tracking-[0.15em] uppercase">
            Password recovery
          </p>

          <h2 className="text-[38px] font-bold text-[#1A1A1A] mb-4 leading-[1.1] tracking-tight">
            Password reset
          </h2>

          <p className="text-[14px] text-[#9E9E9E] mb-[45px] leading-[1.7] font-medium">
            Kindly enter a new password.
          </p>

          <div className="mb-6 relative">
            <label className="block text-[14px] text-[#1A1A1A] font-bold mb-3">
              New password
            </label>

            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[56px] px-5 pr-12 text-[15px] border border-[#D0D7DE] rounded-lg focus:border-[#1976D2] outline-none text-black"
              />

              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9E9E9E] hover:text-[#1976D2]"
              >
                {showPass ? <EyeOpen /> : <EyeClosed />}
              </button>
            </div>
          </div>

          <div className="mb-10 relative">
            <label className="block text-[14px] text-[#1A1A1A] font-bold mb-3">
              Confirm new password
            </label>

            <div className="relative">
              <input
                type={showConfirmPass ? "text" : "password"}
                placeholder="••••••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full h-[56px] px-5 pr-12 text-[15px] border border-[#D0D7DE] rounded-lg focus:border-[#1976D2] outline-none text-black"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9E9E9E] hover:text-[#1976D2]"
              >
                {showConfirmPass ? <EyeOpen /> : <EyeClosed />}
              </button>
            </div>
          </div>

          <button 
            onClick={handleReset}
            className="w-full h-[54px] flex items-center justify-center rounded-lg bg-gradient-to-r from-[#2DAAE1] to-[#2C5DAA] text-white text-[15px] font-bold shadow-md hover:opacity-95 transition-all active:scale-[0.98]"
          >
            Reset
          </button>

        </div>
      </div>

      <div className="w-[52%] h-full relative overflow-hidden bg-[#F4F6F8]">
        <Image src="/forgot-bg.png.png" alt="Recovery" fill className="object-cover" priority />
      </div>

    </div>
  );
}