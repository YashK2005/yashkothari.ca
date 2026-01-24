"use client"

export interface NavLink {
  href: string
  label: string
}

const navLinks: NavLink[] = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export default navLinks;
