import { NextResponse,NextRequest } from "next/server";
/* @ts-ignore */
export function middleware(req:any,event:any){
    const user = req.cookies.get('user')
    let { pathname } = req.nextUrl;
    
    // if(user){
    //     return NextResponse.next();
    // }else{
    //     if(pathname?.includes('/signin') == false){
    //         console.log("Lol",pathname?.includes('/signin'))
    //         // console.log({pathname})
    //         const url = req.nextUrl.clone()
    //         url.pathname = '/signin'
    //         return NextResponse.redirect(url)   
    //     }else{
    //         console.log("ME Thing")
    //     return NextResponse.next();
    //     }
    // }

    // return new Response('Access')
}