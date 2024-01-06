"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const withAuth = (WrappedComponent: React.ComponentType) => {
  const AuthenticatedComponent: React.FC = (props) => {
    const router = useRouter();
    const path = usePathname();

    useEffect(() => {
      const token = document.cookie.split(";").find((c) => c.trim().startsWith("token="));
      if(!token?.split('=')[1] && path.includes('/dashboard')){
        console.log('No token')
        router.replace('/')
      }
      if(!token?.split('=')[1] && path.includes('/blog')){
        router.replace('/')
      }

    }, []);
    return <WrappedComponent {...props}/>
  };
  return AuthenticatedComponent;
};

export default withAuth