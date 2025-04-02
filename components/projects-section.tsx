"use client"

import Link from "next/link"
import { ArrowRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import projects from "@/data/projects"
import socialLinks from "@/data/social-links"

export interface ProjectsSectionProps {
  customProjects?: typeof projects
}

export function ProjectsSection({
  customProjects
}: ProjectsSectionProps = {}) {
  const projectItems = customProjects || projects;
  const githubLink = socialLinks.find(link => link.label === "GitHub")?.href || "https://github.com/YashK2005";

  return (
    <section id="projects" className="py-12 md:py-20 relative z-10">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <div className="h-1 w-12 bg-blue-400 mb-16"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectItems.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              isVideo={project.isVideo}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
              demoLabel={project.demoLabel}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            asChild
            variant="outline"
            className="rounded-full group border-white/20 text-white hover:bg-white/10"
          >
            <Link href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              More Projects on GitHub
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
