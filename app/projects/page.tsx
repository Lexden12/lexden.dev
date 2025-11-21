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

import ProjectCard, { Project } from "@/components/ProjectCard";

// 1. Your Data Array (This replaces your hardcoded HTML)
// In the future, this could come from a database or CMS.
const projectsData: Project[] = [
  {
    id: 1,
    title: "CPU Air Quality Meter",
    description: "A custom hardware monitor that displays local air quality metrics alongside CPU stats. Built using Arduino and C++.",
    imageUrl: "/images/cpu-meter.jpg", // You need to put an image here in public/ folder
    tags: ["C++", "Arduino", "Hardware"],
    status: "Completed",
    githubUrl: "https://github.com/Lexden12/cpu-meter", // Replace with real link
  },
  {
    id: 2,
    title: "Lexden.dev Portfolio",
    description: "The site you are looking at! A modern portfolio built to showcase my work and learn the Next.js ecosystem.",
    imageUrl: "/images/portfolio.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "In Progress",
    githubUrl: "https://github.com/Lexden12/lexden.dev",
  },
  {
    id: 3,
    title: "Microphone Integration",
    description: "Software interface for high-fidelity audio capture and processing.",
    imageUrl: "/images/mic-project.jpg", 
    tags: ["Audio", "Software"],
    status: "In Progress",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Here is a collection of my work in software development and hardware engineering.
        </p>
      </div>

      {/* The Grid Layout */}
      {/* 1 col on mobile, 2 on medium screens, 3 on large screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
    </div>
  );
}