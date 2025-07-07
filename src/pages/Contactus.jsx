import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Contactus = () => {

  const navigate = useNavigate()

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-auto">
      <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top Navigation for Going Back*/}
        <nav className="w-full h-[10vh] text-zinc-100 flex items-center gap-10 text-2xl">
          <Link onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></Link>
        </nav>
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-zinc-200">Contact Us</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about MovieWorld? We're here to help!
            <br />
            <span className="text-blue-300">Reach out to us anytime and we'll get back to you soon.</span>
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/40 via-gray-700/40 to-gray-800/40 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-gray-600/30 shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Get In Touch</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email Us", info: "mayank@movieworld.com", subtext: "We'll respond within 24 hours" },
                  { icon: Phone, title: "Call Us", info: "+91 8755743400", subtext: "Mon-Fri, 9AM-6PM EST" },
                  { icon: MapPin, title: "Visit Us", info: "Satpuli,Uttarakhand", subtext: "Main office headquarters" },
                  { icon: Clock, title: "Business Hours", info: "Monday - Friday: 9AM - 6PM", subtext: "Weekend support available" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-blue-300 font-medium text-sm sm:text-base">{item.info}</p>
                        <p className="text-gray-400 text-sm">{item.subtext}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/40 via-gray-700/40 to-gray-800/40 rounded-3xl p-6 sm:p-8 border border-gray-600/30 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Send Us a Message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <input type="text" className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Mayank" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Negi" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input type="email" className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="mayank@gmail.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input type="text" className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="How can we help you?" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea rows={6} className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" placeholder="Tell us about your inquiry..." ></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 text-white font-bold py-4 px-6 text-base transition-all duration-300 shadow-lg hover:shadow-xl border-0 rounded-lg flex items-center justify-center gap-3 group">
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-gray-800/40 via-gray-700/40 to-gray-800/40 backdrop-blur-sm rounded-3xl p-6 sm:p-10 max-w-5xl mx-auto border border-gray-600/30 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { question: "How do I cancel my subscription?", answer: "You can cancel anytime from your account settings or contact our support team." },
                { question: "Is there a free trial?", answer: "Yes! All plans come with a 30-day free trial with full access to our content." },
                { question: "Can I watch on multiple devices?", answer: "Yes, depending on your plan you can watch on 1-6 devices simultaneously." },
                { question: "Do you offer student discounts?", answer: "We offer special pricing for students. Contact us with your student ID for details." }
              ].map((faq, index) => (
                <div key={index} className="group hover:scale-105 transition-transform duration-300">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">{faq.question}</h4>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
