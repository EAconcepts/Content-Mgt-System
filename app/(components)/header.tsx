import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { SearchIcon } from "lucide-react";

const Header = () => {
  const navLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Lifestyle",
      link: "/lifestyle",
    },
    {
      title: "Sports",
      link: "/sports",
    },
    {
      title: "Tech",
      link: "/tech",
    },
    {
      title: "Travel",
      link: "/travel",
    },
  ];
  return (
    <nav className="w-full flex shrink-0 justify-center items-center h-[80px] gap-x-[44px] py-[32px] px-[24px] bg-white border-b-[1px] border-[rgba(124,110,83,0.04)]">
      {/* Logo Text */}
      <div className="text-[24px] font-[400] leading-[30.62px] text-[#121212]">
        <span>Bl</span>
        <span className="text-[#016766]">o</span>
        <span className="text-[#016766] font-[700]">
          G<span className="text-[#121212]">a</span>
        </span>
        <span>rr</span>
      </div>
      <div className="flex gap-x-[44px] items-center">
        {navLinks.map((item, index)=>(
        <Link href={"/"} key={index} className="text-primary text-[18px] font-[400] leading-[30.62px]">{item.title}</Link>
        ))}
        <Link href={'/'} className="">Sign In</Link>
        <Button type="button" variant={"secondary"} className="bg-[#016766] py-[12px] px-[24px] text-white text-[18px] font-[400] rounded-none hover:bg-[#016766]/90">Create account</Button> 
        <SearchIcon strokeWidth={1}/>
      </div>
    </nav>
  );
};

export default Header;
