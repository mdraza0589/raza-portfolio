import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CERTIFICATES } from '../../data/SiteData';



const Certificate = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    // Function to open PDF in new tab
    const openPdf = (pdfPath) => {
        window.open(pdfPath, '_blank');
    };

    return (
        <section className="min-h-screen py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">

            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-40 bg-blue-200/10"></div>
                <div className="absolute -top-10 right-10 w-60 h-60 bg-purple-300/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-300/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold p-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
                        My Certifications
                    </h1>
                    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mt-3">
                        A collection of validated professional achievements and acquired expertise.
                    </p>
                </motion.div>

                {/* Certificates Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    {CERTIFICATES.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            className="rounded-2xl border border-gray-200 bg-white shadow hover:shadow-xl duration-300"
                        >
                            <div className="h-48 sm:h-52 lg:h-56 overflow-hidden rounded-t-2xl">
                                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
                            </div>

                            <div className="p-5">
                                <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
                                    {cert.issuer}
                                </h3>
                                <p className="text-gray-600 text-sm mt-1">{cert.title}</p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {cert.skills.map((skill, i) => (
                                        <span key={i} className="px-3 py-1 text-xs bg-blue-50 text-blue-700 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Button to open PDF */}
                                <button
                                    className="mt-5 w-full py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                                    onClick={() => window.open(cert.pdfFile, '_blank')}
                                >
                                    View Certificate PDF
                                </button>

                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Pop-up Modal for Quick Preview */}
                <AnimatePresence>
                    {selectedCertificate && (
                        <motion.div
                            className="fixed inset-0 bg-black/50 flex justify-center items-center backdrop-blur-sm p-4 z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                initial={{ scale: 0.7 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.7 }}
                                transition={{ duration: 0.25 }}
                                className="bg-white rounded-xl p-6 max-w-lg w-full"
                            >
                                <h2 className="text-xl font-bold">{selectedCertificate.title}</h2>
                                <p className="text-gray-600">{selectedCertificate.issuer}</p>
                                <img src={selectedCertificate.image} alt="" className="mt-4 rounded-xl w-full" />

                                <div className="mt-3">
                                    <p className="font-semibold">Skills:</p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {selectedCertificate.skills.map((skill, i) => (
                                            <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-5 flex gap-3">
                                    <button
                                        className="flex-1 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90"
                                        onClick={() => {
                                            openPdf(selectedCertificate.pdfFile);
                                            setSelectedCertificate(null);
                                        }}
                                    >
                                        Open Full PDF
                                    </button>
                                    <button
                                        className="flex-1 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 duration-200"
                                        onClick={() => setSelectedCertificate(null)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Certificate;


