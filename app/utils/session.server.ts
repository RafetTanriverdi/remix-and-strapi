import { createCookieSessionStorage } from "@remix-run/node";


export const sessionStorage=createCookieSessionStorage({
    cookie:{
        name:"__session",
        secure:process.env.NODE_ENV==="production",
        secrets:['6a2f08b6de14f85b0b6a4d4e34d31216eb3e4f5d7f8a1b1c2d7f3c4a8f6b5d2a'],
        sameSite:"lax",
        path:"/",
        httpOnly:true,
    }
})