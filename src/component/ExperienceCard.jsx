import React from 'react'
import { motion } from 'framer-motion'

export default function ExperienceCard({ exp, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative bg-white rounded-2xl border border-gray-200 p-6 hover:border-green-200 transition-all duration-300"
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                    {/* Company Icon */}
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-100 transition-colors">
                        <span className="text-green-600 text-lg">💼</span>
                    </div>
                    
                    {/* Title & Company */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                            {exp.title}
                        </h3>
                        <p className="text-gray-600 mt-1">{exp.company}</p>
                    </div>
                </div>
                
                {/* Period */}
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs font-medium text-gray-700">{exp.period}</span>
                </div>
            </div>

            {/* Location & Type */}
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                {exp.location && (
                    <span className="flex items-center gap-1">
                        📍 {exp.location}
                    </span>
                )}
                {exp.type && (
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                        {exp.type}
                    </span>
                )}
            </div>

            {/* Description */}
            {exp.description && (
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {exp.description}
                </p>
            )}

            {/* Bullet Points */}
            <ul className="space-y-2 mb-4">
                {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{bullet}</span>
                    </li>
                ))}
            </ul>

            {/* Tech Stack */}
            {exp.tech && (
                <div className="border-t border-gray-100 pt-4">
                    <div className="text-xs font-medium text-gray-500 mb-3">Technologies</div>
                    <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, i) => (
                            <span
                                key={i}
                                className="text-xs bg-green-100 text-green-700 px-3 py-1.5 rounded-lg font-medium"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Hover Border Effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-200 rounded-2xl transition-all duration-300 pointer-events-none"></div>
        </motion.div>
    )
}