import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 relative z-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} Yash Kothari. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/YashK2005" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full w-9 h-9 text-white hover:text-white hover:bg-white/10"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/yashkothari7/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full w-9 h-9 text-white hover:text-white hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:yashkoth7@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full w-9 h-9 text-white hover:text-white hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}; 
