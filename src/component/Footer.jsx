import React from 'react'
import { motion } from 'framer-motion'
import { SITE } from '../../data/SiteData'

// React Icons
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Main Footer */}
                <div className="py-12">
                    <div className="grid md:grid-cols-3 gap-8 items-center">

                        {/* Brand */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center md:text-left"
                        >
                            <div className="flex items-center gap-3 justify-center md:justify-start">
                                <div>
                                    <div className="text-xl font-bold text-white">{SITE.name}</div>
                                    <div className="text-sm text-cyan-400">{SITE.role}</div>
                                </div>
                            </div>
                            <p className="text-gray-300 mt-4 max-w-md">
                                Building the future with code, one project at a time.
                            </p>
                        </motion.div>


                        {/* Social Icons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            {/* GitHub */}
                            <a
                                href={SITE.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-gray-800/80 backdrop-blur-sm text-white rounded-xl flex items-center justify-center hover:bg-gray-700 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-110 hover:-translate-y-1 border border-gray-700"
                            >
                                <FaGithub size={22} />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href={SITE.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-gray-800/80 backdrop-blur-sm text-white rounded-xl flex items-center justify-center hover:bg-blue-600 hover:border-blue-400/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-110 hover:-translate-y-1 border border-gray-700"
                            >
                                <FaLinkedinIn size={22} />
                            </a>

                            {/* Facebook */}
                            <a
                                href={SITE.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-gray-800/80 backdrop-blur-sm text-white rounded-xl flex items-center justify-center hover:bg-blue-500 hover:border-blue-400/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-110 hover:-translate-y-1 border border-gray-700"
                            >
                                <FaFacebookF size={22} />
                            </a>

                            {/* Instagram */}
                            <a
                                href={SITE.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-gray-800/80 backdrop-blur-sm text-white rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-110 hover:-translate-y-1 border border-gray-700"
                            >
                                <FaInstagram size={22} />
                            </a>

                            {/* WhatsApp */}
                            <a
                                href={`https://wa.me/${SITE.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-gray-800/80 backdrop-blur-sm text-white rounded-xl flex items-center justify-center hover:bg-green-500 hover:border-green-400/50 transition-all duration-300 shadow-lg hover:shadow-green-500/25 hover:scale-110 hover:-translate-y-1 border border-gray-700"
                            >
                                <FaWhatsapp size={22} />
                            </a>
                        </motion.div>


                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center md:text-right"
                        >
                            <h4 className="font-semibold text-white mb-4">Get In Touch</h4>
                            <a href={`mailto:${SITE.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium">
                                {SITE.email}
                            </a>
                            <p className="text-gray-300 mt-2">{SITE.location}</p>
                        </motion.div>

                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="py-6 border-t border-gray-800/50">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-gray-400 text-sm">
                            © {currentYear} {SITE.name}. All rights reserved.
                        </div>
                        <p className="text-gray-500 text-sm text-center">Thank you for your interest. Let's build something great together.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

