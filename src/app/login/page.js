"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen w-full font-sans">

      <div className="w-full lg:w-[50%] bg-[#F4F6F8] flex flex-col px-[70px] py-[45px]">

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/orbit-logo.png" alt="logo" width={46} height={46} />
            <div className="leading-tight">
              <p className="text-[#1976D2] text-[17px] font-bold">Orbit</p>
              <p className="text-[#9E9E9E] text-[12px] font-medium">ERP System</p>
            </div>
          </div>

          <Link
            href="/signup"
            className="px-6 py-2 border border-[#D0D7DE] rounded-md text-[13px] text-[#1976D2]  to-[#2C5DAA] font-semibold hover:bg-white transition-all"
          >
            Sign Up
          </Link>
        </div>

        <div className="flex-1 flex flex-col justify-center max-w-[360px] mx-auto lg:mx-0">
          <p className="text-[14px] text-[#9E9E9E] mb-1 font-medium">
            Welcome back!!
          </p>

          <h1 className="text-[38px] font-bold text-[#1A1A1A] mb-10 tracking-tight">
            Please Sign In
          </h1>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

            <div>
              <label className="text-[14px] text-[#37474F] mb-2 block font-bold">
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full h-[48px] px-4 rounded-lg border border-[#D1D5DB] text-[14px] text-black outline-none focus:border-[#1976D2] bg-white transition-all placeholder:text-[#9CA3AF]"
              />
            </div>

            <div>
              <label className="text-[14px] text-[#37474F] mb-2 block font-bold">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="***********"
                  className="w-full h-[48px] px-4 pr-12 rounded-lg border border-[#D1D5DB] text-[14px] text-black outline-none focus:border-[#1976D2] bg-white transition-all"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1976D2] p-1 transition-colors"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.644C3.399 8.049 7.21 5 12 5c4.79 0 8.601 3.049 9.964 6.678.045.152.045.332 0 .484C20.601 15.951 16.79 19 12 19c-4.79 0-8.601-3.049-9.964-6.678z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-[13px] mt-1">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" className="w-4 h-4 cursor-pointer accent-[#1976D2]" />
                <label htmlFor="remember" className="text-[#6B7280] font-medium cursor-pointer">
                  Remember me
                </label>
              </div>
              <Link href="/forgot-password" size="sm" className="text-[#1976D2] font-bold hover:underline">
                I forgot my password
              </Link>
            </div>

            <Link href="/verify" className="block mt-4">
              <button 
                type="button" 
                className="h-[50px] w-full flex items-center justify-center rounded-lg bg-gradient-to-r from-[#2DAAE1] to-[#2C5DAA] text-white text-[15px] font-bold shadow-lg hover:brightness-110 active:scale-[0.98] transition-all"
              >
                Sign In
              </button>
            </Link>

          </form>
        </div>
      </div>

      <div className="hidden lg:block lg:w-[50%] relative">
        <Image
          src="/login-bg.png"
          alt="background"
          fill
          className="object-cover"
          priority
        />
      </div>

    </div>
  );
}