"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { TbFilterSearch } from "react-icons/tb";
import avatar from "../../(components)/assets/avatar.svg";
import Image from "next/image";
import { FaEllipsisV, FaGreaterThan, FaLessThan } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const [authors, setAuthors] = useState([
    {
      name: "Ernest Gray",
      avatar: avatar,
      status: "Upgrade",
      email: "elvin27@gmail.com",
      postCount: 4,
      mostViewed: "5 Tips to make money",
      date: "1/11/2050",
    },
    {
      name: "Ernest Gray",
      avatar: avatar,
      status: "Upgrade",
      email: "elvin27@gmail.com",
      postCount: 2,
      mostViewed: "5 Tips to make money",
      date: "1/11/2050",
    },
    {
      name: "Ernest Gray",
      avatar: avatar,
      status: "Upgrade",
      email: "elvin27@gmail.com",
      postCount: 4,
      mostViewed: "5 Tips to make money",
      date: "1/11/2050",
    },
    {
      name: "Ernest Gray",
      avatar: avatar,
      status: "Upgrade",
      email: "elvin27@gmail.com",
      postCount: 1,
      mostViewed: "5 Tips to make money",
      date: "1/11/2050",
    },
    {
      name: "Ernest Gray",
      avatar: avatar,
      status: "Upgrade",
      email: "elvin27@gmail.com",
      postCount: 3,
      mostViewed: "5 Tips to make money",
      date: "1/11/2050",
    },
    {
      name: "Ernest Gray",
      avatar: avatar,
      status: "Upgrade",
      email: "elvin27@gmail.com",
      postCount: 2,
      mostViewed: "5 Tips to make money",
      date: "1/11/2050",
    },
    {
      name: "Ernest Gray",
      avatar: avatar,
      status: "Upgrade",
      email: "elvin27@gmail.com",
      postCount: 4,
      mostViewed: "5 Tips to make money",
      date: "1/11/2050",
    },
    {
      name: "Ernest Gray",
      avatar: avatar,
      status: "Upgrade",
      email: "elvin27@gmail.com",
      postCount: 3,
      mostViewed: "5 Tips to make money",
      date: "1/11/2050",
    },
    {
      name: "Ernest Gray",
      avatar: avatar,
      status: "Upgrade",
      email: "elvin27@gmail.com",
      postCount: 4,
      mostViewed: "5 Tips to make money",
      date: "1/11/2050",
    },
    {
      name: "Ernest Gray",
      avatar: avatar,
      status: "Upgrade",
      email: "elvin27@gmail.com",
      postCount: 2,
      mostViewed: "5 Tips to make money",
      date: "1/11/2050",
    },
    {
      name: "Ernest Gray",
      avatar: avatar,
      status: "Upgrade",
      email: "elvin27@gmail.com",
      postCount: 1,
      mostViewed: "5 Tips to make money",
      date: "1/11/2050",
    },
    {
      name: "Ernest Gray",
      avatar: avatar,
      status: "Upgrade",
      email: "elvin27@gmail.com",
      postCount: 4,
      mostViewed: "5 Tips to make money",
      date: "1/11/2050",
    },
  ]);
  return (
    <main className="w-full bg-white lg:bg-[#E5E5E5] flex flex-col py-[16px] lg:py-[42px] px-[32px]">
      <h3 className="hidden lg:block font-manrope text-[32px] font-[400] leading-[16px] text-[#143DC]">
        Welcome Nesto,
      </h3>
      <div className="w-full flex flex-col gap-y-[8px] lg:gap-y-[32px] lg:mt-[42px] ">
        <div className="flex flex-col gap-y-[8px] lg:gap-y-[24px] lg:bg-white lg:py-[24px] lg:px-[17.5px]">
          <p className="font-[600] lg:text-[18px] lg:font-[600] lg:leading-[32px] text-[#4C4C4C]">
            In the last 30 days
          </p>
          {/* Boxes */}
          <div className="w-full h-[93px] lg:h-[80px] flex gap-x-[16px]">
            {/* Box */}
            <div className="relative lg:flex flex-col justify-center w-[93px] lg:w-full h-full">
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
              <div className="w-0 lg:w-full lg:h-ful h-0 border-l-transparent  border-l-[93px] border-t-[93px] border-t-[#143D3C] rounded-[8px]"></div>
              <div className="absolute -z-1 bottom-[1px] lg:-bottom-[7px] left-[1px] w-0 lg:w-[40%] h-0 lg:h-ful lg: border-r-transparent  border-r-[93px] border-b-[93px] border-b-[#364B1B] rounded-[8px]"></div>
            </div>
            {/* Box */}
            <div className="relative lg:flex flex-col justify-center w-[93px] lg:w-full h-full">
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
              <div className="w-0 lg:w-full lg:h-ful h-0 border-l-transparent  border-l-[93px] border-t-[93px] border-t-[#143D3C] rounded-[8px]"></div>
              <div className="absolute -z-1 bottom-[1px] lg:-bottom-[7px] left-[1px] w-0 lg:w-[40%] h-0 lg:h-ful lg: border-r-transparent  border-r-[93px] border-b-[93px] border-b-[#364B1B] rounded-[8px]"></div>
            </div>
            {/* Box */}
            <div className="relative lg:flex flex-col justify-center w-[93px] lg:w-full h-full">
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
              <div className="w-0 lg:w-full lg:h-ful h-0 border-l-transparent  border-l-[93px] border-t-[93px] border-t-[#143D3C] rounded-[8px]"></div>
              <div className="absolute -z-1 bottom-[1px] lg:-bottom-[7px] left-[1px] w-0 lg:w-[40%] h-0 lg:h-ful lg: border-r-transparent  border-r-[93px] border-b-[93px] border-b-[#364B1B] rounded-[8px]"></div>
            </div>
          </div>
        </div>
        {/* Authors / search & Filter */}
        <div className="lg:bg-white lg:p-[19px] mt-[16px] lg:mt-0 py-[16px] w-full flex justify-center">
          <div className="w-full flex justify-between">
            <div className="flex flex-col gap-y-[8px]">
              <p className="text-[#4C4C4C] text-[12px] lg:text-[18px] font-[600] leading-[9.672px] lg:leading-[32px]">
                All authors
              </p>
              <p className="text-[#B3B3B3] text-[8px] lg:text-[12px] font-[400] leading-[4.836px] lg:leading-[16px]">
                Tracks authors activities and make super admin
              </p>
            </div>
            {/* Search & Filter */}
            <div className="flex gap-x-[6.57px]">
              <div className="bg-[#FAFAFA] border-[0.411px] rounded-[1.643px] border-[#E6E6E6] h-[32px] w-[32px] lg:w-fit flex justify-center lg:justify-start items-center lg:gap-x-[16px] lg:pl-[16px] lg:py-[8px]">
                <CiSearch size={16} />
                <input
                  type="text"
                  placeholder="Search authors"
                  className="hidden lg:block text-[12px] font-[400] leading-[16px] text-[#B3B3B3] bg-transparent focus-visible:outline-none"
                />
              </div>
              <div className=" border-[0.411px] rounded-[1.643px] border-[#E6E6E6] h-[32px] w-[32px] lg:w-fit flex justify-center items-center lg:px-[4.5px] lg:py-[8px] lg:gap-x-[6px]">
                <TbFilterSearch />
                <span className="hidden lg:block text-[#4C4C4C] font-[400] text-[12px] leading-[16px]">
                  Filter
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Author Lists */}
        <div className="lg:hidden w-full lg:bg-white lg:p-[14px] mt-[16px] flex flex-col font-roboto">
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
        {/* Desktop table list */}
        <div className="w-full lg:p-[14px] bg-white">
          <table className="hidden lg:inline-table w-full font-roboto">
            <tbody>
              <tr className="border-b">
                <th className="text-start pb-[16px]">Name</th>
                <th className="text-start">Email</th>
                <th className="text-start">Post Count</th>
                <th className="text-start">Most Viewed</th>
                <th className="text-start">Date</th>
                <th> </th>
              </tr>
              {authors?.map((author, index) => (
                <tr key={index} className="border-b ">
                  <td className="py-[16px]">
                    <div className="flex gap-x-[8px] items-center">
                      <Image
                        src={author.avatar}
                        width={32}
                        height={32}
                        alt="avatar"
                      />
                      <h3 className="w-[77px]  text-nowrap overflow-x-hidden overflow-ellipsis text-[14px] lg:text-[16px] lg:leading-[24px] font-[500] leading-[21px] text-black">
                        {author.name}
                      </h3>
                    </div>
                  </td>
                  <td>{author.email}</td>
                  <td>
                    <div className="flex">
                      {Array.from({ length: author.postCount }).map(
                        (_, index) => (
                          <Image
                            key={index}
                            src={author.avatar}
                            width={32}
                            height={32}
                            alt="avatar"
                            className="first:ml-0 -ml-3"
                          />
                        )
                      )}
                    </div>
                  </td>
                  <td className="w-[77px] lg:w-auto text-nowrap overflow-x-hidden overflow-ellipsis text-[16px] font-[400] leading-[24px] text-black">
                    {author.mostViewed}
                  </td>
                  <td>{author.date}</td>
                  <td className="lg:text-[16px] font-[600] lg:leading-[24px] text-[#143D3C]">
                    <button>{author.status}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="font-roboto w-full flex justify-between mt-[24px]">
            <Button className="flex gap-x-[12px] items-center text-[16px] font-[400] leading-[24px] bg-[#143D3C] text-[#FEFDFD] px-[20px] py-[8px] rounded-none">
              <span>Prev</span>
              <FaLessThan color="white" size={12} />
            </Button>
            <div className="flex "></div>
            <Button className="flex gap-x-[12px] items-center text-[16px] font-[400] leading-[24px] bg-[#143D3C] text-[#FEFDFD] px-[20px] py-[8px] rounded-none">
              <span>Next</span>
              <FaGreaterThan color="white" size={12} />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
