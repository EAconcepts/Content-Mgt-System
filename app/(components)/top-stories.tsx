"use client";

import { RecentPostsProps } from "@/@types";
import { useState } from "react";
// import Carousel from "react-simply-carousel";
import topPost1 from "./assets/top-post-1.png";
import topPost2 from "./assets/top-post-2.png";
import topPost3 from "./assets/top-post-3.png";
import Image from "next/image";
import Tags from "./tags";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

const TopStories = () => {
  const [activeSlideindex, setActiveSlideIndex] = useState<number>(0);
  const [topStories, setTopStories] = useState<RecentPostsProps[]>([
    {
      title: "The Chronicles of Ajantala the local traveler",
      tag: "Travel",
      image: topPost1.src,
      color: "#016766",
    },
    {
      title: "The Chronicles of Ajantala the local traveler",
      tag: "Lifestyle",
      image: topPost2.src,
      color: "#CA511D",
    },
    {
      title: "The Chronicles of Ajantala the local traveler",
      tag: "Sports",
      image: topPost3.src,
      color: "#02042E",
    },
  ]);
  const [otherStories, setOtherStories] = useState<RecentPostsProps[]>([
    {
      title:
        "How to optimize images in WordPress for faster loading (complete guide)",
      content:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatuQuis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu...",
      tag: "Travel",
      image: topPost1.src,
      color: "#016766",
      date: "27th Dec 2023",
      readTime: "3",
    },
    {
      title: "The Chronicles of Ajantala the local traveler",
      content:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatuQuis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu...",
      tag: "Lifestyle",
      image: topPost2.src,
      color: "#CA511D",
      date: "27th Dec 2023",
      readTime: "3",
    },
    {
      title: "The Chronicles of Ajantala the local traveler",
      content:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatuQuis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu...",
      tag: "Sports",
      image: topPost3.src,
      color: "#02042E",
      date: "27th Dec 2023",
      readTime: "3",
    },
  ]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="w-full bg-white lg:pt-[150.5px] md:pt-[90px] pt-[56px] mb-[96px] lg:px-0 px-[15px]">
      {/* carousel */}
      <div className="flex flex-col items-center lg:px-[73px] px-[23.67px]">
        <h4 className="text-black lg:text-[32px] text-[28.876px] font-[700] lg:leading-[30px] leading-[27.071px] pb-[35.19px]">
          Top Stories
        </h4>
        <Carousel 
          responsive={responsive}
          autoPlay
          ssr 
          sliderClass="w-full flex gap-x-4"
          itemClass="w-full "
        className="w-full h-full"
         >
           {topStories?.map((story, index) => (
            <div
              key={index}
              className="relative z-20 w-full lg:w-[408px] h-[368.664px] lg:h-[500px] border-none flex flex-col"
            >
              <div className=" h-full p-[32px] flex flex-col items-end justify-between border-none">
                <Tags color={story.color} tagName={story?.tag} />
                <p className="bg-white pr-[35px] border-[1px] border-black rounded-[16px] p-[24px] text-[20px] font-[700] leading-[30.62px] text-center text-black">
                  {story.title}
                </p>
              </div>
              <Image
                src={story.image}
                width={408}
                height={500}
                alt={story.image}
                className=" absolute inset-0 w-full h-full object-cover shrink-0 rounded-[16px] -z-10 border-[1px] border-black"
              />
            </div>
          ))}
        </Carousel>
      </div>
      {/* Other stories */}
      <div className="xl:px-[175px] lg:px-[120px] mt-[150px]  w-full  px-[17px]">
        <div className="w-full  flex flex-col gap-y-[60px] lg:px-0 px-[10.8px] py-[11.7px] lg:py-[11.7px] ">
          {otherStories?.map((story, index) => (
            <div
              key={index}
              className="w-full bg-[#F8F8F8] flex gap-x-[11.4px] lg:gap-x-[38px] lg:py-[39px] lg:pl-[36px] xl:pr-[60px] lg:pr-[50px] items-center"
            >
              <Image
                src={story.image}
                width={462}
                height={522}
                alt=""
                className="w-[138px] md:w-[145px] lg:w-[402px] h-[156px] md:h-[170px] lg:h-[502px] object-cover rounded-[4.8px] lg:rounded-[16px] border-[0.3px] lg:border-[1px] border-black"
              />
              <div className="flex flex-col gap-y-[9.6px] lg:gap-y-[32px] pr-[18px] lg:pr-0">
                <div className="flex gap-x-[9.6px] xl:gap-x-[32px] lg:gap-x-[18px] text-primary font-[400] text-[4.8px] lg:text-[16px] leading-[6.12px] lg:leading-[30.62px]  items-center">
                  <Tags color={story.color} tagName={story.tag} ballPoint="w-[4.8px] h-[4.8px] " className="text-[4.8px] lg:text-base py-[4.8px] px-[9.6px]"/>
                  <p className="">{story.date} </p>
                  <div className="w-[4.8px] lg:w-[16px] h-[4.8px] lg:h-[16px] bg-black rounded-full"></div>
                  <p className="">{story.readTime} min read</p>
                </div>
                <h3 className="text-black font-[700] text-[9.6px] lg:text-[32px] leading-[12.5px] lg:leading-[30.62px]">{story.title}</h3>
                <p className="text-primary text-[4.8px] lg:text-[16px] fon-[400] leading-[6.12px] lg:leading-[30.62px]">
                  {story.content}
                </p>
                <Button size={"sm"} variant={"secondary"} className="max-w-max text-[4.8px] lg:text-base px-[9.6px] -py-4 rounded-[7.2px]">
                  Continue Reading
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopStories;
