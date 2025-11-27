import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript, SiExpress } from "react-icons/si";

export default function Skills() {
    const skills = [
        { name: "React.js", icon: <FaReact />, level: "90%" },
        { name: "React Native", icon: <FaReact />, level: "95%" },
        { name: "JavaScript", icon: <SiJavascript />, level: "85%" },
        { name: "Node.js", icon: <FaNodeJs />, level: "80%" },
        { name: "Express.js", icon: <SiExpress />, level: "80%" },
        { name: "MongoDB", icon: <SiMongodb />, level: "80%" },
        { name: "HTML", icon: <FaHtml5 />, level: "95%" },
        { name: "CSS", icon: <FaCss3Alt />, level: "90%" },
        { name: "TailwindCSS", icon: <SiTailwindcss />, level: "85%" },
        { name: "Git / GitHub", icon: <FaGitAlt />, level: "75%" },
    ];

    return (
        <section className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 px-6">
            <div className="container mx-auto">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center text-5xl font-bold mb-12"
                >
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span>
                </motion.h2>

                {/* White Main Card Container */}
                <div className="bg-white text-gray-900 rounded-3xl shadow-2xl p-10 max-w-6xl mx-auto border border-gray-200">

                    {/* Skills Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="bg-gray-100 hover:bg-gray-200 transition-all p-6 rounded-2xl border border-gray-300 shadow-md hover:shadow-xl"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="text-4xl text-cyan-500">{skill.icon}</div>
                                    <h3 className="text-2xl font-semibold">{skill.name}</h3>
                                </div>

                                {/* Progress Bar */}
                                <div className="w-full bg-gray-300 rounded-full h-2 relative">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: skill.level }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1 }}
                                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                                    ></motion.div>
                                </div>

                                <p className="text-right text-sm mt-2 text-gray-600">{skill.level}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
