import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../utils/axios';
import noimage from '/noimage.jpg';

const Mobilenav = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [searches, setSearches] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (query.trim().length === 0) {
        setSearches([]);
        return;
      }

      try {
        const { data } = await axios.get(`/search/multi?query=${query}`);
        setSearches(data.results);
      } catch (error) {
        console.error("Search error:", error);
      }
    };

    const delayDebounce = setTimeout(fetchSearchResults, 500);
    return () => clearTimeout(delayDebounce);
    }, [query]);

  return (
    <>
      <div className="flex items-center justify-between px-4 py-3 bg-transparent text-white lg:hidden w-full z-50">
        <div className="text-xl concert_one_font flex items-center gap-1">
          <i className="text-red-100 ri-movie-2-line text-4xl"></i>
        </div>

        <div className="flex justify-center items-center w-full relative">
          <div className="w-full max-w-md relative flex items-center">
            <i className="ri-search-line absolute left-3 text-white text-xl z-50" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search the Movie..." className="w-full px-10 py-2 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/60 text-sm outline-none" />
            {query && (<i onClick={() => setQuery('')}
                className="ri-close-fill absolute right-3 text-white text-xl cursor-pointer" />)}
          </div>

          {searches.length > 0 && (
            <div className="absolute top-full mt-2 w-full max-w-md bg-white/20 backdrop-blur-sm rounded-md overflow-auto z-[100] max-h-[50vh]">
              {searches.map((s, i) => (
                <Link key={i} to={`/${s.media_type}/details/${s.id}`} onClick={() => { setQuery(''); setIsOpen(false); }} className="flex items-center gap-3 p-3 hover:bg-zinc-100 text-white border-b" >
                  <img className="w-12 h-12 object-cover rounded" src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : noimage} alt="poster" />
                  <span className="text-sm">{s.title || s.name || s.original_name || s.original_title}</span>
                </Link> ))}
            </div> )}
        </div>

        <button onClick={() => setIsOpen(prev => !prev)} className="text-3xl text-white">
          <i className="ri-menu-line"></i>
        </button>
      </div>

      <div className={`fixed top-0 left-0 h-full ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 transform bg-zinc-900 z-50 p-5 overflow-y-auto lg:hidden w-[70%] sm:w-[40%] md:w-[40%]`}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="concert_one_font text-white text-2xl flex items-center gap-2">
            <i className="text-red-100 ri-movie-2-line text-2xl"></i>MovieWorld
          </h1>
          <button onClick={() => setIsOpen(false)} className="text-3xl text-white">
            <i className="ri-close-line"></i>
          </button>
        </div>

        <nav className="flex flex-col text-zinc-200 text-lg gap-3">
          <h1 className="text-white font-semibold">New Feeds</h1>
          <Link to="/trending" onClick={() => setIsOpen(false)} className="hover:bg-[#6556CD] hover:text-white rounded-lg p-2 pl-5">
            <i className="ri-fire-fill mr-2"></i>Trending
          </Link>
          <Link to="/popular" onClick={() => setIsOpen(false)} className="hover:bg-[#6556CD] hover:text-white rounded-lg p-2 pl-5">
            <i className="ri-bard-fill mr-2"></i>Popular
          </Link>
          <Link to="/movie" onClick={() => setIsOpen(false)} className="hover:bg-[#6556CD] hover:text-white rounded-lg p-2 pl-5">
            <i className="ri-movie-2-fill mr-2"></i>Movies
          </Link>
          <Link to="/tvshows" onClick={() => setIsOpen(false)} className="hover:bg-[#6556CD] hover:text-white rounded-lg p-2 pl-5">
            <i className="ri-tv-2-fill mr-2"></i>TV Shows
          </Link>
          <Link to="/person" onClick={() => setIsOpen(false)} className="hover:bg-[#6556CD] hover:text-white rounded-lg p-2 pl-5">
            <i className="ri-team-fill mr-2"></i>Actors
          </Link>

          <hr className="text-zinc-500 my-4" />

          <h1 className="text-white font-semibold">Website Info</h1>
          <Link to="/plans" onClick={() => setIsOpen(false)} className="hover:bg-[#6556CD] hover:text-white rounded-lg p-2 pl-5">
            <i className="ri-vip-crown-fill mr-2"></i>Plans
          </Link>
          <Link to="/contactus" onClick={() => setIsOpen(false)} className="hover:bg-[#6556CD] hover:text-white rounded-lg p-2 pl-5">
            <i className="ri-information-2-fill mr-2"></i>Contact Us
          </Link>

          <hr className="text-zinc-500 my-4" />

          <button onClick={() => { setIsOpen(false); onLogout(); }} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg w-full transition-all duration-300">
            <i className="ri-logout-box-line mr-2"></i>Logout
          </button>
        </nav>
      </div>

      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black opacity-40 z-40 lg:hidden"></div>
      )}
    </>
  );
};

export default Mobilenav;
