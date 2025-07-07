import React from 'react';
import { Link } from 'react-router-dom';

const Sidenav = ({ onLogout }) => {
  return (
    <div className=" h-full border-r-2 border-zinc-400 p-5 overflow-auto">
      <h1 className="concert_one_font text-white text-3xl">
        <i className="text-red-100 font-bold text-4xl ri-movie-2-ai-line"></i>
        <span>MovieWorld</span>
      </h1>

      <nav className="flex flex-col text-zinc-200 text-lg gap-3">
        <h1 className="text-white font-semibold mt-5">New Feeds</h1>
        <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2 pl-5">
          <i className="ri-fire-fill mr-2"></i>Trending
        </Link>
        <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2 pl-5">
          <i className="ri-bard-fill mr-2"></i>Popular
        </Link>
        <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2 pl-5">
          <i className="ri-movie-2-fill mr-2"></i>Movies
        </Link>
        <Link to="/tvshows" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2 pl-5">
          <i className="ri-tv-2-fill mr-2"></i>TV Shows
        </Link>
        <Link to="/person" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2 pl-5">
          <i className="ri-team-fill mr-2"></i>Actors
        </Link>
      </nav>

      <hr className="text-zinc-400 mt-5" />

      <nav className="flex flex-col text-zinc-200 text-lg gap-3">
        <h1 className="text-white font-semibold mt-5">Website Information</h1>
        <Link to="/plans" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2 pl-5">
          <i className="ri-vip-crown-fill mr-2"></i>Plans
        </Link>
        <Link to="/contactus" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2 pl-5">
          <i className="ri-information-2-fill mr-2"></i>Contact Us
        </Link>
      </nav>

      <hr className="text-zinc-400 mt-5" />

      {/* Logout */}
      <div className="mt-5">
        <button onClick={onLogout} className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300" >
          <i className="ri-logout-box-line mr-2"></i>Logout
        </button>
      </div>
    </div>
  );
};

export default Sidenav;
