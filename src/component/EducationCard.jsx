import React from 'react'
import { motion } from 'framer-motion'

export default function EducationCard({ edu, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative bg-white rounded-2xl border border-gray-200 p-6 hover:border-blue-200 transition-all duration-300"
        >
            {/* Top Section */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <span className="text-blue-600 text-lg">🎓</span>
                    </div>
                    
                    {/* Title & Institute */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {edu.title}
                        </h3>
                        <p className="text-gray-600 mt-1">{edu.institute}</p>
                    </div>
                </div>
            </div>

            {/* Period & Note */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>📅</span>
                    <span>{edu.period}</span>
                </div>
                {edu.note && (
                    <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">
                        {edu.note}
                    </span>
                )}
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
                {edu.gpa && (
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-xs text-gray-500">GPA</div>
                        <div className="text-lg font-bold text-gray-900">{edu.gpa}</div>
                    </div>
                )}
                {edu.duration && (
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-xs text-gray-500">Duration</div>
                        <div className="text-sm font-semibold text-gray-900">{edu.duration}</div>
                    </div>
                )}
            </div>

            {/* Specialization */}
            {edu.specialization && (
                <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    <div className="text-xs text-blue-600 font-medium mb-1">Specialization</div>
                    <div className="text-sm text-gray-800">{edu.specialization}</div>
                </div>
            )}

            {/* Courses */}
            {edu.courses && (
                <div>
                    <div className="text-xs font-medium text-gray-500 mb-2">Key Courses</div>
                    <div className="flex flex-wrap gap-2">
                        {edu.courses.slice(0, 3).map((course, i) => (
                            <span
                                key={i}
                                className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg"
                            >
                                {course}
                            </span>
                        ))}
                        {edu.courses.length > 3 && (
                            <span className="text-xs text-gray-400 px-2 py-1.5">
                                +{edu.courses.length - 3} more
                            </span>
                        )}
                    </div>
                </div>
            )}

            {/* Hover Border Effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-all duration-300 pointer-events-none"></div>
        </motion.div>
    )
}