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
    <div className="w-full flex justify-center items-center lg:bg-[#F0F2F5] pt-[44px] lg:pt-[80.42px] lg:pb-[79.58px] md:pb-[55px] px-[32px] lg:px-[97px] ">
      <div className="w-full flex flex-col lg:flex-row gap-x-[15px]">
        <div className="relative flex justify-center ">
          <Image
            src={herobg}
            width={705}
            height={587.5}
            alt="hero-image"
            className="lg:w-[705px] w-full lg:h-[587.5px] h-[261px] rounded-[10px] object-cover "
          />
          {/* floating post */}
          <div className="mx-[15px] lg:mx-0 absolute bottom-[-30px] lg:w-[575px] bg-white pt-[8.14px] lg:pt-[16.46px] pb-[14.84px] lg:pb-[30px] px-[15.83px] lg:px-[32px]">
            <Tags color="#016766" tagName="Tech" ballPoint="w-[7.916px] h-[7.916px] shrink-0" className="py-[3.958px] px-[15.833px]"/>
            <h3 className="mt-[14.54px] text-primary text-[13.854px] lg:text-[28px] leading-[16.921px] lg:leading-[34.2px] font-[700]">
              Competitive Advantage in a Commoditized Industry
            </h3>
            <div className="w-full mt-[27.19px] flex justify-between items-center">
                <div className="flex items-center gap-x-[15px]">
                    <Image src={avatar} width={50} height={50} alt="avatar" className="lg:w-[50px] w-[24.739px] h-[24.739px] lg:h-[50px]"/>
                    <div className="flex flex-col gap-y-[4.08px]">
                        <h3 className="lg:text-[16px] text-[7.916px] md:text-[14px] lg:leading-[20px] md:leading-[15px] leading-[9.895px] font-[500]">Ernesto</h3>
                        <div className="flex items-center gap-x-[15.17px] text-[#666] lg:text-[16px] md:text-[12px] text-[5.937px] font-[400] lg:leading-[18px] md:leading-[8.906px]">
                            <p className="">January 24, 2024</p>
                            <div className="w-[4px] h-[4px] rounded-full bg-[#666] shrink-0"></div>
                            <p>4 min read</p>
                        </div>
                    </div>
                </div>
                {/* Socials */}
                <div className="flex lg:gap-x-[13.61px] md:gap-x-[8px] gap-x-[6.75px]">
                    {
                    socials.map((item, index)=>(
                        <Image key={index} src={item} width={14} height={14} alt={item} className="lg:w-[14.2px] md:w-[10px] w-[6px] lg:h-[14px] md-[10px] h-[6px] shrink-0"/>
                    ))
                    }
                </div>
            </div>
          </div>
        </div>
        {/* Featured Posts */}
        <div className="lg:w-[45%] mt-[107px] lg:mt-0 flex flex-col gap-y-[30px] px-[15px]">
            {
                featuredPosts?.map((post, index)=>(
                    <div key={index} className="flex gap-x-[20px]  pb-[32px] border-b-[2px] border-[#CED0D4] last:border-b-0">
                        <Image src={post.image} width={100} height={100} alt={post.image} className="lg:w-[100px] md:w-[65px] w-[58.667px] lg:h-[100px] md:h-[65px] h-[58.667px] rounded-[10px] object-cover shrink-0"/>
                        <div className="flex flex-col lg:gap-y-[15.42px] md:gap-y-[10px] gap-y-[8.8px]">
                            <p className="font-[500] lg:text-[14px] md:text-[12px] text-[8.213px] lg:leading-[20px] md:leading-[16px] leading-[11.733px]">{post.tag}</p>
                            <h3 className="text-black lg:text-[24px] md:text-[18px] text-[14.08px] md:leading-[20px] leading-[17.6px] font-[700] lg:leading-[30px]">{post.title}</h3>
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
