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
import type { Project } from "@/components/ProjectCard";

// Single source of truth for project data.
// Previously this list was copy-pasted into components/Navbar.tsx
// and app/projects/content.mdx — edit it here only.
export const projects: Project[] = [
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
    title: "DiY USB-PD Battery Bank",
    description: "A DiY, repairable/replaceable battery bank.",
    imageUrl: "/images/battery.jpg",
    tags: ["Li-Ion", "Battery"],
    linkUrl: "/projects/battery",
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