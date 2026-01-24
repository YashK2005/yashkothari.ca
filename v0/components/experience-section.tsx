"use client"

import { ExperienceItem } from "@/components/experience-item"
import experiences from "@/data/experiences"

export interface ExperienceSectionProps {
  customExperiences?: typeof experiences
}

export function ExperienceSection({ 
  customExperiences 
}: ExperienceSectionProps = {}) {
  const experienceItems = customExperiences || experiences;

  return (
    <section id="experience" className="py-12 md:py-20 relative z-10">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        <div className="h-1 w-12 bg-blue-400 mb-16"></div>

        <div className="max-w-3xl mx-auto space-y-16">
          {experienceItems.map((exp, index) => (
            <ExperienceItem
              key={`exp-${index}`}
              logo={exp.logo}
              year={exp.year}
              title={exp.title}
              company={exp.company}
              description={exp.description}
              companyUrl={exp.companyUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
