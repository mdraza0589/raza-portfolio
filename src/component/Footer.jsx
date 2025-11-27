import React from 'react'
import { motion } from 'framer-motion'
import { SITE } from '../../data/SiteData'

// React Icons
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200 mt-20">
            <div className="container mx-auto px-6">

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
                                    <div className="text-xl font-bold text-gray-900">{SITE.name}</div>
                                    <div className="text-sm text-gray-500">{SITE.role}</div>
                                </div>
                            </div>
                            <p className="text-gray-600 mt-4 max-w-md">
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
                                className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 hover:-translate-y-1"
                            >
                                <FaGithub size={22} />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href={SITE.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 hover:-translate-y-1"
                            >
                                <FaLinkedinIn size={22} />
                            </a>

                            {/* Facebook */}
                            <a
                                href={SITE.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 hover:-translate-y-1"
                            >
                                <FaFacebookF size={22} />
                            </a>

                            {/* Instagram */}
                            <a
                                href={SITE.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 text-white rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 hover:-translate-y-1"
                            >
                                <FaInstagram size={22} />
                            </a>

                            {/* WhatsApp */}
                            <a
                                href={`https://wa.me/${SITE.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 hover:-translate-y-1"
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
                            <h4 className="font-semibold text-gray-900 mb-4">Get In Touch</h4>
                            <a href={`mailto:${SITE.email}`} className="text-cyan-600 hover:text-cyan-700">
                                {SITE.email}
                            </a>
                            <p className="text-gray-600 mt-2">{SITE.location}</p>
                        </motion.div>

                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="py-6 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-gray-600 text-sm">
                            © {currentYear} {SITE.name}. All rights reserved.
                        </div>
                        <p className="text-gray-500 text-sm">Thank you for your interest. Let's build something great together.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
