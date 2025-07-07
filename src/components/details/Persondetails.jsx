import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadperson } from '../store/actions/personAction'
import { removeperson } from '../store/reducers/personSlice'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import Loading from '../../pages/Loading'
import HorizontalCards from '../cards/HorizontalCards'
import Dropdown from '../Layouts/Dropdown'

const Persondetails = () => {

  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { id } = useParams()
  const { info } = useSelector((state) => state.person)
  const dispatch = useDispatch()
  const [category, setCategory] = useState("movie")

  useEffect(() => {
    dispatch(asyncloadperson(id))
    return () => {
      dispatch(removeperson())
    }
  }, [id])

  return info ? (
    <div className="px-[5%] w-full min-h-screen overflow-auto">
      {/* Top Navigation */}
      <nav className="w-full h-[10vh] text-zinc-100 flex items-center gap-10 text-2xl">
        <Link onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></Link>
      </nav>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-10">
        
        {/* Sidebar / Profile Info */}
        <div className="w-full md:w-[25%]">
          <img className="w-full max-w-[280px] mx-auto object-cover rounded-md shadow-[8px_17px_38px_2px_rgba(1,2,2,.5)]" src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`} alt={info.detail.name} />

          <hr className="my-5 border-none h-[2px] bg-zinc-500" />

          {/* Social Links */}
          <div className="text-2xl text-white flex gap-5 mb-5 justify-center md:justify-start">
            <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-earth-fill"></i></a>
            <a target="_blank" href={`https://www.facebook.com/${info.externalid.facebook_id}`}><i className="ri-facebook-circle-fill"></i></a>
            <a target="_blank" href={`https://www.instagram.com/${info.externalid.instagram_id}`}><i className="ri-instagram-fill"></i></a>
            <a target="_blank" href={`https://www.twitter.com/${info.externalid.twitter_id}`}><i className="ri-twitter-x-fill"></i></a>
          </div>

          {/* Personal Info */}
          <div className="text-zinc-300">
            <h2 className="text-2xl font-semibold mb-4">Personal Info</h2>

            <h3 className="text-lg font-semibold">Known For</h3>
            <p className="text-zinc-400 mb-3">{info.detail.known_for_department}</p>

            <h3 className="text-lg font-semibold">Gender</h3>
            <p className="text-zinc-400 mb-3">{info.detail.gender === 2 ? "Male" : "Female"}</p>

            <h3 className="text-lg font-semibold">Birthday</h3>
            <p className="text-zinc-400 mb-3">{info.detail.birthday}</p>

            <h3 className="text-lg font-semibold">Death Day</h3>
            <p className="text-zinc-400 mb-3">{info.detail.deathday ? info.detail.deathday : "Still Alive"}</p>

            <h3 className="text-lg font-semibold">Birth Place</h3>
            <p className="text-zinc-400 mb-3">{info.detail.place_of_birth}</p>

            <h3 className="text-lg font-semibold">Also Known As</h3>
            <p className="text-zinc-400">{info.detail.also_known_as.join(", ")}</p>
          </div>

          {/* For Small Screens Only: Name + Bio */}
          <div className="block md:hidden text-white mt-6">
            <h1 className="text-4xl font-black mb-4 text-zinc-400">{info.detail.name}</h1>
            <h2 className="text-xl text-zinc-300 font-semibold">Biography</h2>
            <p className="text-zinc-400 mt-2 whitespace-pre-line">{info.detail.biography}</p>
          </div>
        </div>

        {/* Content Section for md and above */}
        <div className=" w-full md:w-[75%] text-white mb-10">
          <h1 className="text-5xl font-black mb-5 text-zinc-400">{info.detail.name}</h1>

          <h2 className="text-xl font-semibold text-zinc-300">Biography</h2>
          <p className="text-zinc-400 mt-3 whitespace-pre-line">{info.detail.biography}</p>

          <h2 className="mt-6 mb-3 text-xl font-semibold text-zinc-300">Known For</h2>
          <HorizontalCards data={info.combinedCredits.cast} />

          {/* Acting Section + Dropdown */}
          <div className="mt-8 flex justify-between items-center">
            <h2 className="text-xl text-zinc-300 font-semibold">Acting</h2>
            <Dropdown title="Category" options={["tv", "movie"]} func={(e) => setCategory(e.target.value)} />
          </div>

          {/* Acting Credits Scroll Box */}
          <div className="text-zinc-400 w-full h-[60vh] mt-5 p-3 overflow-y-auto border-2 border-zinc-700 shadow-lg shadow-[rgba(255,255,255,.3)] rounded-lg">
            {info[category + "Credits"].cast.map((c, i) => (
              <Link to={`/${category}/details/${c.id}`} key={i} className="flex items-center gap-5 p-3 rounded-lg hover:bg-zinc-800 transition-all duration-300" >
                <img src={`https://image.tmdb.org/t/p/original${c.poster_path || c.backdrop_path}`} alt={c.title || c.name} className="w-[80px] h-[90px] object-cover rounded-md border border-zinc-600" />
                <div>
                  <h3 className="text-white text-lg font-semibold">  {c.title || c.name || c.original_title || c.original_name} </h3>
                  {c.character && <p className="text-sm text-zinc-400 italic">as {c.character}</p>}
                </div>
              </Link>))}
          </div>
        </div>
      </div>
    </div>


  ) : <Loading />
}

export default Persondetails
