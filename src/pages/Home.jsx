import React, { useState, useEffect } from "react";
import Sidenav from "../components/navbar/Sidenav";
import Topnav from "../components/navbar/Topnav";
import Mobilenav from "../components/navbar/Mobilenav";
import axios from "../utils/axios";
import Header from "../components/Layouts/Header";
import HorizontalCards from "../components/cards/HorizontalCards";
import Dropdown from "../components/Layouts/Dropdown";
import Loading from "./Loading";

const Home = ({ onLogout }) => {
  document.title = "MovieWorld";
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setCategory] = useState("all");

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata = data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randomdata);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      settrending(data.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    !wallpaper && GetHeaderWallpaper();
    GetTrending();
  }, [category]);

  return wallpaper && trending ? (
    <div className="flex w-full h-full bg-transparent overflow-x-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidenav onLogout={onLogout} />
      </div>

      {/* Mobile Nav */}
      <div className="lg:hidden fixed top-0 left-0 w-full z-50 bg-transparent">
        <Mobilenav onLogout={onLogout} />
      </div>

      {/* Main Content Area */}
      <div className="w-full h-full overflow-y-auto lg:mt-0">
        {/* Topnav (for desktop only) */}
        <div className="hidden lg:block relative">
          <Topnav />
        </div>

        <Header data={wallpaper}/>

        <div className="flex justify-between p-4">
          <h1 className="text-2xl font-semibold text-zinc-400">Trending</h1>
          <Dropdown title="Filter" options={["tv", "movies", "all"]} func={(e) => setCategory(e.target.value)} />
        </div>

        <HorizontalCards data={trending} />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Home;
