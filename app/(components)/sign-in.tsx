import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const SignIn = () => {
  return (
    <form className="w-full flex flex-col items-center gap-y-[32px]">
      <div className="flex flex-col items-center gap-y-[16px]">
        <h3 className="text-secondary text-[32px] font-[700] leading-[30px]">
          Sign in
        </h3>
        <p className="text-[16px] font-[400] leading-[19.2px] text-center text-[#494949]">
          Take track of your previously published posts
        </p>
      </div>
      <div className="w-[375px] flex flex-col gap-y-[16px] font-inter">
        <div className="flex flex-col gap-y-[8px]">
          <label
            htmlFor="email"
            className="text-[14px] font-[500] leading-[20px] "
          >
            Email
          </label>
          <Input
            type="email"
            placeholder="Enter Email"
            className="h-[36px] px-[12px] py-[8px] rounded-none border-[#969696] placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[20px] placeholder:text-[#98A2B3]"
          />
        </div>
        <div className="flex flex-col gap-y-[8px]">
          <label
            htmlFor="password"
            className="text-[14px] font-[500] leading-[20px] "
          >
            Password
          </label>
          <Input
            type="password"
            placeholder="Enter Password"
            className="placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[20px] placeholder:text-[#98A2B3] px-[12px] py-[8px]"
          />
        </div>
      </div>
      <div className="w-[375px] flex flex-col gap-y-[24px] font-inter">
        <Button variant={"secondary"} className="w-full">
          Sign Up
        </Button>
        <button className="w-fit self-end text-[#1F2021] text-[14px] font-[500] leading-[20px] hover:text-secondary">
          Forgot Password
        </button>
      </div>
    </form>
  );
};
