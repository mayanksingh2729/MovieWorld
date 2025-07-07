import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../utils/axios'
import Loading from './Loading'
import Topnav from '../components/navbar/Topnav'
import Dropdown from '../components/Layouts/Dropdown'
import VerticalCards from '../components/cards/VerticalCards'
import InfiniteScroll from 'react-infinite-scroll-component'

const Person = () => {

    document.title = "Person"

    const navigate = useNavigate()
    const [category, setCategory] = useState("popular")
    const [person, setPerson] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasasMore] = useState(true)

    const GetPerson = async () => {
        try {
            const { data } = await axios.get(`/person/${category}?page=${page}`);
            if (data.results.length > 0) {
                setPerson((prevState) => [...prevState, ...data.results])
                setPage(page + 1)
            } else {
                setHasasMore(false)
            }
        } catch (error) {
            console.log("Error:", error);
        }
    };

    const refreshHandler = async () => {
        if (person.length === 0) {
            GetPerson()
        } else {
            setPage(1)
            setPerson([])
            GetPerson()
        }
    }

    useEffect(() => {
        refreshHandler()
    }, [category])

    return person.length > 0 ? (
        <div className="w-screen min-h-screen">
            {/* --- Top Section for desktop (md+) --- */}
            <div className="px-[3%] w-full hidden md:flex items-center justify-start mt-4">
                <h1 className="text-2xl text-zinc-400 font-semibold flex cursor-pointer z-60" onClick={() => navigate(-1)} >
                    <i className="hover:text-[#6556CD] ri-arrow-left-line mr-2"></i> Actors
                </h1>

                <div className="relative min-h-[10vh] w-[800px]">
                    <Topnav />
                </div>
            </div>

            {/* --- Top Section for mobile (<md) --- */}
            <div className="w-full flex flex-col md:hidden space-y-4 px-[3%] mt-4">
                {/* Row 1: Heading only */}
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-xl text-zinc-400 font-semibold flex items-center cursor-pointer z-60" onClick={() => navigate(-1)} >
                        <i className="hover:text-[#6556CD] ri-arrow-left-line mr-2"></i> Actors
                    </h1>
                </div>

                {/* Row 2: Topnav full width on mobile */}
                <div className="relative min-h-[10vh] w-full">
                    <Topnav />
                </div>
            </div>

            <InfiniteScroll dataLength={person.length} next={GetPerson} hasMore={hasMore} loader={<h1 className="text-center mt-8">Loading....</h1>} >
                <VerticalCards data={person} title="person" />
            </InfiniteScroll>
        </div>


    ) : (<Loading />)

}

export default Person
