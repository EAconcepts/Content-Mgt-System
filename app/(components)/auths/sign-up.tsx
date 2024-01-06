import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { UserProps } from "@/@types";
import { useMutation } from "@tanstack/react-query";
import { useFetch } from "@/app/(helpers)/useFetch";
import axios from "axios";
import { toast } from "sonner";
import { Modal } from "@/components/ui/modal";
import { SignIn } from "./sign-in";
import { Eye, EyeOff } from "lucide-react";
import { DialogClose } from "@/components/ui/dialog";

export const SignUp = ({ autoClick }: any) => {
  const [user, setUser] = useState<UserProps>({
    username: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<UserProps>();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const url = process.env.NEXT_PUBLIC_API_URL;
  const loginRef = useRef<HTMLButtonElement | null>(null);
  const showLoginModal = () => {
    if (loginRef.current) {
      loginRef.current.click();
      autoClick();
    }
  };
  const validateForm = () => {
    let errors: UserProps = {};
    if (!user.username) {
      errors.username = "Username cannot be empty";
    }
    if (!user.email) {
      errors.email = "Email cannot be empty";
    }
    if (!user.password) {
      errors.password = "Password cannot be empty";
    }
    return errors;
  };
  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const validate = validateForm();
    if (Object.keys(validate).length == 0) {
      setIsLoading(true);
      axios
        .post(`${url}/auth/signup`, user)
        .then((response) => {
          setIsLoading(false);
          console.log(response);
          toast("Success", {
            description: "Account successfully created!",
            // action: {
            //   label: "Undo",
            //   onClick: () => console.log("Undo"),
            // },
          });
          showLoginModal();
        })
        .catch((err) => {
          setIsLoading(false);
          toast("Something went wrong", {
            description: `${err?.response?.data?.message}`,
          });
          console.log(err);
        });
    } else {
      setErrors(validate);
    }
  };
  //   const mutation = useMutation(useFetch)

  const onInputChange = (e: any) => {
    const { name, value } = e.target;
    setUser((prevVal) => ({ ...prevVal, [name]: value }));
    setErrors((prev)=>({...prev,  [name]: ''}))
  };

  return (
    <form
      onSubmit={handleSignUp}
      className="w-full px-[12px] lg:px-0 flex flex-col items-center gap-y-[14px] lg:gap-y-[32px]"
    >
      <div className="flex flex-col items-center gap-y-[8px] lg:gap-y-[16px]">
        <h3 className="text-secondary text-[18px] lg:text-[32px] font-[700] leading-[18px] lg:leading-[30px]">
          Create account
        </h3>
        <p className="text-[10px] lg:text-[16px] font-[400] leading-[19.2px] text-center text-[#494949]">
          Enjoy reading our awesome posts by signing up on our platform
        </p>
      </div>
      <div className="w-full lg:w-[375px] flex flex-col gap-y-[16px] font-inter">
        <div className="flex flex-col gap-y-[8px]">
          <label
            // id="username"
            htmlFor="username"
            className="text-[14px] font-[500] leading-[20px] "
          >
            Username
          </label>
          <Input
            id="username"
            name="username"
            value={user.username}
            onChange={onInputChange}
            type="text"
            placeholder="Username"
            className={`px-[12px] py-[8px] placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[20px] placeholder:text-[#98A2B3] ${
              errors?.username && "border border-red-400"
            }`}
          />
        </div>
        <div className="flex flex-col gap-y-[8px]">
          <label
            htmlFor="email"
            className="text-[14px] font-[500] leading-[20px] "
          >
            Email
          </label>
          <Input
            value={user.email}
            onChange={onInputChange}
            id="email"
            name="email"
            type="email"
            placeholder="Enter Email"
            className={`px-[12px] py-[8px] placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[20px] placeholder:text-[#98A2B3] ${
              errors?.email && "border border-red-400"
            }`}
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
              id="password"
              name="password"
              value={user.password}
              onChange={onInputChange}
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className={`px-[12px] py-[8px] placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[20px] placeholder:text-[#98A2B3] ${
                errors?.password && "border border-red-400"
              }`}
            />
            <div
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-[5px] bottom-[4px] "
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[375px] flex flex-col gap-y-[24px]">
        <Button
          disabled={isLoading}
          type="submit"
          variant={"secondary"}
          className="w-full"
        >
          {isLoading ? "Signing up..." : "Sign Up"}
        </Button>
        <Modal
          showXIcon={true}
          triggerBtn={
            <Button onClick={showLoginModal} type="button" variant={"outline"} className="w-full">
              Already have an account
            </Button>
          }
          className="xl:w-[902px] xl:px-[32px] xl:pt-[84px] xl:pb-[64px] lg:w-[600px]"
        >
          <SignIn />
        </Modal>
      </div>
      <DialogClose className="hidden">
        <button type="button" ref={loginRef} className="w-0 h-0 mt-0 hidden"></button>
      </DialogClose>
    </form>
  );
};
