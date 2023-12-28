"use client";

import { RecentPostsProps } from "@/@types";
import { useState } from "react";
import Carousel from "react-simply-carousel";
import topPost1 from "./assets/top-post-1.png";
import topPost2 from "./assets/top-post-2.png";
import topPost3 from "./assets/top-post-3.png";
import Image from "next/image";
import Tags from "./tags";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  return (
    <div className="w-full bg-white pt-[150.5px] ">
      <div className=" flex flex-col items-center px-[73px]">
        <h4 className="text-black text-[32px] font-[700] leading-[30px]">
          Top Stories
        </h4>
        <Carousel
          activeSlideIndex={activeSlideindex}
          onRequestChange={setActiveSlideIndex}
          itemsToScroll={1}
          itemsToShow={1}
          easing="linear"
          speed={400}
          infinite={false}
          // disableNavIfAllVisible
          // hideNavIfAllVisible
          // disableNavIfEdgeActive
          visibleSlideProps={{
            style: {
              marginRight: "10px",
              gap: "15px",
            },
          }}
          containerProps={{
            style: {
              width: "max-content",
            },
          }}
          forwardBtnProps={{
            style: {
              alignSelf: "center",
              background: "#D9D9D9",
              border: "1px solid black",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
              height: 40,
              lineHeight: 1,
              textAlign: "center",
              width: 40,
              marginLeft: -20,
              zIndex: 10,
            },
            children: (
              <span className="flex justify-center ">
                {<ArrowRight color="black" />}
              </span>
            ),
          }}
          backwardBtnProps={{
            style: {
              alignSelf: "center",
              background: "#D9D9D9",
              border: "1px solid black",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
              height: 40,
              lineHeight: 1,
              textAlign: "center",
              width: 40,
              marginRight: -20,
              zIndex: 10,
            },
            children: (
              <span className="flex justify-center ">
                {<ArrowLeft color="black" />}
              </span>
            ),
          }}
          responsiveProps={[
            {
              itemsToShow: 2,
              itemsToScroll: 2,
              minWidth: 768,
            },
            {
              itemsToShow: 3,
              itemsToScroll: 2,
              minWidth: 1366,
            },
          ]}
        >
          {topStories?.map((story, index) => (
            <div
              key={index}
              className="relative z-20 w-[408px] h-[500px] border-none flex flex-col"
            >
              <div className="w-full h-full p-[32px] flex flex-col items-end justify-between border-none">
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
      <div className="xl:px-[175px] lg:px-[120px] mt-[150px]">
        <div className="w-full bg-[#F8F8F8]   flex flex-col ">
          {otherStories?.map((story, index) => (
            <div
              key={index}
              className="w-full flex gap-x-[38px] py-[39px] pl-[36px] xl:pr-[60px] lg:pr-[50px] items-center"
            >
              <Image
                src={story.image}
                width={462}
                height={522}
                alt=""
                className="w-[402px] h-[502px] object-cover rounded-[16px] border-[1px] border-black"
              />
              <div className=" flex flex-col gap-y-[32px] ">
                <div className="flex xl:gap-x-[32px] lg:gap-x-[18px] text-primary font-[400] text-[16px] leading-[30.62px]  items-center">
                  <Tags color={story.color} tagName={story.tag} />
                  <p className="">{story.date} min re</p>
                  <div className="w-[16px] h-[16px] bg-black rounded-full"></div>
                  <p className="">{story.readTime}</p>
                </div>
                <h3 className="text-black font-[700] text-[32px] leading-[30.62px]">{story.title}</h3>
                <p className="text-primary text-[16px] fon-[400] leading-[30.62px]">
                  {story.content}
                </p>
                <Button variant={"secondary"} className="max-w-max">
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
