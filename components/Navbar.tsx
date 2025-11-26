/*
Copyright 2025 Alex "Lexden" Schendel

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

"use client"; // This directive is required for components that use state (useState)

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ProjectCard, { Project } from "@/components/ProjectCard";

const Navbar = () => {
  // State to manage the mobile menu open/close status
  const [isOpen, setIsOpen] = useState(false);
  // Separate state for desktop projects popover
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const router = useRouter();

  // Navigation items array (easy to update later)
  const navLinks = [
    { name: "Home", href: "/" },
    // Projects will be a dropdown handled below
    { name: "About", href: "/about" },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "This site!",
      description: "The website you are looking at — built with Next.js and Tailwind.",
      imageUrl: "/images/site.jpg",
      tags: ["Next.js", "Tailwind"],
      linkUrl: "/projects/website",
      githubUrl: "https://github.com/Lexden12/lexden.dev",
      status: "Completed",
    },
    {
      id: 2,
      title: 'DiY USB-PD Battery Bank',
      description: 'A DiY, repairable/replaceable battery bank.',
      imageUrl: '/images/battery.jpg',
      tags: ['Li-Ion', 'Battery'],
      linkUrl: '/projects/battery',
      status: 'In Progress',
    },
    {
      id: 3,
      title: "CPU",
      description: "A hobby CPU implementation and tooling.",
      imageUrl: "/images/cpu.jpg",
      tags: ["Hardware", "Verilog"],
      linkUrl: "/projects/cpu",
      status: "In Progress",
    },
    {
      id: 4,
      title: "Air Quality Meter",
      description: "Environmental sensing project for home use.",
      imageUrl: "/images/airquality.jpg",
      tags: ["Sensors", "Embedded"],
      linkUrl: "/projects/airquality",
      status: "In Progress",
    },
  ];

  const popoverRef = useRef<HTMLDivElement | null>(null);
  const popoverButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as Node;
      // If click is inside popover, ignore
      if (popoverRef.current && popoverRef.current.contains(target)) return;
      // If click is on the popover button, ignore
      if (popoverButtonRef.current && popoverButtonRef.current.contains(target as Node)) return;
      // Otherwise close popover
      setIsPopoverOpen(false);
    }

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false);
    }

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  return (
    <nav className="bg-neutral-900 text-neutral-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand / Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-wider hover:text-neutral-300 transition">
              LEXDEN
            </Link>
          </div>

          {/* Desktop Menu (Hidden on mobile) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-800 hover:text-neutral-100 transition duration-150">Home</Link>

              {/* Projects popover showing cards */}
              <div className="relative">
                <button
                  ref={popoverButtonRef}
                  onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-800 hover:text-neutral-100 transition duration-150"
                  aria-haspopup="true"
                  aria-expanded={isPopoverOpen}
                >
                  Projects
                </button>
                {isPopoverOpen && (
                  <div ref={popoverRef} className="fixed left-1/2 transform -translate-x-1/2 top-[72px] w-[95%] max-w-7xl rounded-md shadow-2xl bg-neutral-100 border border-neutral-200 z-[9999] p-6 text-neutral-900">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Featured Projects</h3>
                      <span className="text-sm text-neutral-600">Showing {projects.length} items</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {projects.map((p) => (
                        <ProjectCard key={p.id} project={p} onNavigate={() => setIsPopoverOpen(false)} />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-800 hover:text-neutral-100 transition duration-150">About</Link>
            </div>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon changes based on state (Menu vs X) */}
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Conditional Rendering) */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-800 hover:text-neutral-100">Home</Link>
            <div className="border-t border-neutral-800 my-2" />
            {projects.map((p) => (
              <div
                key={p.id}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') { router.push(p.linkUrl ?? '#'); setIsOpen(false); } }}
                onClick={() => { router.push(p.linkUrl ?? '#'); setIsOpen(false); }}
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-800 hover:text-neutral-100 cursor-pointer"
              >
                <div className="w-12 h-8 bg-neutral-700 rounded overflow-hidden flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{p.title}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${p.status === 'Completed' ? 'bg-green-600 text-white' : 'bg-yellow-500 text-neutral-900'}`}>
                      {p.status}
                    </span>
                  </div>
                  <div className="text-xs text-neutral-400">{p.tags.join(', ')}</div>
                </div>

                {/* Optional repo link: opens in new tab, stops propagation so it doesn't trigger row navigation */}
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => { e.stopPropagation(); }}
                    aria-label={`Open ${p.title} repository`}
                    className="ml-2 p-1 rounded hover:bg-neutral-800"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 text-neutral-200" fill="currentColor" aria-hidden>
                      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.29 3.438 9.77 8.207 11.36.6.11.82-.26.82-.58 0-.29-.01-1.04-.016-2.04-3.338.73-4.042-1.61-4.042-1.61-.546-1.39-1.333-1.76-1.333-1.76-1.09-.75.082-.74.082-.74 1.205.085 1.84 1.24 1.84 1.24 1.07 1.84 2.807 1.31 3.492 1 .108-.78.418-1.31.762-1.61-2.665-.304-5.467-1.33-5.467-5.92 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.12 3.176.77.84 1.232 1.91 1.232 3.22 0 4.6-2.807 5.613-5.48 5.91.43.37.823 1.1.823 2.22 0 1.6-.015 2.88-.015 3.27 0 .32.216.7.825.58C20.565 22.27 24 17.79 24 12.5 24 5.87 18.627.5 12 .5z" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
            <div className="border-t border-neutral-800 my-2" />
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-800 hover:text-neutral-100">About</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;