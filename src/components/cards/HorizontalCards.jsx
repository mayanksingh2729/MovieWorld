import React from 'react';
import { Link } from 'react-router-dom';
import noimage from '/noimage.jpg';

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-full px-2 overflow-x-auto">
        <div className="flex gap-4 w-[65%] sm:w-[50%] md:w-[70%] lg:w-[90%]">
            {data.length > 0 ? (
            data.map((d, i) => (
                <Link to={`/${d.media_type}/details/${d.id}`} key={i} className="min-w-[60%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[20%] h-[40vh] sm:h-[45vh] lg:h-[50vh] bg-zinc-900 rounded-md overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300" >
                    <img className="w-full h-[50%] object-cover" src={ d.backdrop_path || d.poster_path ? `https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}` : noimage } alt="poster" />
                    <div className="text-white p-3 h-[50%]">
                        <h1 className="text-sm sm:text-lg lg:text-xl font-semibold line-clamp-1"> {d.title || d.name || d.original_name || d.original_title} </h1>
                        <p className="text-sm mt-2 line-clamp-2"> {d.overview.slice(0, 50)}...<span className="text-zinc-400">more</span> </p>
                    </div>
                </Link> )) 
            ) : (<h1 className="text-xl sm:text-2xl md:text-3xl mt-5 text-white font-bold text-center w-full"> Nothing To Show </h1> )}
        </div>
    </div>
  );
};

export default HorizontalCards;
