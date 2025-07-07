import React, { useState } from "react";
import loginbg from '/loginbg.jpeg'

const Login = ({ onLogin }) => {
    const [userid, setUserid] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userid === 'mayank@gmail.com' && password === 'Mayank') {
            setError('');
            onLogin();
        } else {
            setError('Wrong userid and password');
        }
    };

    return (
        <div className="w-screen h-screen relative flex items-center justify-center bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${loginbg})` }}>
            {/* Overlay */}

            <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between z-10">

                {/* Login Form */}
                <div className=" bg-white/10 backdrop-blur-md p-8 rounded-md shadow-lg w-full md:w-1/2 max-w-[500px]">
                    <h1 className="concert_one_font text-white text-[35px] sm:text-[70px] md:text-[50px] text-center">
                        <i className="text-red-100 font-bold text-[35px] sm:text-[70px] md:text-[50px] ri-movie-2-line"></i>
                        <span className="ml-2">MovieWorld</span>
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-4 text-white">
                        <div>
                            <label className="text-md font-bold text-zinc-200 block mb-1">Username</label>
                            <input type="text" value={userid} onChange={(e) => setUserid(e.target.value)} placeholder="Enter your username" className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-purple-400" />
                        </div>

                        <div>
                            <label className="text-md font-bold text-zinc-200 block mb-1">Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-purple-400" />
                        </div>

                        {error && <p className="text-sm text-red-600">{error}</p>}

                        <button type="submit" className="w-full bg-red-700 text-white font-medium py-2 rounded hover:bg-red-600 transition">Login</button>
                    </form>

                    <div className="mt-6 text-center">
                    <p className="text-blue-400 text-xs sm:text-sm"> Demo credentials: <strong>mayank@gmail.com / Mayank</strong> </p>
                </div>

                </div>

                {/* Overlapping Images */}
                <div className="relative w-full md:w-1/2 mt-10 md:mt-0 md:flex justify-center items-center hidden ">
                    <div className="relative w-[500px] h-[500px] sm:w-[300px] sm:h-[500px]">
                        <img src="/login2.jpg" alt="img1" className="absolute top-2 left-55 w-full h-full object-cover rotate-8 shadow-[0_10px_30px_50px_rgba(255,0,0,0.5)]"
                        />
                        <img src="/login1.jpg" alt="img2" className="absolute top-45 left-20 w-full h-full object-cover shadow-[-50px_-50px_40px_rgba(255,0,0,0.4)] -rotate-35"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
