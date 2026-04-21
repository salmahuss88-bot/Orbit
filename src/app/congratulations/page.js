"use client";
import Image from "next/image";
import Link from "next/link";

export default function CongratulationsPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black/60 p-4 font-sans">
      <div className="bg-white rounded-[32px] p-12 w-full max-w-[420px] flex flex-col items-center text-center shadow-2xl">
        
        <div className="mb-8 relative w-[120px] h-[120px]">
          <Image 
            src="/success.png.png" 
            alt="Success"
            fill
            className="object-contain"
            priority
          />
        </div>

        <h2 className="text-[26px] font-bold text-[#1A1A1A] mb-3">
          Congratulations
        </h2>

        <p className="text-[15px] text-[#9E9E9E] mb-10 leading-relaxed font-medium">
          You have successfully changed<br />your password.
        </p>

        <Link 
          href="/login" 
          className="w-full h-[56px] flex items-center justify-center rounded-xl bg-gradient-to-r from-[#34A8DA] to-[#2B59A7] text-white text-[16px] font-bold shadow-lg hover:opacity-90 transition-all active:scale-[0.95]"
        >
          Back To Login
        </Link>
      </div>
    </div>
  );
}