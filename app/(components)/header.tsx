"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { MenuIcon, SearchIcon } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { SignUp } from "./auths/sign-up";
import { SignIn } from "./auths/sign-in";
import logo from "./assets/logo.svg";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

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
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [mobileView, setMobileView] = useState<boolean>(true);
  // const [deviceWidth, setDeviceWidth] = useState<number>(
  //   window?.innerWidth || 0
  // );
  const handleResize = () => {
    let width = window?.innerWidth;
    // setDeviceWidth(width);
    if (width < 1024) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  };
  useEffect(() => {
    Aos.init();
    handleResize();
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const menuRef = useRef<any>(null);
  const onOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event?.target as Node)) {
      setShowMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", onOutsideClick);
    return () => {
      document.removeEventListener("click", onOutsideClick);
    };
  }, []);
  const loginRef:React.Ref<HTMLAnchorElement> | undefined = useRef(null)
  const autoClick=()=>{
    if(loginRef.current){
      console.log('clicked')
      loginRef.current.click()
    }
  }
  return (
    <nav className="w-full relative flex shrink-0 lg:justify-center justify-between items-center h-[80px] gap-x-[44px] py-[32px] px-[24px] bg-white border-b-[1px] border-[rgba(124,110,83,0.04)]">
      {/* Logo  */}
      <Link
        href={"/"}
        data-aos="fade-right"
        className="text-[24px] font-[400] leading-[30.62px] text-[#121212]"
      >
        <Image src={logo} width={82} height={44} alt="logo" className="" />
      </Link>
      <div ref={menuRef} className="relative">
        <MenuIcon
          data-aos="fade-left"
          ref={menuRef}
          height={32}
          width={32}
          className="lg:hidden "
          onClick={() => setShowMenu((prev) => !prev)}
        />
        <div
          ref={menuRef}
          className={` ${
            showMenu && mobileView
              ? "w-[55vw] fixed top-0 right-0 h-screen flex flex-col gap-y-[16px] text-white pt-[32px] bg-secondary z-50 overflow-hidden"
              : mobileView &&
                !showMenu &&
                "z-40  w-0 transform  overflow-hidden fixed top-0 right-0 h-screen flex flex-col gap-y-[16px] text-white pt-[32px] bg-secondary"
          } lg:flex gap-x-[44px] items-center transition-w duration-500 ease-in-out lg:text-primary`}
        >
          {navLinks.map((item, index) => (
            <Link
              href={"/"}
              key={index}
              onClick={() => setShowMenu(false)}
              className="text-[18px] font-[400] leading-[30.62px] l/lg:hover:text-secondary hover:text-primary-foreground"
            >
              {item.title}
            </Link>
          ))}
          <Modal
            showXIcon={true}
            triggerBtn={
              <Link
              ref={loginRef}
                onClick={() => setShowMenu(false)}
                href={"#"}
                className="hover:text-secondary"
              >
                Sign In
              </Link>
            }
            className="xl:w-[902px] xl:px-[32px] xl:pt-[84px] xl:pb-[64px] lg:w-[600px]"
          >
            {<SignIn />}
          </Modal>
          <Modal 
            showXIcon={true}
            triggerBtn={
              <Button
                type="button"
                variant={"secondary"}
                onClick={() => setShowMenu(false)}
                className="bg-[#016766] py-[12px] px-[24px] text-white text-[18px] font-[400] rounded-none"
              >
                Create account
              </Button>
            }
            className="w-full box-border xl:w-[902px] xl:px-[32px] xl:pt-[84px] xl:pb-[64px] lg:w-[600px]"
          >
            {<SignUp autoClick={autoClick}/>}
          </Modal>

          <SearchIcon strokeWidth={1} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
