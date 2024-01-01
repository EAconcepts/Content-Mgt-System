'use client'

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import one from './assets/one.png'
import bulb from './assets/lightBulb.png'
import pumpkin from './assets/pumpkin.png'
import customMouse from './assets/customMouse.png'
import Image from "next/image";
import Link from "next/link";
import Tags from "./tags";
import { TagsProps } from "@/@types";
import { RecentPostsProps } from "@/@types";

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
        color: "#670101"
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
      <div className="w-full h-[600px] bg-[#F0F2F5] flex flex-col items-center justify-center px-[30px] lg:px-0 ">
        <div className="w-full flex flex-col lg:w-[691px] gap-y-[14.49px] lg:gap-y-[32px] ">
          <h2 className="text-[#000] text-center text-[21.74px] lg:text-[48px] leading-[27.74px] lg:leading-[30.62px] font-[700]">
            Subscribe to our Newsletter
          </h2>
          <div className=" relative flex justify-center lg:mx-[41px] px-[17.8px] lg:px-0">
          <form className="w-full text-[9.06px] lg:text-base leading-[11.56px] flex gap-x-[10px] py-[10.87px] px-[28.99px] lg:py-[24px]  lg:px-[64px] rounded-[64px] border-[1px] border-black bg-white ">
            <input
              type="text"
              placeholder="Enter your email address"
              className=" grow focus-within:outline-none"
            />
            <Button
              variant={"secondary"}
              size={"sm"}
              className="rounded-[24px] border-[1px] lg:py-[16px] lg:px-[32px]"
            >
              Subscribe
            </Button>
          </form>
          <Image src={customMouse} width={300} height={200} alt={'Mouse'} className="hidden lg:block lg:absolute right-[-200px] top-[-55px] w-[234px] h-[155px] overflow-visible"/>
          </div>
          <p className="mx-[56px] lg:mx-[124px] text-center text-[7.25px] lg:text-[16px] font-[400] leading-[9.25px] lg:leading-[30.62px] ">
            Subscribe to our email newsletter to get the latest posts delivered
            right to your email.
          </p>
        </div>
      </div>
      {/* section 2 */}
      <div className="w-full px-[30px] py-[82px] hidden lg:flex justify-between bg-white lg:px-[83px]">
        {/* Recent Posts */}
        <div className="w-[498px] pr-[95.28px] gap-y-[64px] hidden lg:flex flex-col justify-between">
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
                   <Tags key={index} tagName={tag.tagName} color={tag.color}/>
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
        <p className="text-black font-[400] text-[7.25px] lg:text-[20px] leading-[25.52px]">Copyright 2023 @ Bloggar. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
