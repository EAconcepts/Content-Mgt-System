'use client'

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import one from './assets/one.png'
import bulb from './assets/lightBulb.png'
import pumpkin from './assets/pumpkin.png'
import customMouse from './assets/customMouse.png'
import Image from "next/image";
import Link from "next/link";

interface RecentPostsProps {
  title: string;
  image: string;
  date: string;
}
interface TagsProps {
    tagName: string,
    color: string
}
const Footer = () => {
  const [recentPosts, setRecentPosts] = useState<RecentPostsProps[]>([
    {
      title: "How to optimize images in WordPress for faster loading",
      image: one.src,
      date: "27th December 2023",
    },
    {
      title: "How to optimize images in WordPress for faster loading",
      image: bulb.src,
      date: "27th December 2023",
    },
    {
        title: "How to optimize images in WordPress for faster loading",
        image: pumpkin.src,
        date: "27th December 2023",
      },
  ]);
  const [allTags, setAllTags] =useState<TagsProps[]>([
    {
        tagName: 'Tech',
        color: '#016766'
    },
    {
        tagName: 'Sports',
        color: '#FA6ED3'
    },
    {
        tagName: 'Lifestyle',
        color: '#670101'
    },
    {
        tagName: 'Health',
        color: '#02042E'
    },
    {
        tagName: 'News',
        color: '#1B8C34'
    },
  ])
  return (
    <footer className="w-full flex flex-col">
        {/* Subscribe */}
      <div className="w-full h-[600px] bg-[#F0F2F5] flex flex-col items-center justify-center">
        <div className="flex flex-col w-[691px] gap-y-[32px] ">
          <h2 className="text-[#000] text-center text-[48px] leading-[30.62px] font-[700]">
            Subscribe to our Newsletter
          </h2>
          <div className=" relative flex justify-center mx-[41px]">
          <form className="w-full flex gap-x-[10px] py-[24px] px-[64px] rounded-[64px] border-[1px] border-black bg-white ">
            <input
              type="text"
              placeholder="Enter your email address"
              className=" grow focus-within:outline-none"
            />
            <Button
              variant={"secondary"}
              className="rounded-[24px] border-[1px] py-[16px] px-[32px]"
            >
              Subscribe
            </Button>
          </form>
          <Image src={customMouse} width={300} height={200} alt={'Mouse'} className="absolute right-[-200px] top-[-55px] w-[234px] h-[155px] overflow-visible"/>
          </div>
          <p className=" mx-[124px] text-center text-[16px] font-[400] leading-[30.62px] ">
            Subscribe to our email newsletter to get the latest posts delivered
            right to your email.
          </p>
        </div>
      </div>
      {/* section 2 */}
      <div className="w-full py-[82px] flex justify-between bg-white px-[83px]">
        {/* Recent Posts */}
        <div className="w-[498px] pr-[95.28px] gap-y-[64px] flex flex-col justify-between">
          <h3 className="font-[700] text-[32px] leading-[40.83px] ">
            Recent Posts
          </h3>
          <div className="flex flex-col gap-y-[24px]">
            {
                recentPosts?.map((post, index)=>(
                    <div key={index} className="flex gap-x-[21px]">
                        <Image src={post.image} width={100} height={100} alt={post.title} className="w-[63.72px] h-[72px] object-cover rounded-[2.21px] border-[0.14px] border-black"/>
                        <div className="flex flex-col gap-y-[16px]">
                            <p className="font-[700] text-[24px] leading-[30.62px] text-black">{post.title}</p>
                            <small className="font-[400] text-[16px] leading-[20.42px] text-primary">{post.date}</small>
                        </div>
                    </div>
                ))
            }
          </div>
        </div>
        {/* Tags */}
        <div className="flex flex-col gap-y-[64px] ">
            <h3 className="font-[700] text-[32px] leading-[40.83px] ">Tags</h3>
            <div className="max-w-[409px] flex flex-wrap gap-[32px]">
                {allTags?.map((tag, index)=>(
                    <button key={index} className="flex gap-x-[10px] items-center justify-center rounded-[24px] border-[1px] border-black bg-white text-center py-[16px] px-[32px]">
                        <div className={`w-[16px] h-[16px] rounded-full bg-[${tag.color}]` }></div>
                        <p>{tag.tagName}</p>
                    </button>
                ))}
            </div>
        </div>
        {/* Follow us */}
        <div className="min-w-max flex flex-col gap-y-[64px]">
            <h3 className="font-[700] text-[32px] leading-[40.83px] ">Follow us !</h3>
            <div className="flex flex-col gap-y-[24px] text-black text-[24px] font-[400]">
                <Link href={''} className="">Facebook</Link>
                <Link href={''} className="">Instagram</Link>
                <Link href={''} className="">LinkedIn</Link>
            </div>
        </div>
      </div>
      <div className="w-full flex justify-center border-[1px] border-black/[39%] pt-[21px] pb-[31px] border-r-0">
        <p className="text-black font-[400] text-[20px] leading-[25.52px]">Copyright 2023 @ Bloggar. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
