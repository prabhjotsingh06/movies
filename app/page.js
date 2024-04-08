import { Homepagemovies } from "@/components/homepagemovies";
import { Navbar } from "@/components/navbar";
import { Sugetions } from "@/components/searchsuggetion";
import Image from "next/image";
export default function Home({ searchParams }) {
  console.log(searchParams)
  return (<div >
   <Navbar>
      <Sugetions searchParams={searchParams}/>
   </Navbar>
   <Homepagemovies />
  </div>);
}
