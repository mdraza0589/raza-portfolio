import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE } from '../data/siteData'

const Nav = () => {
    const [open, setOpen] = useState(false)

    const navLinks = [
        { to: "/", label: "Home", icon: "" },
        { to: "/projects", label: "Projects", icon: "" },
        { to: "/experience", label: "Experience", icon: "" },
        { to: "/contact", label: "Contact", icon: "" },
        { to: "/skills", label: "Skills", icon: "" }
    ]

    return (
        <>
            {/* TOP NAVBAR */}
            <motion.nav
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40"
            >
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between py-4">
                        <NavLink to='/'>
                            {/* LOGO */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-3 cursor-pointer"

                            >
                                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                                    <span className="text-white w-full h-full font-bold text-lg">
                                        {/* {SITE.name.split(' ').map(n => n[0]).join('')} */}
                                        <img className="w-full h-full rounded-full" src="/assets/logo/logo.jpg" alt="" />
                                    </span>
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-gray-900">
                                        {SITE.name}
                                    </div>
                                    <div className="text-sm text-gray-500">{SITE.role}</div>
                                </div>
                            </motion.div>
                        </NavLink>

                        {/* DESKTOP NAV */}
                        <div className="hidden md:flex items-center gap-1 bg-white/50 rounded-2xl p-1 border border-gray-200">
                            {navLinks.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${isActive
                                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                                            : 'text-gray-600 hover:text-cyan-600 hover:bg-gray-100'
                                        }`
                                    }
                                >
                                    <span className="text-sm">{item.icon}</span>
                                    <span>{item.label}</span>
                                </NavLink>
                            ))}
                        </div>

                        {/* MOBILE HAMBURGER */}
                        <button
                            className="md:hidden text-3xl"
                            onClick={() => setOpen(true)}
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* BACKDROP */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                        onClick={() => setOpen(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                )}
            </AnimatePresence>

            {/* SIDE DRAWER */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ x: -250 }}
                        animate={{ x: 0 }}
                        exit={{ x: -250 }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed top-0 left-0 h-full w-64 bg-white shadow-xl p-6 z-50"
                    >
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold">Menu</h2>
                            <button className="text-3xl" onClick={() => setOpen(false)}>
                                ✕
                            </button>
                        </div>

                        <div className="mt-6 flex flex-col gap-4">
                            {navLinks.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 font-medium"
                                >
                                    <span>{item.icon}</span> {item.label}
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Nav
