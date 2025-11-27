import React from 'react'
import ExperienceCard from '../component/ExperienceCard'
import EducationCard from '../component/EducationCard'
import { EDUCATION, EXPERIENCE } from '../../data/SiteData'


export default function Experience() {
    return (
        <section className="py-16 container">
            <h1 className="text-3xl font-bold">Experience & Education</h1>


            <div className="mt-6 grid md:grid-cols-2 gap-6">
                {EXPERIENCE.map(e => <ExperienceCard key={e.title} exp={e} />)}
            </div>


            <h2 className="mt-10 text-2xl font-semibold">Education</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {EDUCATION.map(ed => <EducationCard key={ed.title} edu={ed} />)}
            </div>
        </section>
    )
}