// Hero.jsx
import React from 'react';
import { SITE } from '../../data/SiteData'

const Hero = () => {
    const defaultMessage = encodeURIComponent(
        "Hello,\nRaza, I visited your portfolio and I want to connect with you."
    );

    return (
        <section className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center py-8">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-evenly gap-8 md:px-16 lg:gap-12">
                    {/* Left Side - Content */}
                    <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 tracking-wider uppercase">
                            MD.{' '}
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                RAZA
                            </span>
                        </h1>

                        {/* Title */}
                        <h2 className="text-lg sm:text-xl md:text-2xl font-light mb-6 lg:mb-8 tracking-widest text-gray-300 uppercase">
                            MERN Stack Developer
                        </h2>

                        {/* Services */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6 lg:mb-8">
                            <div className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full px-4 py-2 backdrop-blur-sm">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                                <span className="text-cyan-300 font-medium text-sm uppercase tracking-wide">Mobile Application</span>
                            </div>
                            <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-400/30 rounded-full px-4 py-2 backdrop-blur-sm">
                                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                                <span className="text-purple-300 font-medium text-sm uppercase tracking-wide">Web Application</span>
                            </div>
                        </div>

                        {/* Skills Grid */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0 mb-6 lg:mb-8">
                            {['react.js', 'react native', 'express.js', 'MongoDB'].map((skill) => (
                                <div
                                    key={skill}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 cursor-pointer group"
                                >
                                    <span className="text-gray-200 group-hover:text-white font-medium tracking-wide uppercase text-xs sm:text-sm">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 lg:mb-8 justify-center lg:justify-start">
                            <button
                                onClick={() => window.open('/resume.pdf', '_blank')}
                                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 border border-cyan-400/30 uppercase tracking-wider text-sm sm:text-base"
                            >
                                View Resume
                            </button>
                            <a
                                href={`https://wa.me/${SITE.whatsapp}?text=${defaultMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 hover:scale-105 border-white/20 hover:border-white/40 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-white/10 text-center text-sm sm:text-base"
                            >
                                Get In Touch
                            </a>
                        </div>
                    </div>

                    {/* Semi-circular Partition Line - Hidden on mobile */}
                    <div className="hidden lg:block relative order-2">
                        <div className="w-1 h-64 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent rounded-full mx-4 lg:mx-8"></div>
                        {/* Semi-circle decoration */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-3 mb-6 lg:mb-0">
                        <div className="relative">
                            {/* Main Image Container */}
                            <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-600/20 border-2 border-cyan-400/30 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                                {/* Replace this div with your actual image */}
                                <div className="w-full h-full bg-gray-800/50 flex items-center justify-center">
                                    <div className="text-center">
                                        {/* <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cyan-400/30 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                                            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div> */}
                                        {/* <span className="text-cyan-300 font-medium text-sm sm:text-base">Your Profile Image</span> */}
                                        <img className="w-full h-full object-contain" src="/assets/logo/logo.jpg" alt="" />
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements around image - Hidden on small mobile */}
                            <div className="hidden sm:block absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-2xl"></div>
                            <div className="hidden sm:block absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-purple-400/50 rounded-bl-2xl"></div>
                            <div className="hidden sm:block absolute -top-4 -left-4 w-6 h-6 border-t-2 border-l-2 border-blue-400/50 rounded-tl-xl"></div>
                            <div className="hidden sm:block absolute -bottom-4 -right-4 w-6 h-6 border-b-2 border-r-2 border-green-400/50 rounded-br-xl"></div>
                        </div>
                    </div>
                </div>

                {/* Mobile Horizontal Divider */}
                <div className="lg:hidden w-full flex justify-center my-6">
                    <div className="w-48 h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent rounded-full"></div>
                    <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -mt-2"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

