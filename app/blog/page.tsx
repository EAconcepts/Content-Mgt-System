"use client";

import Image from "next/image";
import React, { useState } from "react";
import bgImage from "../(components)/assets/bg-1.png";

import avatar from "../(components)/assets/avatar.png";
import fb from "../(components)/assets/fb.svg";
import twitter from "../(components)/assets/twitter.svg";
import linkedin from "../(components)/assets/linkedin.svg";
import anchor from "../(components)/assets/link.svg";
import Tags from "../(components)/tags";
import { RecentPostsProps } from "@/@types";
import blogImg2 from "../(components)/assets/blog-img-2.jpg.png";
import blogImg3 from "../(components)/assets/blog-img-3.jpg.png";
import blogImg4 from "../(components)/assets/blog-img4.png";
import { Button } from "@/components/ui/button";
import withAuth from "../(helpers)/withAuth";
import Header from "../(components)/header";
import Footer from "../(components)/footer";

const ReadBlogPost = () => {
  const socials = [fb, twitter, linkedin, anchor];
  const [post, setPost] = useState<RecentPostsProps>({
    title: "Competitive Advantage in a Commoditized Industry",
    image: "",
    content: `Kaccum san pericula usu an, in pri dolorum denique. Cu movet debitis cum. Vix paulo
    evertitur cu, conceptam constituam te his, meis euismod sed ad. Partem suscipit cu cum.
    Vix no prodesset complectitur conclud aturque, dicam perfecto eu per, ne vis eleifend.
    expetenda. Idque petentium laboramus mea id, mei at minim labores. Tollit ullamcorper ius cu, eos
malis clita luptatum ei, vix ullum forensibus an. Esse option singulis id nec, nam eruditi ornatus at.
Eam soluta dicunt cu. Est ad oporteat appellantur, per dicta pertinax cu. Iusto quando conceptam
vim ad, an sed explicari appellantur. Augue utamur lobortis vim ne.
Semper ultricies nisi vel augue blandit vel,
luctus proin pulvinar del. Aenean
sollicitudin, lorem auci elit del con sequat
ipsutissem ut niuis sed odio cursus.
Venenatis faucibus. Nullam co
ante. Curabitur ullam qur per
ultri vitae nisi etiam sit amet.
Orci eget eros sapien ut libero? Nam eget dui. Phasellus viverra nulla ut
metus varius laoreet. Etiam rhoncus. Lorem
ipsum gravida nibh vel velit auctor aliquet.
Maecenas tempus, tellus eget condimen
rhoncus, sem quam semper libero, sit amet
sed ipsum. Curabitur ullamcorper ultricies
nisi. Donec vitae sapien libero venenatis
faucibus amet. Tempus dolerus ictis deli
vitae sapien ut libero?
    `,
  });
  const [popularPosts, setPopularPosts] = useState<RecentPostsProps[]>([
    {
      image: blogImg2.src,
      title: "Earrings girls love to wear all the time",
      date: "February 1, 2021",
    },
    {
      image: blogImg3.src,
      title: "Trends we are loving this spring",
      date: "January 14, 2021",
    },
    {
      image: blogImg4.src,
      title: "Ten amazing tips for a beautiful smile",
      date: "December 1, 2020",
    },
  ]);
  const tags = [
    "Adventure",
    "Art",
    "Beauty",
    "Blog",
    "contour",
    "Decor",
    "Design",
    "DIY",
  ];
  return (
    <>
      <Header />
      <div className="w-full flex flex-col lg:px-0 px-[30px]">
        {/* Poster Image */}
        <div className="w-full lg:h-screen  bg-[#F0F2F5] lg:px-[97px] lg:py-[80px] flex justify-center">
          <div className="w-full flex flex-col relative">
            <Image
              src={bgImage}
              width={1200}
              height={600}
              alt="poster"
              className="rounded-[10px] z-10 w-full lg:h-full h-[261px] object-cover"
            />
            <div className="w-[calc(100%-28px)] absolute bottom-[-61px] inset-x-0 m-auto lg:m-0 z-20 lg:left-[103px] lg:bottom-[-30px] lg:w-max bg-white lg:pt-[16.46px] lg:py-[30px] pt-[8.14px] pb-[14.84px] px-[15.83px] lg:px-[32px]">
              <Tags color="#016766" tagName="Tech" className="px-[15px] py-[3.9px] text-[7.916px]"ballPoint='w-[7.916px] h-[7.916px] '/>
              <h3 className="mt-[7.09px] lg:mt-[14.54px] text-primary lg:text-[28px] lg:leading-[34.2px] font-[700]">
                Competitive Advantage in a Commoditized Industry
              </h3>
              <div className="w-full mt-[13.49px] lg:mt-[27.19px] flex justify-between items-center">
                <div className="flex items-center gap-x-[15px]">
                  <Image
                    src={avatar}
                    width={50}
                    height={50}
                    alt="avatar"
                    className="lg:w-[50px] lg:h-[50px] w-[24px] h-[24px]"
                  />
                  <div className="flex flex-col gap-y-[4.08px]">
                    <h3 className="lg:text-[16px] text-[7.916px] lg:leading-[20px] leading-[9.895px] font-[500]">
                      Ernesto
                    </h3>
                    <div className="flex items-center gap-x-[15.17px] text-[#666] lg:text-[16px] text-[5.937px] font-[400] lg:leading-[18px] leading-[8.906px]">
                      <p className="text-[#666] ">
                        January 24, 2024
                      </p>
                      <div className="w-[4px] h-[4px] rounded-full bg-[#666] shrink-0"></div>
                      <p>4 min read</p>
                    </div>
                  </div>
                </div>
                {/* Socials */}
                <div className="flex lg:gap-x-[13.61px] gap-x-[6.73px]">
                  {socials.map((item, index) => (
                    <Image
                      key={index}
                      src={item}
                      width={14}
                      height={14}
                      alt={item}
                      className="lg:w-[14.2px] w-[4.524px] lg:h-[14px] h-[6.927px] shrink-0"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contents */}
        <section className="w-full lg:mt-0 mt-[48px] font-cormorant lg:px-[100px] bg-white flex lg:flex-row flex-col lg:justify-between">
          {/* Post Content */}
          <div className="w-full flex flex-col pt-[49.5px]">
            <pre className=" text-wrap font-cormorant first-letter:text-[49.018px] lg:first-letter:text-[110px] text-primary-foreground font-[400] leading-[20px] lg:leading-[30.03px] text-[16px] lg:text-[21px]">
              {post.content}
            </pre>
          </div>
          {/* Popular Posts */}
          <div className="lg:w-[232px] lg:pt-[75.5px] flex flex-col justify-center lg:justify-normal">
            <h3 className="mt-[17.9px] text-[#1B1B1B] text-center text-[33px] font-[500] leading-[36.96px] tracking-[0.33ox]">
              Popular Posts
            </h3>
            <div className="flex flex-col gap-y-[14px]">
              {popularPosts.map((post, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-y-[16px] text-center"
                >
                  <Image
                    src={post.image}
                    width={233}
                    height={171}
                    alt={post.image}
                    className="object-cover h-[170.72px] w-[232.72px]"
                  />
                  <p>{post.date}</p>
                  <h4>{post.title}</h4>
                </div>
              ))}
            </div>
            {/* Subscribe */}
            <div className="hidden w-full px-[25px] pb-[24.03px] bg-[#FAF9F7] lg:flex flex-col items-center pt-[33px]">
              <h1 className="text-[#1B1B1B] text-center text-[33px] font-[500] leading-[36.96px] tracking-[0.33px]">
                Subscribe to Newsletter
              </h1>
              <p className="mt-[12.95px] text-[#616161] text-center font-[400] text-[17px] leading-[29.07px]">
                Receive news via email
              </p>
              <form className="w-full flex justify-center mt-[20.07px]">
                <input
                  type="email"
                  placeholder="Subscribe..."
                  className="w-full py-[16.5px] px-[21px] bg-white"
                />
              </form>
            </div>
            {/* Tags */}
            <div className="mt-[45px] flex flex-col items-center">
              <h1 className="text-[#1B1B1B] text-center text-[33px] font-[500] leading-[36.96px] tracking-[0.33px]">
                Tags
              </h1>
              <div className="mt-[22px] flex flex-wrap gap-y-[10px] gap-x-[4px] justify-center font-monteserrat">
                {tags?.map((tag, index) => (
                  <Button
                    key={index}
                    variant={"outline"}
                    className=" rounded-none uppercase text-[#ABABAB] px-[21px] shrink-0 font-[500] text-[11px] leading-[19.91px] text-center tracking-[2.2px]"
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default withAuth(ReadBlogPost);
