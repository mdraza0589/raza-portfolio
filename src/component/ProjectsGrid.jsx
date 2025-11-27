import React from 'react'
import ProjectCard from './ProjectCard'
import { motion } from 'framer-motion'
import { MOBILE_APPS, PROJECTS } from '../../data/SiteData'

export default function ProjectsGrid() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6">
                {/* Web Projects Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                            Live Web Projects
                        </h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            A collection of modern web applications built with cutting-edge technologies
                        </p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {PROJECTS.map((project, index) => (
                            <ProjectCard key={project.title} project={project} index={index} />
                        ))}
                    </motion.div>
                </motion.div>

                {/* Mobile Apps Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-20"
                >
                    <div className="text-center mb-4">
                        <span className="text-purple-500 font-semibold text-sm uppercase tracking-wider">
                            Mobile Development
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                            Mobile Applications
                        </h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Cross-platform mobile apps delivering seamless user experiences
                        </p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {MOBILE_APPS.map((app, index) => (
                            <motion.div
                                key={app.title}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                            >
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                                            <span className="text-white text-lg">📱</span>
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-lg group-hover:text-purple-600 transition-colors">
                                            {app.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {app.desc || 'A beautifully crafted mobile application'}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <a
                                            href={app.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25"
                                        >
                                            <span>View App</span>
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </a>

                                        {/* Tech Stack Tags */}
                                        {app.tech && (
                                            <div className="flex gap-1">
                                                {app.tech.slice(0, 2).map((tech, i) => (
                                                    <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}