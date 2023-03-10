import { SiRottentomatoes } from 'react-icons/si';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { useEffect, useState } from 'react';
export function MovieDetailsCard(props) {

    // const [toggle, setToggle] = useState() 
    const watchlistData = JSON.parse(localStorage.getItem("watchlist")); //getting data

    const handleClick = () => {
        
        const filteredWatchlist = watchlistData?.filter(movie => movie.imdbID !== props.movieDetailsData.imdbID)
        const movieClickedOn = watchlistData?.filter(movie => movie.imdbID === props.movieDetailsData.imdbID)


        // if watchlist doesn't exist, create it
        if(!watchlistData) {
            localStorage.setItem(
                "watchlist",
                JSON.stringify([props.movieDetailsData])
                );
            } else {
                if(movieClickedOn[0]) {
                    movieClickedOn[0].watchlist = false
                    console.log("Inside 'if'", props.movieDetailsData.watchlist)
                    localStorage.setItem(
                        "watchlist", JSON.stringify(filteredWatchlist));
                } else {
                    props.movieDetailsData.watchlist = true
                    console.log("inside 'else'", props.movieDetailsData.watchlist)
                    localStorage.setItem(
                        "watchlist", JSON.stringify([...watchlistData, props.movieDetailsData]));
                    }
            }
    }
    
  return (
    <>
        <div className="details-card-container card lg:max-w-4xl lg:card-side shadow-xl flex text-black">
            <figure className="bg-black shadow-xl lg:w-full"><img src={props.movieDetailsData?.Poster} alt={props.movieDetailsData?.Title}/></figure>
            <div className="card-body">
                <h2 className="card-title lg:text-3xl lg:py-8">{props.movieDetailsData?.Title}</h2>
                <div className="flex">
                    <p>{props.movieDetailsData?.Rated}</p>
                    <div className="flex items-center">
                        <div className="text-red-600 text-xl">
                            <SiRottentomatoes />
                        </div>
                        <p className="pl-2">{props.movieDetailsData?.Ratings[1] ? props.movieDetailsData?.Ratings[1].Value : ""}</p>
                    </div>
                </div>

                <div className="flex text-slate-500 text-sm my-2">
                    <p>{props.movieDetailsData?.Runtime}</p>
                    <p>{props.movieDetailsData?.Genre}</p>
                    <div 
                    className="flex items-center"
                    onClick={handleClick}>
                        <button className="flex">
                            {!props.movieDetailsData?.watchlist ? 
                            <div className="text-green-500 text-lg">
                                <AiFillPlusCircle />
                            </div> :
                            <div className="text-slate-500 text-lg">
                                <AiFillMinusCircle />
                            </div>
                            } 
                            Watchlist
                        </button>
                    </div>
                </div>

                <p>{props.movieDetailsData?.Plot}</p>
                <div className="text-sm pb-3">
                    <p>
                        <span className="text-slate-500">Director:</span>
                        {` ${props.movieDetailsData?.Director}`}
                    </p>
                    <p>
                        <span className="text-slate-500">Starring:</span>
                        {` ${props.movieDetailsData?.Actors}`}
                    </p>
                </div>


                <div className="card-actions justify-end">
                    <button
                        className="btn btn-primary"
                        onClick={() => props.setIsModalOpen(false)}
                    >
                        Close
                    </button>                
                </div>
            </div>
        </div>
    </>
  );
}
