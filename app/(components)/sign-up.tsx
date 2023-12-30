import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const SignUp = ()=>{
    return(
        <form className="w-full flex flex-col items-center gap-y-[32px]">
        <div className='flex flex-col items-center gap-y-[16px]'>
          <h3 className='text-secondary text-[32px] font-[700] leading-[30px]'>Create account</h3>
          <p className='text-[16px] font-[400] leading-[19.2px] text-center text-[#494949]'>Enjoy reading our awesome posts by signing up on our platform</p>
        </div>
        <div className="w-[375px] flex flex-col gap-y-[16px] font-inter">
            <div className="flex flex-col gap-y-[8px]">
                <label htmlFor="fullName" className="text-[14px] font-[500] leading-[20px] ">Full Name</label>
                <Input type="text" placeholder="Name" className="px-[12px] py-[8px] placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[20px] placeholder:text-[#98A2B3]"/>
            </div>
            <div className="flex flex-col gap-y-[8px]">
                <label htmlFor="email" className="text-[14px] font-[500] leading-[20px] ">Email</label>
                <Input type="email" placeholder="Enter Email" className="px-[12px] py-[8px] placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[20px] placeholder:text-[#98A2B3]"/>
            </div>
            <div className="flex flex-col gap-y-[8px]">
                <label htmlFor="password" className="text-[14px] font-[500] leading-[20px] ">Password</label>
                <Input type="password" placeholder="Enter password" className="px-[12px] py-[8px] placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[20px] placeholder:text-[#98A2B3]"/>
            </div>
        </div>
        <div className="w-[375px] flex flex-col gap-y-[24px]">
            <Button variant={"secondary"} className="w-full">Sign Up</Button>
            <Button variant={"outline"} className="w-full">Already have an account</Button>
        </div>
      </form>
    )
}