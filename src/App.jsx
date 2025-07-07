import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login'; 
import Home from './pages/Home';
import Trending from './pages/Trending';
import Popular from './pages/Popular';
import Movie from './pages/Movie';
import TvShows from './pages/TvShows';
import Person from './pages/Person';
import Plans from './pages/Plans';
import Contactus from './pages/Contactus';
import Moviedetails from './components/details/Moviedetails';
import Tvdetails from './components/details/Tvdetails';
import Persondetails from './components/details/Persondetails';
import Trailer from './pages/Trailer';
import PageNotFound from './pages/PageNotFound';
import Mobilenav from './components/navbar/Mobilenav';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const savedLogin = localStorage.getItem('isLoggedIn');
    if (savedLogin === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="w-full h-screen bg-[#1F1E24] flex">
      <Routes>
        <Route path="/" element={<Home onLogout={handleLogout} />} />
        <Route path="/mobilenav" element={<Mobilenav/>}></Route>
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
          <Route path="/movie/details/:id" element={<Moviedetails />}>
            <Route path="/movie/details/:id/trailer" element={<Trailer />} />
          </Route>
        <Route path="/tvshows" element={<TvShows />} />
          <Route path="/tv/details/:id" element={<Tvdetails />}>
            <Route path="/tv/details/:id/trailer" element={<Trailer />} />
          </Route>
        <Route path="/person" element={<Person />} />
          <Route path="/person/details/:id" element={<Persondetails />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
