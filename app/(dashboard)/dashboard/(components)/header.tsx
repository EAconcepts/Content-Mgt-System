'use client'

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from '../../../(components)/assets/logo.svg'
import { RxHamburgerMenu } from "react-icons/rx";
import { X } from "lucide-react";
import avatar from '../../../(components)/assets/avatar.svg'
import Link from "next/link";
import { Grid2X2 } from "lucide-react";
import { IoSettingsOutline } from "react-icons/io5";
import { CiGrid41, CiImageOn, CiUser } from "react-icons/ci";
import { TfiCommentAlt } from "react-icons/tfi";
import { HiMiniArrowRightOnRectangle } from "react-icons/hi2";
import { twJoin } from "tailwind-merge";

const Header = () => {
  const [openNav, setOpenNav] = useState<boolean>(false)
  const navlists=[
    {
      title: 'Dashboard',
      link: '/dashboard',
      icon: <CiGrid41/>,
    },
    {
      title: 'Authors',
      link: '/authors',
      icon: <CiUser/>,
    },{
      title: 'Posts',
      link: '/posts',
      icon: <CiImageOn/>,
    },{
      title: 'Comments',
      link: '/comments',
      icon: <TfiCommentAlt/>,
    },{
      title: 'Settings',
      link: '/settings',
      icon: <IoSettingsOutline/>,
    },{
      title: 'Logout',
      link: '/logout',
      icon: <HiMiniArrowRightOnRectangle/>,
    },
  ]
  const [activeLink, setActiveLink] = useState<string>('Dashboard')
  const menuRef:  React.MutableRefObject<null> = useRef(null)
  const onOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event?.target as Node)) {
      setOpenNav(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", onOutsideClick);
    return () => {
      document.removeEventListener("click", onOutsideClick);
    };
  }, []);
  return (
  <header className="w-full relative bg-[#E5E5E5] flex flex-col gap-y-[24px] py-[24px] px-[32px]">
    <div className='w-full flex justify-between'>
      <Image src={logo} width={0} height={0} alt="logo" className=""/>
      <div ref={menuRef} onClick={()=>{
        setOpenNav(true)
        console.log('yeahhhhh')
        console.log('yeahhhhh')
        }}>
      <RxHamburgerMenu size={24} />  
      </div>
    </div>
    <h4 className="text-[#143D3C] font-manrope font-[600] text-[20px] leading-[16px] ">Welcome Nesto,</h4>
    {
      openNav &&
    <nav  className="fixed top-0 bottom-0 right-0 z-[999] bg-white max-w-fit px-[10px] pt-[24px] flex flex-col">
      <X onClick={()=>{
        console.log('Cliked!!!')
        setOpenNav(false)}} className="self-end mr-[18px]"/>
      <div className='mt-[16px] flex gap-x-[8px]'>
        <Image src={avatar} width={0} height={0} alt="avatar" className=""/>
        <div className='flex flex-col'>
          <h3>Nesto Emmna</h3>
          <p>Admin</p>
        </div>
      </div>
      <ul className="flex flex-col gap-y-[24px] mt-[32px]">
        {
          navlists?.map((item, index)=>((
        <Link key={index} href={'#'} className={twJoin(`flex gap-x-[12px] items-center pl-[16px] py-[8px] text-[#808080] ${activeLink ===item.title && 'bg-secondary text-white'}`)}
        onClick={()=>setActiveLink(item.title)}
        >
          {item.icon}
          <span>{item.title}</span>
        </Link>
        )))
}
      </ul>
    </nav>
}
  </header>
  )
};

export default Header;
