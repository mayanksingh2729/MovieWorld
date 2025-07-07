import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axios'
import Loading from './Loading'
import Topnav from '../components/navbar/Topnav'
import Dropdown from '../components/Layouts/Dropdown'
import VerticalCards from '../components/cards/VerticalCards'
import InfiniteScroll from 'react-infinite-scroll-component'

const TvShows = () => {
    document.title = "TV Shows "

    const navigate = useNavigate()
    const [category, setCategory] = useState("airing_today")
    const [tv, setTv] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasasMore] = useState(true)

    const GetTv = async () => {
        try {
            const { data } = await axios.get(`/tv/${category}?page=${page}`);
            if (data.results.length > 0) {
                setTv((prevState) => [...prevState, ...data.results])
                setPage(page + 1)
            } else {
                setHasasMore(false)
            }
        } catch (error) {
            console.log("Error:", error);
        }
    };

    const refreshHandler = async () => {
        if (tv.length === 0) {
            GetTv()
        } else {
            setPage(1)
            setTv([])
            GetTv()
        }
    }

    useEffect(() => {
        refreshHandler()
    }, [category])


    return tv.length > 0 ? (
        <div className="w-screen min-h-screen">
            {/* --- Top Section for desktop (md+) --- */}
            <div className="px-[3%] w-full hidden md:flex items-center justify-between mt-2">
                <h1 className="text-2xl text-zinc-400 font-semibold flex cursor-pointer z-60" onClick={() => navigate(-1)} >
                    <i className="hover:text-[#6556CD] ri-arrow-left-line mr-2"></i> Shows
                    <small className="ml-2 text-sm text-zinc-600">({category})</small>
                </h1>

                <div className="relative min-h-[10vh] w-[800px] -ml-15">
                    <Topnav />
                </div>

                <div className="flex space-x-4 z-60">
                    <Dropdown title="Category" options={["on_the_air", "popular", "top_rated", "airing_today"]} func={(e) => setCategory(e.target.value)} />
                </div>
            </div>

            {/* --- Top Section for mobile (<md) --- */}
            <div className="w-full flex flex-col md:hidden space-y-4 px-[3%] mt-2">
                {/* Row 1: Heading + Dropdowns */}
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-xl text-zinc-400 font-semibold flex items-center cursor-pointer z-60" onClick={() => navigate(-1)} >
                        <i className="hover:text-[#6556CD] ri-arrow-left-line mr-2"></i> Shows
                    </h1>

                    <div className="z-60">
                        <Dropdown title="Category" options={["on_the_air", "popular", "top_rated", "airing_today"]} func={(e) => setCategory(e.target.value)} />
                    </div>
                </div>

                {/* Row 2: Topnav full width on mobile */}
                <div className="relative min-h-[10vh] w-full">
                    <Topnav />
                </div>
            </div>

            <InfiniteScroll dataLength={tv.length} next={GetTv} hasMore={hasMore} loader={<h1 className="text-center mt-8">Loading....</h1>} >
                <VerticalCards data={tv} title="tv" />
            </InfiniteScroll>
        </div>


    ) : (<Loading />)
}

export default TvShows
