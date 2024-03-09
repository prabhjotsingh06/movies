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
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTM0MWIwZTkxYTFmOGNlODFiZTU0ZTczNDIxN2NiZCIsInN1YiI6IjY1YjFlOTU0YjFmNjhkMDE4NGQ1MDE3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WVTyJZVKVRJxlMVuPm87tKh_g2M77UTHmnNOArZP1nE'
    }
    };

    const data = await fetch(url, options);
    const movies = await data.json();
    // console.log(movies.results)
    return(
<section className="bg-white dark:bg-black ">
    
        <FUllcarousel className="m-2 border-2 border-black rounded-lg dark:border-white w-fit">
            <CarouselContent className="">{
            movies.results.slice(0,5).map((movie , i)=>
                <CarouselItem className="pl-1">
                    <div className=''>
                    <Image className='w-screen rounded-sm'
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
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
const Trending = async () => {
    
try {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTM0MWIwZTkxYTFmOGNlODFiZTU0ZTczNDIxN2NiZCIsInN1YiI6IjY1YjFlOTU0YjFmNjhkMDE4NGQ1MDE3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WVTyJZVKVRJxlMVuPm87tKh_g2M77UTHmnNOArZP1nE'
    }
    };

    const data = await fetch(url, options);
    const movies = await data.json();
    // console.log(movies.results)
    return(
<section className="bg-white dark:bg-black ">
    <div className="rounded-lg">
        <Carousel className="m-2 rounded-lg w-fit">
            <CarouselContent className="">{
            movies.results.map((movie , i)=>
                <CarouselItem className="pl-1 basis-auto">
                    <Image className='rounded-sm'
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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
const IndianMovies = async () => {
    
    try {
        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTM0MWIwZTkxYTFmOGNlODFiZTU0ZTczNDIxN2NiZCIsInN1YiI6IjY1YjFlOTU0YjFmNjhkMDE4NGQ1MDE3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WVTyJZVKVRJxlMVuPm87tKh_g2M77UTHmnNOArZP1nE'
        }
        };
    
        const data = await fetch(url, options);
        const movies = await data.json();
        // console.log(movies.results)
        return(
    <section className="bg-white dark:bg-black ">
        <div className="rounded-lg">
            <Carousel className="m-2 rounded-lg w-fit">
                <CarouselContent className="">{
                movies.results.map((movie , i)=>
                    <CarouselItem className="pl-1 basis-auto">
                        <Image className='rounded-sm'
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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
export const Homepagemovies = async () => {
    return <>
    <TopTrending  />
    <div>
        <h1>Trending</h1>
        <Trending />
    </div>
    <div>
        <h1>Indian Movies</h1>
        <IndianMovies />
    </div>
    </>
}