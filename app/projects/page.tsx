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
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Lexden",
  description: "A collection of projects by Alex \"Lexden\" Schendel, including hardware and software work.",
};

// 1. Your Data Array (This replaces your hardcoded HTML)
// In the future, this could come from a database or CMS.
  const projectsData: Project[] = [
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
      title: "Microphone",
      description: "A custom microphone project (WIP).",
      imageUrl: "/images/microphone.jpg",
      tags: ["Hardware", "Audio"],
      linkUrl: "/projects/microphone",
      status: "In Progress",
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

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-neutral-100 mb-4">My Projects</h1>
        <p className="text-xl text-neutral-300 max-w-2xl">
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