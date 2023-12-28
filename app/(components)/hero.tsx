'use client'

import Image from "next/image";
import React, { useState } from "react";
import herobg from "./assets/bg-1.png";
import avatar from './assets/avatar.png'
import fb from './assets/fb.svg'
import twitter from './assets/twitter.svg'
import linkedin from './assets/linkedin.svg'
import anchor from './assets/link.svg'
import Tags from "./tags";
import img1 from './assets/img-1.png'
import img2 from './assets/img-2.png'
import img3 from './assets/img-3.png'
import img4 from './assets/img-4.png'
import { RecentPostsProps } from "@/@types";

const Hero = () => {
    const socials = [fb, twitter, linkedin, anchor]
    const [featuredPosts, setFeaturedPosts] = useState<RecentPostsProps[]>([
        {
            title: 'YouTube Dominates Google Video in 2020',
            image: img1.src,
            tag: 'Tech'
        },
        {
            title: 'How to Create a Useful Optimized FAQ Page',
            image: img2.src,
            tag: 'Travel'
        },
        {
            title: '3 Digital PR Tenets for Excellent Outreach',
            image: img3.src,
            tag: 'Sports'
        },
        {
            title: 'Overcoming Blockers: How to Build Your Red Tape Toolkit',
            image: img4.src,
            tag: 'Lifestyle'
        },
    ])
  return (
    <div className="w-full flex justify-center items-center bg-[#F0F2F5] pt-[80.42px] pb-[79.58px] px-[97px] ">
      <div className="w-full flex gap-x-[15px]">
        <div className="relative flex justify-center">
          <Image
            src={herobg}
            width={705}
            height={587.5}
            alt="hero-image"
            className="w-[705px] h-[587.5px] rounded-[10px] object-cover"
          />
          {/* floating post */}
          <div className="absolute bottom-[-30px] w-[575px] bg-white pt-[16.46px] py-[30px] px-[32px]">
            <Tags color="#016766" tagName="Tech" />
            <h3 className="mt-[14.54px] text-primary text-[28px] leading-[34.2px] font-[700]">
              Competitive Advantage in a Commoditized Industry
            </h3>
            <div className="w-full mt-[27.19px] flex justify-between items-center">
                <div className="flex items-center gap-x-[15px]">
                    <Image src={avatar} width={50} height={50} alt="avatar" className="w-[50px] h-[50px]"/>
                    <div className="flex flex-col gap-y-[4.08px]">
                        <h3 className="text-[16px] leading-[20px] font-[500]">Ernesto</h3>
                        <div className="flex items-center gap-x-[15.17px] text-[#666] text-[16px] font-[400] leading-[18px]">
                            <p className="text-[#666] text-[16px] font-[400] leading-[18px]">January 24, 2024</p>
                            <div className="w-[4px] h-[4px] rounded-full bg-[#666] shrink-0"></div>
                            <p>4 min read</p>
                        </div>
                    </div>
                </div>
                {/* Socials */}
                <div className="flex gap-x-[13.61px]">
                    {
                    socials.map((item, index)=>(
                        <Image key={index} src={item} width={14} height={14} alt={item} className="w-[14.2px] h-[14px] shrink-0"/>
                    ))
                    }
                </div>
            </div>
          </div>
        </div>
        {/* Featured Posts */}
        <div className="w-[45%] flex flex-col gap-y-[30px] px-[15px]">
            {
                featuredPosts?.map((post, index)=>(
                    <div key={index} className="flex gap-x-[20px]  pb-[32px] border-b-[2px] border-[#CED0D4] last:border-b-0">
                        <Image src={post.image} width={100} height={100} alt={post.image} className="w-[100px] h-[100px] rounded-[10px] shrink-0"/>
                        <div className="flex flex-col gap-y-[15.42px]">
                            <p className="font-[500] text-[14px] leading-[20px]">{post.tag}</p>
                            <h3 className="text-black text-[24px] font-[700] leading-[30px]">{post.title}</h3>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Hero;
