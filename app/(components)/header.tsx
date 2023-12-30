import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { SearchIcon } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { SignUp } from "./sign-up";
import { SignIn } from "./sign-in";
import logo from './assets/logo.svg'
import Image from "next/image";

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
        <Image src={logo} width={82} height={44} alt="logo" className=""/>
      </div>
      <div className="flex gap-x-[44px] items-center">
        {navLinks.map((item, index) => (
          <Link
            href={"/"}
            key={index}
            className="text-primary text-[18px] font-[400] leading-[30.62px] hover:text-secondary"
          >
            {item.title}
          </Link>
        ))}
        <Modal
          showXIcon={true}
          triggerBtn={
            <Link href={"/"} className="hover:text-secondary">
              Sign In
            </Link>
          }
          children={<SignIn />}
          className="xl:w-[902px] xl:px-[32px] xl:pt-[84px] xl:pb-[64px] lg:w-[600px]"
        ></Modal>
        <Modal
          showXIcon={true}
          triggerBtn={
            <Button
              type="button"
              variant={"secondary"}
              className="bg-[#016766] py-[12px] px-[24px] text-white text-[18px] font-[400] rounded-none"
            >
              Create account
            </Button>
          }
          children={<SignUp />}
          className="xl:w-[902px] xl:px-[32px] xl:pt-[84px] xl:pb-[64px] lg:w-[600px]"
        ></Modal>

        <SearchIcon strokeWidth={1} />
      </div>
    </nav>
  );
};

export default Header;
