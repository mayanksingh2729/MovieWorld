import axios from '../../utils/axios'
import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import noimage from '/noimage.jpg'

const Topnav = () => {
  const [query, setQuery] = useState("")
  const [searches,setSearches]=useState([])
  const GetSerches=async()=>{
    try{ 
        const {data}=await axios.get(`/search/multi?query=${query}`)
        setSearches(data.results)
    }
    catch(error){
        console.log("Error:",error)
    }
}

useEffect(()=>{
   GetSerches() 
},[query])

  return (
    <div className="absolute top-0 left-0 w-full z-50">
      <div className="relative flex items-center mx-auto w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] h-[10vh] bg-transparent">
        <i className="ri-search-line text-xl md:text-2xl lg:text-2xl text-zinc-200 absolute left-3 sm:left-5" />
        <input onChange={(e) => setQuery(e.target.value)} value={query} type="text" placeholder="Search the Movie..." className="w-full pl-15 pr-5 py-3 text-base sm:text-lg md:text-xl outline-none border-none bg-transparent text-zinc-100 placeholder:text-zinc-400" />
        {query.length > 0 && (
          <i onClick={() => setQuery("")} className="ri-close-fill absolute right-3 sm:right-5 text-zinc-200 text-2xl cursor-pointer" />
        )}

        <div className="z-[100] absolute top-full mt-2 w-full max-h-[50vh] bg-white/20 backdrop-blur-sm rounded-md overflow-auto">
          {searches.map((s, i) => (
            <Link to={`/${s.media_type}/details/${s.id}`} key={i} className="hover:text-black hover:bg-zinc-400 duration-300 font-semibold text-white w-full p-4 sm:p-5 flex items-center border-b" >
              <img className="w-[10vh] h-[10vh] sm:w-[12vh] sm:h-[12vh] object-cover mr-4 shadow-lg" src={ s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : noimage } alt="" />
              <span>{s.name || s.title || s.original_name || s.original_title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Topnav