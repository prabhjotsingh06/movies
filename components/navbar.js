import { Input } from "./searchinput";
import { ModeToggle } from "./theme-s";
export const Navbar = ({ searchParams,children }) => {
    console.log(searchParams , "nav")
    return(<nav
        className="w-full max-w-screen-xl px-2 py-2 mx-auto bg-white border shadow-md dark:text-white rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 sm:px-8 sm:py-4 dark:bg-black ">
        <div className="container flex items-center justify-between gap-4 mx-auto dark:text-white text-blue-gray-900 flex-nowrap">
          
          <div className="flex dark:text-white ">
            
            <div htmlFor="home"
            className="flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal dark:text-white gap-x-2 text-blue-gray-900">
            <svg className="dark:text-white fill-black dark:fill-blue-50" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                
                d="M5 0.5C4.73478 0.5 4.48043 0.605357 4.29289 0.792893C4.10536 0.98043 4 1.23478 4 1.5C4 1.76522 4.10536 2.01957 4.29289 2.20711C4.48043 2.39464 4.73478 2.5 5 2.5H11C11.2652 2.5 11.5196 2.39464 11.7071 2.20711C11.8946 2.01957 12 1.76522 12 1.5C12 1.23478 11.8946 0.98043 11.7071 0.792893C11.5196 0.605357 11.2652 0.5 11 0.5H5ZM2 4.5C2 4.23478 2.10536 3.98043 2.29289 3.79289C2.48043 3.60536 2.73478 3.5 3 3.5H13C13.2652 3.5 13.5196 3.60536 13.7071 3.79289C13.8946 3.98043 14 4.23478 14 4.5C14 4.76522 13.8946 5.01957 13.7071 5.20711C13.5196 5.39464 13.2652 5.5 13 5.5H3C2.73478 5.5 2.48043 5.39464 2.29289 5.20711C2.10536 5.01957 2 4.76522 2 4.5ZM0 8.5C0 7.96957 0.210714 7.46086 0.585786 7.08579C0.960859 6.71071 1.46957 6.5 2 6.5H14C14.5304 6.5 15.0391 6.71071 15.4142 7.08579C15.7893 7.46086 16 7.96957 16 8.5V12.5C16 13.0304 15.7893 13.5391 15.4142 13.9142C15.0391 14.2893 14.5304 14.5 14 14.5H2C1.46957 14.5 0.960859 14.2893 0.585786 13.9142C0.210714 13.5391 0 13.0304 0 12.5V8.5Z"
                ></path>
            </svg>
            </div>
            <a id="home" href="/"
            className="dark:text-white mr-4 block cursor-pointer py-1.5 font-sans font-medium leading-relaxed antialiased text-black">
            Movies
            </a>
          </div>
          <div className="flex items-center">
            <Input>
              {children}
            </Input>   
              
            <ModeToggle className="" />
          </div>
        </div>
        
      </nav>);
}
