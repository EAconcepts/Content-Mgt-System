import { UserProps } from "@/@types";
import { setCookie } from "@/app/(helpers)/helpers";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEventHandler, useRef, useState } from "react";
import { toast } from "sonner";

export const SignIn = () => {
  const [login, setLogin] = useState<UserProps>({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [errors, setErrors] = useState<UserProps>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const url = process.env.NEXT_PUBLIC_API_URL;

  const router = useRouter()
  const loginRef = useRef<HTMLButtonElement | null>(null);
  const closeModal = () => {
    if (loginRef.current) {
      loginRef.current.click();
    }
  };
 
  const onInputChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target
    setLogin((prev)=>({...prev, [name]:value}))
    setErrors((prev)=>({...prev,  [name]: ''}))
  }
  const handleSignIn=(event: React.FormEvent<HTMLFormElement>)=>{
    event?.preventDefault()
    const validate = validateLogin()
    console.log(validate, login)
    if(Object.keys(validate).length ==0){
      setIsLoading(true)
      axios.post(`${url}/auth/login`, login)
      .then((response)=>{
        setIsLoading(false)
        console.log(response)
        setCookie(response)
        toast('Success', {
          description: `{${response?.data?.message ||'Login successfu!'}`
        })
        closeModal()
        setTimeout(() => {
          router.push('/blog');
        }, 2000);
      })
      .catch((err)=>{
        setIsLoading(false)
        console.log(err)
        toast('Erorr!', {
          description: `${err?.response?.data?.message || "Couldn't login" }`
        })
      })
    }
    else{
      setErrors(validate)
    }
  }
  const validateLogin=()=>{
    let errors : UserProps = {}
    if(!login.email){
      errors.email = 'Email field cannot be empty'
    }
    if(!login.password){
      errors.password = 'Password field cannot be empty'}
    return errors
  }
  return (
    <form onSubmit={handleSignIn} className="w-full flex flex-col items-center gap-y-[16px] lg:gap-y-[32px]">
      <div className="flex flex-col items-center gap-y-[8px] lg:gap-y-[16px]">
        <h3 className="text-secondary text-[18px] lg:text-[32px] font-[700] leading-[18px] lg:leading-[30px]">
          Sign in
        </h3>
        <p className="text-[10px] lg:text-[16px] font-[400] leading-[19.2px] text-center text-[#494949]">
          Take track of your previously published posts
        </p>
      </div>
      <div className="w-full lg:w-[375px] flex flex-col gap-y-[14px] lg:gap-y-[16px] font-inter">
        <div className="relative flex flex-col gap-y-[8px]">
          <label
            htmlFor="email"
            className="text-[14px] font-[500] leading-[20px] "
          >
            Email
          </label>
          <Input
            type="text"
            name="email"
            value={login?.email}
            onChange={onInputChange}
            placeholder="Enter Email"
            className={`h-[36px] px-[12px] py-[8px] rounded-none border-[#969696] placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[20px] placeholder:text-[#98A2B3] ${errors?.email && 'border border-red-400'}`}
          />
        </div>
        <div className="flex flex-col gap-y-[8px]">
          <label
            htmlFor="password"
            className="text-[14px] font-[500] leading-[20px] "
          >
            Password
          </label>
          <div className="relative">
          <Input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={login?.password}
            onChange={onInputChange}
            placeholder="Enter Password"
            className={`placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[20px] placeholder:text-[#98A2B3] px-[12px] py-[8px] ${errors?.password && 'border border-red-400'}`}
          /><div onClick={()=>setShowPassword((prev)=>!prev)} className="absolute right-[5px] bottom-[4px] ">
          {showPassword ? <EyeOff/> : <Eye/>}</div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[375px] flex flex-col gap-y-[24px] font-inter">
        <Button disabled={isLoading} variant={"secondary"} className="w-full">
          { isLoading? 'Signing in...' : 'Sign In'}
        </Button>
        <button type="button" onClick={()=>{}} className="w-fit self-end text-[#1F2021] text-[12px] lg:text-[14px] font-[500] leading-[20px] hover:text-secondary">
          Forgot Password
        </button>
      </div>
      <DialogClose className="hidden">
        <button type="button" ref={loginRef} className="w-0 h-0 mt-0 hidden"></button>
      </DialogClose>
    </form>
  );
};
