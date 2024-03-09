"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";
import debounce from "lodash.debounce";
export const Input = ({ children }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const  ref = useRef();
    return(<div>
    <form 
    action={()=>{console.log(ref.current.value)}} autoComplete="on" 
    className="flex items-center m-[2px] bg-white border-blue-500 rounded-lg focus-within:border-2 hover:m-0 focus-within:m-0 hover:border-2 w-auto pl-2 flex-nowrap dark:bg-gray-400 dark:text-white">
        
        <svg className="w-[2em] h-[2em] text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <input ref={ref} type="search" className="w-full px-4 py-1 text-gray-800 rounded-full dark:bg-gray-400 focus:outline-none dark:text-white dark:placeholder-white"
            placeholder="search"
            onChange={debounce(e=>{
                router.push(`?suggetions=${e.target.value}`)
                console.log(e.target.value)
        },1000)} />
        
        <button type="submit" className="flex items-center justify-center w-[3em] h-[2em] text-white bg-blue-500 rounded-r-md"
            >
            <svg className="p-[25%]" fill="none"   
                stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
        </button>
    </form>
    { children }
    </div>)
}
