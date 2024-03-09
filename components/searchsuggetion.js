import Link from "next/link"

export async function Sugetions( { searchParams } ) {
    console.log(searchParams , "search")
    const search = searchParams
    ? searchParams.suggetions : "" ;
    
    if(searchParams.suggetions){
        const data = await fetch(`http://www.omdbapi.com/?apikey=2d2aba7e&s=${search}`);
        const movies = await data.json();
        console.log(movies)
        return (
            <ul className={`flex flex-col gap-1 rounded-md text-black w-fit h-fit ml-[1.3lh] ${!searchParams || searchParams.suggetions=="" ? 'absolute' : "absolute"}`}>
                { movies.Search ? movies.Search.map((movie)=> <li className="bg-blue-100 w-[18ch] border-black rounded-md ">
                    <Link href={`?suggetions=new`}
                    className="px-3 text-wrap">
                        { movie.Title.length > 15 
                        ? movie.Title.slice(0,12)+"..." 
                        : movie.Title  }
                    </Link></li>) : " " }
            </ul>
        )
    } 
    
}