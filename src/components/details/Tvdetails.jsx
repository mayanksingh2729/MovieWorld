import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadtv } from '../store/actions/tvActions'
import { removetv } from '../store/reducers/tvSlice'
import { Link, Outlet, useLocation, useNavigate,useParams } from 'react-router-dom'
import Loading from '../../pages/Loading'
import HorizontalCards from '../cards/HorizontalCards'
import noimage from '/noimage.jpg'


const Tvdetails = () => {
  const {pathname} = useLocation()
  const navigate=useNavigate()
  const {id} = useParams()
  const {info} = useSelector((state)=>state.tv)
  const dispatch=useDispatch()

  useEffect(()=>{
      dispatch(asyncloadtv(id))
      return()=>{
          dispatch(removetv())
      }
  },[id])
  return info ? (
    <div style={{ background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.7),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }} className='relative w-full min-h-screen px-[5%] py-5 overflow-auto'>
      
      {/* Nav */}
      <nav className='w-full flex items-center gap-5 text-zinc-100 text-2xl mb-6'>
        <Link onClick={() => navigate(-1)} className='hover:text-[#6556CD] ri-arrow-left-line'></Link>
        <a target='_blank' href={info.detail.homepage}><i className="ri-external-link-fill"></i></a>
        <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-earth-fill"></i></a>
        <a target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}`} className="bg-[#f5c518] text-black font-bold px-3 py-1 rounded text-sm shadow-sm hover:bg-[#ffc802]">IMDB</a>
      </nav>

      {/* Info Section */}
      <div className='w-full flex flex-col sm:flex-row gap-8 text-white'> 
        
        {/* Poster */}
        <div className='w-full md:w-[30%] flex justify-center md:justify-start'>
          <img className='rounded shadow-lg max-h-[500px] object-cover w-full max-w-[300px]' src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`} alt='' />
        </div>

        {/* Content */}
        <div className='w-full md:w-[70%]'>
          <h1 className='text-3xl md:text-5xl font-black leading-tight'> {info.detail.name || info.detail.title || info.detail.original_name || info.detail.original_title}
            <small className='text-2xl font-bold text-zinc-200 ml-2'>({info.detail.first_air_date.split('-')[0]})</small>
          </h1>

          <div className='mt-4 mb-6 flex flex-wrap items-center gap-4 text-sm sm:text-base'>
            <div className='flex items-center gap-2'>
              <span className='text-yellow-400 text-2xl flex'> 
                  {Array.from({ length: 5 }).map((_, index) => { const rating = info.detail.vote_average / 2;
                    return ( <i key={index} className={`ri-star-${index < Math.floor(rating) ? 'fill' : index < rating ? 'half-line' : 'line'}`} ></i> );
                  })}
              </span>
              <span className='font-semibold'>{info.detail.vote_average.toFixed(1)}/10</span>
            </div>

            <span className='font-medium'>User Score</span>
            <span>{info.detail.first_air_date}</span>
            <span>{info.detail.genres.map((g) => g.name).join(', ')}</span>
            <span>{info.detail.runtime} min</span>
          </div>

          <h1 className='text-xl font-semibold italic text-zinc-200'>{info.detail.tagline}</h1>
          <h1 className='text-2xl mt-5 mb-3'>Overview</h1>
          <p>{info.detail.overview}</p>

          {/* Languages + Link for md+ */}
          <div className='hidden md:block mt-6'>
            <h1 className='text-2xl mb-2 font-bold'>Languages</h1>
            <p className='mb-6'>{info.translations.join(', ')}</p>

            <Link className='inline-flex items-center px-5 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg font-semibold hover:scale-105 transition' to={`${pathname}/trailer`}>
              <i className='ri-play-fill mr-2 text-xl'></i> Watch Trailer
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile-only languages + trailer link */}
      <div className='block md:hidden text-white mt-8'>
        <h1 className='text-2xl mb-2 font-bold'>Languages</h1>
        <p className='mb-4'>{info.translations.join(', ')}</p>

        <Link className='inline-flex items-center px-5 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg font-semibold hover:scale-105 transition' to={`${pathname}/trailer`}>
          <i className='ri-play-fill mr-2 text-xl'></i> Watch Trailer
        </Link>
      </div>

      {/* Platforms */}
      <div className='w-full flex flex-col gap-6 mt-12'> 
        {info.watchproviders?.flatrate && (
          <div className='flex flex-wrap items-center gap-4 text-white'>
            <h1 className='text-lg font-semibold'>Available on Platform</h1> 
            {info.watchproviders.flatrate.map((w, i) => (
              <img key={i} title={w.provider_name} className='w-12 h-12 object-cover rounded-md' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt='' />
            ))}
          </div>
        )}
        {info.watchproviders?.rent && (
          <div className='flex flex-wrap items-center gap-4 text-white'>
            <h1 className='text-lg font-semibold'>Available on Rent</h1>
            {info.watchproviders.rent.map((w, i) => (
              <img key={i} title={w.provider_name} className='w-12 h-12 object-cover rounded-md' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt='' />
            ))}
          </div>
        )}
        {info.watchproviders?.buy && (
          <div className='flex flex-wrap items-center gap-4 text-white'>
            <h1 className='text-lg font-semibold'>Available on Buy</h1>
            {info.watchproviders.buy.map((w, i) => (
              <img key={i} title={w.provider_name} className='w-12 h-12 object-cover rounded-md' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt='' />
            ))}
          </div>
        )}
      </div>

      <hr className='mt-10 mb-5 border-none h-[1px] bg-zinc-500' />

      <h1 className='mb-4 text-3xl font-bold text-white'>Seasons</h1>
      <div className='w-full flex overflow-x-auto gap-6 mb-5 p-5'>
        {info.detail.seasons.length > 0 ? (info.detail.seasons.map((s, i) => (
            <div key={i} className='flex-shrink-0 min-w-[180px] max-w-[200px]'>
              <img className='shadow-md h-[30vh] w-full object-cover rounded' src={s.poster_path ? `https://image.tmdb.org/t/p/original/${s.poster_path}` : noimage} alt='' />
              <h1 className='text-xl text-zinc-300 mt-3 font-semibold line-clamp-2'>{s.name}</h1>
            </div>))
        ) : (
          <h1 className='text-3xl mt-5 text-white font-black text-center'>Nothing To Show</h1>)}
      </div>

      <hr className='mt-5 mb-5 border-none h-[1px] bg-zinc-500' />
      <h1 className='mb-4 text-3xl font-bold text-white'>Recommendations</h1>
      <HorizontalCards data={info.recommendations.length > 0 ? info.recommendations : info.similar} />
      <Outlet />
    </div>

  ):<Loading/>
}

export default Tvdetails
