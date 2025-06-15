"use client"

import { ExperienceItemProps } from '@/components/experience-item'

const experiences: ExperienceItemProps[] = [
  {
    logo: "/seatgeek-logo.webp",
    year: "2025",
    title: "Software Engineering Intern",
    company: "SeatGeek",
    description: 'Catalog Team at <a href="https://www.seatgeek.com/" target="_blank" rel="noopener noreferrer" className="link-highlight">SeatGeek</a>. Watching baseball games and broadway shows in NYC!'
  },
  {
    logo: "/shopify-logo.webp",
    year: "2025",
    title: "Software Engineering Intern",
    company: "Shopify",
    description: 'Working in <a href="https://www.shopify.com/ca" target="_blank" rel="noopener noreferrer" className="link-highlight">Shopify</a>\'s Security org. Led development of an AI-powered security intelligence platform with semantic searching and RAG features. Built and deployed an MCP server. Won an internal company hackathon.'
  },
  {
    logo: "/nest-logo.webp",
    year: "2024",
    title: "Software Engineering Intern",
    company: "Nest Wallet",
    description: 'Building the <a href="https://nestwallet.xyz/" target="_blank" rel="noopener noreferrer" className="link-highlight">best self-custodial wallet</a> for crypto traders. Integrated support for trading over 8 million tokens across multiple chains. Also developed onboarding, localization, and NFT transfer features.'
  },
  {
    logo: "/lockin-logo.webp",
    year: "2024",
    title: "iOS Software Developer Intern",
    company: "LockIn (prev. aSocial)",
    description: 'Encouraging Gen Z to reduce their screen time through competitions and rewards. Built automated reports that help users understand their usage and find ways to be more productive. <a href="https://apps.apple.com/ca/app/lock-in-focus-app-blocker/id6472232979" target="_blank" rel="noopener noreferrer" className="link-highlight">Download Here</a>.'
  }
];

export default experiences;
