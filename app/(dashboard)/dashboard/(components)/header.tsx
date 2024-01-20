"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../../(components)/assets/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { X } from "lucide-react";
import avatar from "../../../(components)/assets/avatar.svg";
import Link from "next/link";
import { Grid2X2 } from "lucide-react";
import { IoSettingsOutline } from "react-icons/io5";
import { CiGrid41, CiImageOn, CiUser } from "react-icons/ci";
import { TfiCommentAlt } from "react-icons/tfi";
import { HiMiniArrowRightOnRectangle } from "react-icons/hi2";
import { twJoin } from "tailwind-merge";
import { NavMenuProps } from "@/@types";
import { IoIosNotificationsOutline } from "react-icons/io";

export const NavMenu=({activeLink, setActiveLink}:NavMenuProps)=>{
  const navlists = [
    {
      title: "Dashboard",
      link: "/dashboard",
      icon: <CiGrid41 />,
    },
    {
      title: "Authors",
      link: "/authors",
      icon: <CiUser />,
    },
    {
      title: "Posts",
      link: "/posts",
      icon: <CiImageOn />,
    },
    {
      title: "Comments",
      link: "/comments",
      icon: <TfiCommentAlt />,
    },
    {
      title: "Settings",
      link: "/settings",
      icon: <IoSettingsOutline />,
    },
    {
      title: "Logout",
      link: "/logout",
      icon: <HiMiniArrowRightOnRectangle />,
    },
  ];
  return(
<ul className="flex flex-col gap-y-[24px] mt-[32px]">
          {navlists?.map((item, index) => (
            <Link
              key={index}
              href={"#"}
              className={twJoin(
                `flex gap-x-[12px] items-center px-[26px] py-[8px] text-[#808080] ${
                  activeLink === item.title && "bg-secondary text-white"
                }`
              )}
              onClick={() => setActiveLink(item.title)}
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          ))}
        </ul>
  )
}
const Header = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  
  const [activeLink, setActiveLink] = useState<string>("Dashboard");
  const menuRef: any = useRef(null);
  const onOutsideClick = (event: any) => {
    if (
      openNav &&
      menuRef.current &&
      !menuRef.current.contains(event?.target as Node)
    ) {
      setOpenNav(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", onOutsideClick);
    return () => {
      document.removeEventListener("click", onOutsideClick);
    };
  }, [openNav]);
  return (
    <header className="w-full relative lg:bg-white bg-[#E5E5E5] flex flex-col gap-y-[24px] lg:pt-[20px] py-[24px] px-[32px] font-manrope">
      <div className='hidden lg:block'>
        <div className='flex justify-end gap-x-[32px]'>
          <div className="w-[40px] bg-[#F2F2F2] flex items-center justify-center p-[8px] rounded-full">
            <IoIosNotificationsOutline size={24}/>
          </div>
          <div className="mt-[16px] flex gap-x-[8px]">
          <Image
            src={avatar}
            width={0}
            height={0}
            alt="avatar"
            className="w-[40px] h-[40px]"
          />
          <div className="flex flex-col leading-[16px] text-[14px] gap-y-[4px]">
            <h3 className="text-[#4C4C4C] font-[600] ">Nesto Emmna</h3>
            <p className="text-[#B3B3B3] font-[500px]">Admin</p>
          </div>
        </div>
        </div>
      </div>
      <div className="lg:hidden w-full flex justify-between">
        <Image src={logo} width={0} height={0} alt="logo" className="" />
        <div
          ref={menuRef}
          onClick={() => {
            setOpenNav(true);
          }}
          className=""
        >
          <RxHamburgerMenu size={24} />
        </div>
      </div>
      <h4 className="lg:hidden text-[#143D3C] font-[600] text-[20px] leading-[16px] ">
        Welcome Nesto,
      </h4>
      {/* Mobile Menu */}
      <nav
        ref={menuRef}
        className={`fixed top-0 bottom-0 right-0 z-[999] bg-white max-w-fit px-[24px] pt-[24px] flex flex-col transition-all ease-in duration-500 ${
          !openNav && "right-[-100%]"
        }`}
      >
        <X
          onClick={() => {
            setOpenNav(false);
          }}
          className="self-end mr-[18px]"
        />
        <div className="mt-[16px] flex gap-x-[8px]">
          <Image
            src={avatar}
            width={0}
            height={0}
            alt="avatar"
            className="w-[40px] h-[40px]"
          />
          <div className="flex flex-col leading-[16px] text-[14px] gap-y-[4px]">
            <h3 className="text-[#4C4C4C] font-[600] ">Nesto Emmna</h3>
            <p className="text-[#B3B3B3] font-[500px]">Admin</p>
          </div>
        </div>
        <NavMenu activeLink={activeLink} setActiveLink={setActiveLink}/>
      </nav>
    </header>
  );
};

export default Header;
