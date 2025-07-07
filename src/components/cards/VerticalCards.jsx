import React from 'react'
import { Link } from 'react-router-dom'
import noimage from '/noimage.jpg'

const VerticalCards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6 bg-[#1F1E24]">
      {data.map((c, i) => (
        <Link to={`/${c.media_type || title}/details/${c.id}`} key={i} className="relative flex flex-col items-center overflow-hidden transition-transform hover:scale-105 duration-300 w-[45%] sm:w-[20%] md:w-[17%] lg:w-[14%] xl:w-[14%]" >
          <img className="w-full object-cover aspect-[2/3]" src={ c.poster_path || c.backdrop_path || c.profile_path ? `https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path || c.profile_path}` : noimage } alt="" />

          <div className="p-3 w-full text-center">
            <h1 className="text-base md:text-lg lg:text-xl text-zinc-300 font-semibold line-clamp-2"> {c.name || c.title || c.original_name || c.original_title} </h1>
          </div>

          {c.vote_average && (
            <div className="absolute right-1 top-1 bg-red-400 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-md"> {(c.vote_average * 10).toFixed()}<sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>

  )
}

export default VerticalCards
