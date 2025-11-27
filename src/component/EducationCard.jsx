// EducationCard.jsx
import React from 'react'
import { motion } from 'framer-motion'

export default function EducationCard({ edu, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 p-8 transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10"
        >
            {/* Top Section */}
            <div className="flex items-start justify-between mb-6">
                <div className="flex items-start">
                    {/* Title & Institute */}
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                            {edu.title}
                        </h3>
                        <p className="text-gray-300 mt-2 font-medium">{edu.institute}</p>
                    </div>
                </div>
            </div>

            {/* Period & Note */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3 text-gray-400">
                    <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                        <span className="text-sm">📅</span>
                    </div>
                    <span className="font-medium">{edu.period}</span>
                </div>
                {edu.note && (
                    <span className="bg-gray-800 text-purple-300 border border-purple-500/30 px-4 py-2 rounded-full text-sm font-semibold">
                        {edu.note}
                    </span>
                )}
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                {edu.gpa && (
                    <div className="text-center p-4 bg-gray-800/50 rounded-2xl border border-gray-700">
                        <div className="text-xs text-gray-400 uppercase tracking-wide">GPA</div>
                        <div className="text-2xl font-black text-white mt-1">{edu.gpa}</div>
                    </div>
                )}
                {edu.duration && (
                    <div className="text-center p-4 bg-gray-800/50 rounded-2xl border border-gray-700">
                        <div className="text-xs text-gray-400 uppercase tracking-wide">Duration</div>
                        <div className="text-lg font-bold text-white mt-1">{edu.duration}</div>
                    </div>
                )}
            </div>

            {/* Specialization */}
            {edu.specialization && (
                <div className="mb-6 p-4 bg-gray-800/50 rounded-2xl border border-gray-700">
                    <div className="text-xs text-purple-300 font-semibold uppercase tracking-wide mb-2">Specialization</div>
                    <div className="text-white font-medium">{edu.specialization}</div>
                </div>
            )}

            {/* Courses */}
            {edu.courses && (
                <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Key Courses</div>
                    <div className="flex flex-wrap gap-2">
                        {edu.courses.slice(0, 4).map((course, i) => (
                            <span
                                key={i}
                                className="text-xs bg-gray-800 text-gray-300 px-3 py-2 rounded-xl border border-gray-700"
                            >
                                {course}
                            </span>
                        ))}
                        {edu.courses.length > 4 && (
                            <span className="text-xs text-gray-500 px-3 py-2">
                                +{edu.courses.length - 4} more
                            </span>
                        )}
                    </div>
                </div>
            )}
        </motion.div>
    )
}

