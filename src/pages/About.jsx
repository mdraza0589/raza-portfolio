// About.jsx
import React from 'react'
import ExperienceCard from '../component/ExperienceCard'
import EducationCard from '../component/EducationCard'
import { EDUCATION, EXPERIENCE } from '../../data/SiteData'
import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cyan-500/10 to-transparent"></div>
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
                        Experience & Education
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        My journey through education and professional experiences that shaped my skills
                    </p>
                </motion.div>

                {/* Experience Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                            <span className="text-white text-xl">💼</span>
                        </div>
                        <h2 className="text-3xl font-bold text-white">Professional Experience</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {EXPERIENCE.map((exp, index) => (
                            <ExperienceCard key={exp.title} exp={exp} index={index} />
                        ))}
                    </div>
                </motion.div>

                {/* Education Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                            <span className="text-white text-xl">🎓</span>
                        </div>
                        <h2 className="text-3xl font-bold text-white">Education</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {EDUCATION.map((edu, index) => (
                            <EducationCard key={edu.title} edu={edu} index={index} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}