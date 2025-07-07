import React from 'react';
import { Check, Star, Play, Users, Crown, Shield } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Plans = () => {

  const navigate = useNavigate()

  const plans = [
    {
      name: "Basic",
      price: "$8.99",
      period: "/month",
      description: "Perfect for casual movie watchers",
      icon: Play,
      features: [
        "HD streaming",
        "Watch on 1 device",
        "Limited movie library",
        "Ads included",
        "Download on mobile"
      ],
      buttonText: "Get Started",
      popular: false,
      gradient: "from-slate-600 via-slate-700 to-slate-800",
      borderGradient: "from-slate-500 to-slate-600",
      iconBg: "from-slate-500 to-slate-600"
    },
    {
      name: "Standard",
      price: "$13.99",
      period: "/month",
      description: "Great for families and regular viewers",
      icon: Users,
      features: [
        "Full HD streaming",
        "Watch on 2 devices",
        "Complete movie library",
        "Limited ads",
        "Download on 2 devices",
        "Early access to new releases"
      ],
      buttonText: "Choose Standard",
      popular: false,
      gradient: "from-blue-600 via-blue-700 to-indigo-800",
      borderGradient: "from-blue-400 to-indigo-500",
      iconBg: "from-blue-500 to-indigo-600"
    },
    {
      name: "Premium",
      price: "$18.99",
      period: "/month",
      description: "The ultimate movie experience",
      icon: Crown,
      features: [
        "4K Ultra HD streaming",
        "Watch on 4 devices",
        "Complete movie library",
        "No ads",
        "Download on 4 devices",
        "Early access to new releases",
        "Exclusive premium content",
        "Dolby Atmos audio"
      ],
      buttonText: "Go Premium",
      popular: true,
      gradient: "from-purple-600 via-pink-600 to-rose-700",
      borderGradient: "from-purple-400 to-pink-500",
      iconBg: "from-purple-500 to-pink-600"
    },
    {
      name: "Family",
      price: "$24.99",
      period: "/month",
      description: "Perfect for large families",
      icon: Shield,
      features: [
        "4K Ultra HD streaming",
        "Watch on 6 devices",
        "Complete movie library",
        "No ads",
        "Download on 6 devices",
        "Early access to new releases",
        "Exclusive premium content",
        "Dolby Atmos audio",
        "Parental controls",
        "Kids profiles included"
      ],
      buttonText: "Choose Family",
      popular: false,
      gradient: "from-emerald-600 via-teal-600 to-cyan-700",
      borderGradient: "from-emerald-400 to-teal-500",
      iconBg: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-[#1F1E24] to-gray-900 overflow-y-auto">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Top Navigation for Going Back*/}
        <nav className="w-full h-[10vh] text-zinc-100 flex items-center gap-10 text-2xl">
          <Link onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></Link>
        </nav>
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className=" concert_one_font text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white"> <i className="ri-movie-2-line mr-2 text-white"></i>MOVIEWORLD </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent mb-4"> Choose Your Perfect Plan </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto"> Unlimited movies, TV shows, and exclusive content. Watch anywhere, anytime. </p>
        </div>

        {/* Included Features */}
        <div className="text-center mb-20">
          <div className="bg-gradient-to-r from-gray-800/40 via-gray-700/40 to-gray-800/40 backdrop-blur-sm rounded-3xl px-6 py-10 sm:p-10 max-w-5xl mx-auto border border-gray-600/30 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 bg-gradient-to-r from-white to-purple-100 bg-clip-text"> All Plans Include </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { text: "Cancel / Change anytime", icon: Check },
                { text: "30-day free trial", icon: Check },
                { text: "24/7 customer support", icon: Check }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-center justify-center gap-3 group hover:scale-105 transition-transform duration-300">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center shadow-lg group-hover:shadow-green-500/25">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-200 font-medium text-base sm:text-lg">{item.text}</span>
                  </div>
                );})}
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div key={index} className={`relative group bg-gradient-to-br ${plan.gradient} border-0 hover:scale-105 transition-all duration-500 hover:shadow-2xl rounded-xl px-6 py-8 ${ plan.popular ? 'ring-2 ring-purple-400 shadow-purple-500/25 scale-105' : 'hover:shadow-xl' }`} >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                      <Star className="w-4 h-4" /> Most Popular
                    </div>
                  </div>
                )}

                <div className={`w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${plan.iconBg} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white text-center mb-2">{plan.name}</h3>
                <p className="text-gray-300 text-sm text-center mb-6">{plan.description}</p>

                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300 text-base">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 group-hover:translate-x-1 transition duration-300">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-200 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full bg-gradient-to-r ${plan.iconBg} hover:scale-105 text-white font-semibold py-3 px-5 text-base transition-all duration-300 shadow-md rounded-lg ${
                    plan.popular ? 'shadow-purple-500/25 hover:shadow-purple-500/40' : ''
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Plans;
