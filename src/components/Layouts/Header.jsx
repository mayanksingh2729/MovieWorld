import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ data }) => {
  return (
    <div style={{ background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.7),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }}
      className="relative w-full h-[60vh] sm:h-[65vh] md:h-[80vh] lg:h-[80vh] xl:h-[80vh] flex flex-col justify-end items-start p-4 sm:p-6 md:px-8 lg:px-10 xl:px-14" >
      <h1 className="text-white font-extrabold  text-2xl lg:text-3xl  w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-2/5  truncate"> {data.name || data.title || data.original_name || data.original_title} </h1>
      <p className="hidden md:block text-white mt-2 mb-2  w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-2/5  text-sm sm:text-base lg:text-md  line-clamp-2">
        {data.overview.slice(0, 50)}...
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400 ml-1"> more </Link>
      </p>

      <div className="text-white flex items-center space-x-3 text-xs sm:text-sm md:text-base">
        <p className="flex items-center gap-1">
          <i className="ri-megaphone-fill text-yellow-500"></i> {data.release_date || 'No Information'}
        </p>

        <p className="flex items-center gap-1">
          <i className="ri-album-fill text-yellow-500"></i> {data.media_type.toUpperCase()}
        </p>


      </div>

      <Link to={`/${data.media_type}/details/${data.id}/trailer`} 
        className="mt-4 px-4 py-2 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-md w-max hover:brightness-110 transition duration-300" >
        <i className="ri-play-fill mr-1"></i>Watch Trailer
      </Link>

    </div>
  )
}

export default Header
