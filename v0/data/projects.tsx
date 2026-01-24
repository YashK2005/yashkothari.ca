"use client"

import { ProjectCardProps } from '@/components/project-card'

const projects: ProjectCardProps[] = [
  {
    title: "Running Journal",
    description: "iOS app for tracking running workouts. Used by 1k athletes in ~70 countries.",
    imageUrl: "/running_journal.png",
    isVideo: false,
    githubUrl: "https://github.com/YashK2005/Running-Journal",
    demoUrl: "https://apps.apple.com/ca/app/running-journal/id6444382884",
    demoLabel: "Download"
  },
  {
    title: "Leukemia & Lymphoma Society",
    description: "Contributing to a team of engineers and designers to build a platform for matching cancer patients with volunteers.",
    imageUrl: "/blueprint.jpg",
    isVideo: false,
    githubUrl: "https://github.com/uwblueprint/llsc",
    demoUrl: "https://uwblueprint.org/",
    demoLabel: "Website"
  },
  {
    title: "LeResume",
    description: "Using AI to create optimized resumes and cover letters tailored to each job posting.",
    imageUrl: "/leresume.mp4",
    isVideo: true,
    githubUrl: "https://github.com/npjd/resumake",
    demoUrl: "https://www.leresume.ca/",
    demoLabel: "Website"
  },
  {
    title: "NBA Contract Predictor",
    description: "Predicting the salaries of NBA players using ML algorithms to determine the most underpaid and overpaid players in the league.",
    imageUrl: "/nbaContractPredictor.png",
    isVideo: false,
    githubUrl: "https://github.com/YashK2005/nbaContractPredictor",
    demoUrl: "https://nbacontractpredictor.onrender.com/",
    demoLabel: "Website"
  },
  {
    title: "ShoPacks",
    description: "Shopify Internal Hackathon Winner - Built a mini that gamifies e-commerce by turning Shop App products into collectible trading cards.",
    imageUrl: "/shopify-hackathon.png",
    isVideo: false,
    githubUrl: "https://github.com/YashK2005/shoPacks",
  }
];

export default projects;
