

export const setCookie=(data: any)=>{
    document.cookie = `token=${data?.data?.payload?.access_token}; path=/;`
    document.cookie = `user=${JSON.stringify(
        {   
            id: data?.data?.payload?.user?._id,
            email: data?.data?.payload?.user?.email,
            userRole: data?.data?.payload?.user?.userRole,
            username: data?.data?.payload?.user?.username,
        })}; path=/;`
}

export const clearCookie = () => {
    document.cookie.split(';').forEach(function (c) {
      document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString());
    });
  };