"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { TbFilterSearch } from "react-icons/tb";
import avatar from "../../(components)/assets/avatar.svg";
import Image from "next/image";
import { FaEllipsisV, FaGreaterThan } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const [authors, setAuthors] = useState([
    {
      name: "Ernest Gray",
      avatar: avatar,
      status: "Upgrade",
    },
    {
      name: "Ernest Gray",
      avatar: avatar,
      status: "Upgrade",
    },
    {
      name: "Ernest Gray",
      avatar: avatar,
      status: "Upgrade",
    },
    {
      name: "Ernest Gray",
      avatar: avatar,
      status: "Upgrade",
    },
    {
      name: "Ernest Gray",
      avatar: avatar,
      status: "Upgrade",
    },
    {
      name: "Ernest Gray",
      avatar: avatar,
      status: "Upgrade",
    },
    {
      name: "Ernest Gray",
      avatar: avatar,
      status: "Upgrade",
    },
    {
      name: "Ernest Gray",
      avatar: avatar,
      status: "Upgrade",
    },
    {
      name: "Ernest Gray",
      avatar: avatar,
      status: "Upgrade",
    },
  ]);
  return (
    <main className="w-full flex flex-col py-[16px] px-[32px]">
      <div className="w-full flex flex-col gap-y-[8px]">
        <p className="font-[600] text-[#4C4C4C]">In the last 30 days</p>
        {/* Boxes */}
        <div className="w-full h-[93px] flex gap-x-[16px]">
          {/* Box */}
          <div className="relative w-[93px] h-full">
            <div
              className="absolute
                         bottom-0 z-10 flex flex-col gap-y-[8px] px-[8px] py-[8px]"
            >
              <h3 className="text-white text-[24px] font-[600] leading-[24px]">
                30k
              </h3>
              <p className="text-[12px] font-[400] leading-[16px] text-white">
                Posts
              </p>
            </div>
            <div className="w-0 h-0 border-l-transparent  border-l-[93px] border-t-[93px] border-t-[#143D3C] rounded-[8px]"></div>
            <div className="absolute -z-1 bottom-[1px] left-[1px] w-0 h-0 border-r-transparent  border-r-[93px] border-b-[93px] border-b-[#364B1B] rounded-[8px]"></div>
          </div>
          <div className="relative w-[93px] h-full">
            <div
              className="absolute
                         bottom-0 z-10 flex flex-col gap-y-[8px] px-[8px] py-[8px]"
            >
              <h3 className="text-white text-[24px] font-[600] leading-[24px]">
                100k
              </h3>
              <p className="text-[12px] font-[400] leading-[16px] text-white">
                Authors
              </p>
            </div>
            <div className="w-0 h-0 border-l-transparent  border-l-[93px] border-t-[93px] border-t-[#143D3C] rounded-[8px]"></div>
            <div className="absolute -z-1 bottom-[1px] left-[1px] w-0 h-0 border-r-transparent  border-r-[93px] border-b-[93px] border-b-[#364B1B] rounded-[8px]"></div>
          </div>
          <div className="relative w-[93px] h-full">
            <div
              className="absolute
                         bottom-0 z-10 flex flex-col gap-y-[8px] px-[8px] py-[8px]"
            >
              <h3 className="text-white text-[24px] font-[600] leading-[24px]">
                2k
              </h3>
              <p className="text-[12px] font-[400] leading-[16px] text-white">
                Comments
              </p>
            </div>
            <div className="w-0 h-0 border-l-transparent  border-l-[93px] border-t-[93px] border-t-[#143D3C] rounded-[8px]"></div>
            <div className="absolute -z-1 bottom-[1px] left-[1px] w-0 h-0 border-r-transparent  border-r-[93px] border-b-[93px] border-b-[#364B1B] rounded-[8px]"></div>
          </div>
        </div>
        {/* Authors / search & Filter */}
        <div className="mt-[16px] py-[16px] w-full flex justify-center">
          <div className="w-full flex justify-between">
            <div className="flex flex-col gap-y-[8px]">
              <p className="text-[#4C4C4C] text-[12px] font-[600] leading-[9.672px]">
                All authors
              </p>
              <p className=" text-[#B3B3B3] text-[8px] font-[400] leading-[4.836px]">
                Tracks authors activities and make super admin
              </p>
            </div>
            {/* Search & Filter */}
            <div className="flex gap-x-[6.57px]">
              <div className="bg-[#FAFAFA] border-[0.411px] rounded-[1.643px] border-[#E6E6E6] h-[32px] w-[32px] flex justify-center items-center">
                <CiSearch size={16} />
              </div>
              <div className=" border-[0.411px] rounded-[1.643px] border-[#E6E6E6] h-[32px] w-[32px] flex justify-center items-center">
                <TbFilterSearch />
              </div>
            </div>
          </div>
        </div>
        Author Lists
        <div className="w-full mt-[16px] flex flex-col font-roboto">
          <div className="grid grid-cols-2 text-[16px] font-[500] leading-[24px] text-black  ">
            <h4>Name</h4>
            <div className="flex gap-x-[32px] justify-end">
              <h4>Email</h4>
              <h4>Action</h4>
            </div>
          </div>
          <div className="w-full  flex flex-col gap-y-[8px] divide-y-[1px] divide-[#B4B4B4] ">
            {authors?.map((author, index) => (
              <div
                key={index}
                className="w-full first:mt-[16px] grid grid-cols-2 pt-[8px]  place-content-center"
              >
                <div className="flex gap-x-[8px] items-center">
                  <Image
                    src={author.avatar}
                    width={32}
                    height={32}
                    alt="avatar"
                  />
                  <h3 className="w-[77px]  text-nowrap overflow-x-hidden overflow-ellipsis text-[14px] font-[500] leading-[21px] text-black">
                    {author.name}
                  </h3>
                </div>
                <div className="flex  justify-end pr-[16px] gap-x-[32px] items-center">
                  <button className="text-[14px] text-[#143D3C] font-[600] leading-[21px]">
                    {author.status}
                  </button>
                  <FaEllipsisV />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="font-roboto w-full flex justify-end mt-[24px]">
            <Button className="flex gap-x-[12px] items-center text-[16px] font-[400] leading-[24px] bg-[#143D3C] text-[#FEFDFD] px-[20px] py-[8px] rounded-none">
                <span>Next</span>
                <FaGreaterThan color="white" size={12}/>
            </Button>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
