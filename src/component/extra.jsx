import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiLocationOn } from "react-icons/ci";
import { SITE } from '../../data/SiteData'

export default function Hero() {
    const [showPopup, setShowPopup] = useState(false);
    const defaultMessage = encodeURIComponent(
        "Hello,\nRaza, I visited your portfolio and I want to connect with you."
    );
    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent animate-pulse"></div>

            <div className="container mx-auto px-3 py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT SECTION - Enhanced */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white"
                    >

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                            Md. Raza
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-3xl md:text-5xl">
                                MERN Stack Developer
                            </span>
                            <br />
                        </h1>

                        <p className="mt-6 text-xl text-gray-300 leading-relaxed">
                            {SITE.role} - Crafting exceptional digital experiences with modern technologies.
                        </p>

                        {/* Enhanced Buttons */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setShowPopup(true)}
                                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-cyan-500/25 transition-all duration-300"
                            >
                                Download Resume
                            </motion.button>

                            <a
                                href={`https://wa.me/${SITE.whatsapp}?text=${defaultMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 hover:scale-105 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                            >
                                Get In Touch
                            </a>
                        </div>
                    </motion.div>

                    {/* RIGHT SECTION - Enhanced Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="bg-white/10 backdrop-blur-md  rounded-3xl p-8 border border-white/20 shadow-2xl">
                            {/* Profile Avatar Placeholder */}

                            <div className="flex flex-wrap gap-4">
                                <div>

                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                            {/* {SITE.name.split(' ').map(n => n[0]).join('')} */}
                                            <img className="w-full h-full object-contain rounded-full" src="/assets/logo/my1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold text-lg">Metawish AI Indore</h3>
                                            <p className="text-cyan-300 text-sm">{SITE.role}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <div className="text-cyan-300 text-sm font-medium mb-1 flex gap-2 items-center "><CiLocationOn /> <span>Location</span></div>
                                            <div className="text-white text-lg">{SITE.location}</div>
                                        </div>

                                        <div>
                                            <div className="text-cyan-300 text-sm font-medium mb-1">📧 Email</div>
                                            <a href={`mailto:${SITE.email}`} className="text-white text-lg hover:text-cyan-300 transition-colors">
                                                {SITE.email}
                                            </a>
                                        </div>
                                    </div>
                                </div>


                            </div>


                            {/* Social Links */}
                            <div className="mt-8 grid grid-cols-2 gap-3">
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    href={SITE.github}
                                    target="_blank"
                                    className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl p-4 text-center text-white transition-all duration-300 group"
                                >
                                    <div className="font-semibold group-hover:text-cyan-300">GitHub</div>
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    href={SITE.linkedin}
                                    target="_blank"
                                    className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl p-4 text-center text-white transition-all duration-300 group"
                                >
                                    <div className="font-semibold group-hover:text-cyan-300">LinkedIn</div>
                                </motion.a>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full blur-xl opacity-40 animate-pulse delay-1000"></div>
                    </motion.div>
                </div>
            </div>

            {/* Enhanced Popup */}
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-slate-800 border border-white/20 rounded-2xl p-8 max-w-md w-full shadow-2xl"
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 20 }}
                        >
                            <div className="text-center">
                                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📄</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Download Resume</h3>
                                <p className="text-gray-300 mb-6">
                                    Ready to download {SITE.name}'s resume?
                                </p>

                                <div className="flex gap-3 justify-center">
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="/raza-creditor.pdf"
                                        download={`raza_Resume.pdf`}
                                        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
                                    >
                                        <span>Download</span>
                                    </motion.a>

                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setShowPopup(false)}
                                        className="border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors"
                                    >
                                        Cancel
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

