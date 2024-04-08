import Image from "next/image"
import Link from "next/link";
import { FUllcarousel } from "./fullscreencarousel";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

const TopTrending = async () => {

try {
    const url = 'https://ott-details.p.rapidapi.com/advancedsearch?start_year=2022&end_year=2024&min_imdb=6&max_imdb=7.8&language=hindi&type=movie&sort=latest&page=1';
    const options = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': '303da05d5cmsh81eb64a2941e1e2p1564fdjsnd54bfb42c7dc',
    'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
  }
    };

    const data = await fetch(url, options);
    const movies = await data.json();
    // console.log(movies.results)
    // console.log(movies.results[0].imageurl[0].split("._V1"))

    return(
<section className="bg-white dark:bg-black w-svw ">
        <FUllcarousel className="m-2 border-2 border-black rounded-lg dark:border-white">
            <CarouselContent className="">{
                movies.results.slice(0,5).map((movie , i)=>
                <CarouselItem className="pl-1 basis-1/3">
                    <div className='m-1 border-2 border-white rounded-sm'>
                    <Image className='w-[100%] rounded-sm'
                    // src={`${[...movie.imageurl[0].split("._V1")][0]}._V1_SX200_CR1,0,300,200.jpg`}
                    src={movie.imageurl[0]}
                    alt="sample image"
                    unoptimized
                    width={150}
                    height={180}
                    />
                    </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="bg-transparent border-transparent dark:text-white left-2" />
            <CarouselNext className="bg-transparent border-transparent dark:text-white right-2"/>
        </FUllcarousel>
    
</section>
)} catch (error) {
    console.error(error);
    return <p className="flex items-center justify-center">somthing went wrong</p>
}

}
const Holywood = async () => {
    
try {
    const url = 'https://ott-details.p.rapidapi.com/advancedsearch?start_year=2022&end_year=2024&min_imdb=6&max_imdb=7.8&language=english&type=movie&sort=latest&page=1';
    const options = {
    method: 'GET',
     headers: {
    'X-RapidAPI-Key': '303da05d5cmsh81eb64a2941e1e2p1564fdjsnd54bfb42c7dc',
    'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
  }
    };

    const data = await fetch(url, options);
    const movies = await data.json();
    // console.log(movies.results)
    return(
    <section className="bg-white border-2 rounded-sm dark:bg-black w-svw ">
        <div className="rounded-lg">
            <Carousel className="m-2 rounded-lg w-fit">
                <CarouselContent className="">{
                movies.results.filter( i => i.imageurl.length > 0 ).map((movie , i)=>
                    <CarouselItem className="pl-1 basis-auto">
                        <Image className='rounded-sm'
                        src={movie.imageurl[0]}
                        alt="sample image"
                        unoptimized
                        width={150}
                        height={180}
                        />
                    </CarouselItem>)}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2"/>
            </Carousel>
        </div>
    </section>
)} catch (error) {
	console.error(error);
    return <p className="flex items-center justify-center">somthing went wrong</p>
}

}
const Punjabi = async () => {
    
    try {
        const url = 'https://ott-details.p.rapidapi.com/advancedsearch?start_year=2015&end_year=2024&min_imdb=6&max_imdb=7.8&language=punjabi&type=movie&sort=latest&page=1';
        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '303da05d5cmsh81eb64a2941e1e2p1564fdjsnd54bfb42c7dc',
            'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
          }
        };
    
        const data = await fetch(url, options);
        const movies = await data.json();
        // console.log(movies.results)
        return(
    <section className="bg-white border-2 rounded-sm dark:bg-black w-svw ">
        <div className="rounded-lg">
            <Carousel className="m-2 rounded-lg w-fit">
                <CarouselContent className="">{
                movies.results.filter( i => i.imageurl.length > 0 ).map((movie , i)=>
                    <CarouselItem className="pl-1 basis-auto">
                        <Image className='rounded-sm'
                        src={movie.imageurl[0]}
                        alt="sample image"
                        unoptimized
                        width={150}
                        height={180}
                        />
                    </CarouselItem>)}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2"/>
            </Carousel>
        </div>
    </section>
    )} catch (error) {
        console.error(error);
        return <p className="flex items-center justify-center">somthing went wrong</p>
    }
    
    }
    const hindi = async () => {

        try {
            const url = 'https://ott-details.p.rapidapi.com/advancedsearch?start_year=2022&end_year=2024&min_imdb=6&max_imdb=7.8&language=hindi&type=movie&sort=latest&page=1';
            const options = {
            method: 'GET',
            headers: {
            'X-RapidAPI-Key': '303da05d5cmsh81eb64a2941e1e2p1564fdjsnd54bfb42c7dc',
            'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
          }
            };
        
            const data = await fetch(url, options);
            const movies = await data.json();
            // console.log(movies.results)
            // console.log(movies.results[0].imageurl[0].split("._V1"))
        
            return(
        <section className="bg-white dark:bg-black w-svw ">
                <Carousel className="m-2 border-2 border-black rounded-lg dark:border-white">
                    <CarouselContent className="">{
                        movies.results.map((movie , i)=>
                        <CarouselItem className="pl-1 basis-1/3">
                            <div className='m-1 border-2 border-white rounded-sm'>
                            <Image className='w-[100%] rounded-sm'
                            // src={`${[...movie.imageurl[0].split("._V1")][0]}._V1_SX200_CR1,0,300,200.jpg`}
                            src={movie.imageurl[0]}
                            alt="sample image"
                            unoptimized
                            width={150}
                            height={180}
                            />
                            </div>
                        </CarouselItem>)}
                    </CarouselContent>
                    <CarouselPrevious className="bg-transparent border-transparent dark:text-white left-2" />
                    <CarouselNext className="bg-transparent border-transparent dark:text-white right-2"/>
                </Carousel>
            
        </section>
        )} catch (error) {
            console.error(error);
            return <p className="flex items-center justify-center">somthing went wrong</p>
        }
        
        }

    export const Homepagemovies = async () => {
    return <>
    <TopTrending  />
    <div>
        <h1>Punjabi Movies</h1>
        <Punjabi />
    </div>
    <div>
        <h1>Holywood</h1>
        <Holywood />
    </div>
    </>
}