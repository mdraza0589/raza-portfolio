import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE } from '../../data/SiteData'

const Nav = () => {
    const [open, setOpen] = useState(false)

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/projects", label: "Projects" },
        { to: "/skills", label: "Skills" },
        { to: "/about", label: "About" },
        { to: "/contact", label: "Contact" },
    ]

    return (
        <>
            {/* TOP NAVBAR */}
            <motion.nav
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-white/95 backdrop-blur-lg border-b border-gray-300 sticky top-0 z-40 shadow-sm"
            >
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between py-4">
                        <NavLink to='/'>
                            {/* LOGO */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-3 cursor-pointer"
                            >
                                <div className="w-10 h-10 bg-gradient-to-br from-black to-gray-800 rounded-full flex items-center justify-center shadow-lg border border-gray-300">
                                    <span className="text-white w-full h-full font-bold text-lg flex items-center justify-center">
                                        <img
                                            className="w-full h-full rounded-full object-cover"
                                            src="/assets/logo/logo.jpg"
                                            alt={`${SITE.name} Logo`}
                                        />
                                    </span>
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-gray-900 tracking-tight">
                                        {SITE.name}
                                    </div>
                                    <div className="text-sm text-gray-600 font-medium">{SITE.role}</div>
                                </div>
                            </motion.div>
                        </NavLink>

                        {/* DESKTOP NAV */}
                        <div className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-2xl p-1.5 border border-gray-300 shadow-sm">
                            {navLinks.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 ${isActive
                                            ? 'bg-black text-white shadow-lg shadow-black/20 border border-gray-800'
                                            : 'text-gray-700 hover:text-black hover:bg-gray-100 border border-transparent'
                                        }`
                                    }
                                >
                                    <span className="text-sm tracking-wide">{item.label}</span>
                                </NavLink>
                            ))}
                        </div>

                        {/* MOBILE HAMBURGER */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="md:hidden text-2xl p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-300"
                            onClick={() => setOpen(true)}
                        >
                            <span className="text-gray-800">☰</span>
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* BACKDROP */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
                        onClick={() => setOpen(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                )}
            </AnimatePresence>

            {/* SIDE DRAWER - Simplified with width animation */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 320, opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed top-0 left-0 h-full bg-white shadow-2xl z-50 border-r border-gray-300 overflow-hidden"
                    >
                        <div className="w-80 h-full p-6">
                            {/* DRAWER HEADER */}
                            <div className="flex justify-between items-center pb-6 border-b border-gray-200">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-800 rounded-full flex items-center justify-center shadow-lg border border-gray-300">
                                        <img
                                            className="w-full h-full rounded-full object-cover"
                                            src="/assets/logo/logo.jpg"
                                            alt={`${SITE.name} Logo`}
                                        />
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-gray-900">{SITE.name}</div>
                                        <div className="text-xs text-gray-600">{SITE.role}</div>
                                    </div>
                                </motion.div>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-2xl p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
                                    onClick={() => setOpen(false)}
                                >
                                    ✕
                                </motion.button>
                            </div>

                            {/* NAVIGATION LINKS */}
                            <div className="mt-8 flex flex-col gap-2">
                                {navLinks.map((item, index) => (
                                    <motion.div
                                        key={item.to}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 + 0.2 }}
                                    >
                                        <NavLink
                                            to={item.to}
                                            onClick={() => setOpen(false)}
                                            className={({ isActive }) =>
                                                `flex items-center gap-4 px-4 py-3 rounded-xl font-semibold transition-all duration-300 border ${isActive
                                                    ? 'bg-black text-white shadow-lg border-gray-800'
                                                    : 'text-gray-700 hover:bg-gray-100 hover:text-black border-transparent'
                                                }`
                                            }
                                        >
                                            <span className="text-sm tracking-wide">{item.label}</span>
                                        </NavLink>
                                    </motion.div>
                                ))}
                            </div>

                            {/* FOOTER */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="absolute bottom-6 left-6 right-6 text-center"
                            >
                                <div className="text-xs text-gray-500 border-t border-gray-200 pt-4">
                                    Minimal & Elegant
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Nav