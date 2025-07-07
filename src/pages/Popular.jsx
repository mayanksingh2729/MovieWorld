import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axios'
import Loading from './Loading'
import Topnav from '../components/navbar/Topnav'
import Dropdown from '../components/Layouts/Dropdown'
import VerticalCards from '../components/cards/VerticalCards'
import InfiniteScroll from 'react-infinite-scroll-component'

const Popular = () => {
    document.title = "Popular "

    const navigate = useNavigate()
    const [category, setCategory] = useState("movie")
    const [popular, setPopular] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasasMore] = useState(true)

    const GetPopular = async () => {
        try {
            const { data } = await axios.get(`${category}/popular?page=${page}`);
            if (data.results.length > 0) {
                setPopular((prevState) => [...prevState, ...data.results])
                setPage(page + 1)
            } else {
                setHasasMore(false)
            }
        } catch (error) {
            console.log("Error:", error);
        }
    };

    const refreshHandler = async () => {
        if (popular.length === 0) {
            GetPopular()
        } else {
            setPage(1)
            setPopular([])
            GetPopular()
        }
    }

    useEffect(() => {
        refreshHandler()
    }, [category])


    return popular.length > 0 ? (
        <div className="w-screen min-h-screen">
            {/* --- Top Section for desktop (md+) --- */}
            <div className="px-[3%] w-full hidden md:flex items-center justify-between mt-2">
                <h1 className="text-2xl text-zinc-400 font-semibold flex cursor-pointer z-60" onClick={() => navigate(-1)} >
                    <i className="hover:text-[#6556CD] ri-arrow-left-line mr-2"></i> Popular
                    <small className="ml-2 text-sm text-zinc-600">({category})</small>
                </h1>

                <div className="relative min-h-[10vh] w-[800px] -ml-15">
                    <Topnav />
                </div>

                <div className="flex space-x-4 z-60">
                    <Dropdown title="Category" options={["tv", "movie"]} func={(e) => setCategory(e.target.value)} />
                </div>
            </div>

            {/* --- Top Section for mobile (<md) --- */}
            <div className="w-full flex flex-col md:hidden space-y-4 px-[3%] mt-2">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-xl text-zinc-400 font-semibold flex items-center cursor-pointer z-60" onClick={() => navigate(-1)} >
                        <i className="hover:text-[#6556CD] ri-arrow-left-line mr-2"></i> Popular
                    </h1>

                    <div className="flex space-x-2">
                        <Dropdown title="Category" options={["tv", "movie"]} func={(e) => setCategory(e.target.value)} />
                    </div>
                </div>

                <div className="relative min-h-[10vh] w-full">
                    <Topnav />
                </div>
            </div>

            {/* --- Infinite Scroll List --- */}
            <InfiniteScroll dataLength={popular.length} next={GetPopular} hasMore={hasMore} loader={<h1 className="text-center mt-8">Loading....</h1>} >
                <VerticalCards data={popular} title={category} />
            </InfiniteScroll>
        </div>


    ) : (<Loading />)

}

export default Popular
