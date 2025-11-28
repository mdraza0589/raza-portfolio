// ExperienceCard.jsx
import React from 'react'
import { motion } from 'framer-motion'

export default function ExperienceCard({ exp, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 p-8 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10"
        >
            {/* Header */}
            <div className="md:flex items-start justify-between mb-6 ">
                <div className="flex items-start flex-1">
                    {/* Title & Company */}
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                            {exp.title}
                        </h3>
                        <p className="text-gray-300 mt-2 font-medium">{exp.company}</p>
                    </div>
                </div>

                {/* Period */}
                <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700 ml-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-300">{exp.period}</span>
                </div>
            </div>

            {/* Location & Type */}
            <div className="flex items-center gap-4 mb-6">
                {exp.location && (
                    <span className="flex items-center gap-3 text-gray-400">
                        <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                            <span className="text-sm">📍</span>
                        </div>
                        {exp.location}
                    </span>
                )}
                {exp.type && (
                    <span className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                        {exp.type}
                    </span>
                )}
            </div>

            {/* Description */}
            {exp.description && (
                <p className="text-gray-300 leading-relaxed mb-6">
                    {exp.description}
                </p>
            )}

            {/* Bullet Points */}
            <ul className="space-y-3 mb-6">
                {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{bullet}</span>
                    </li>
                ))}
            </ul>

            {/* Tech Stack */}
            {exp.tech && (
                <div className="border-t border-gray-700 pt-6">
                    <div className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">Technologies Used</div>
                    <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, i) => (
                            <span
                                key={i}
                                className="text-xs bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 px-4 py-2 rounded-xl font-semibold backdrop-blur-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </motion.div>
    )
}