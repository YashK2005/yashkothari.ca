"use client"

export interface NavLink {
  href: string
  label: string
}

const navLinks: NavLink[] = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" }
];

export default navLinks;
