// Contact.jsx
import React from 'react'
import ContactForm from '../component/ContactForm'
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20">
            <div className="container mx-auto px-4 sm:px-6">

                {/* Contact Form Container */}
                <div className="max-w-2xl mx-auto">
                    <ContactForm />
                </div>

                {/* Additional Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-12"
                >
                </motion.div>
            </div>
        </section>
    )
}

