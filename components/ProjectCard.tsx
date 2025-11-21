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
import Link from "next/link";

// 1. Define the shape of a Project object (Type Safety)
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[]; // e.g., ["Node.js", "C++", "Hardware"]
  linkUrl?: string; // Optional: link to live demo
  githubUrl?: string; // Optional: link to code
  status: "Completed" | "In Progress";
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-neutral-900 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col min-h-[18rem]">
      
      {/* Image Section (use plain img to avoid Image layout issues) */}
      <div className="relative w-full bg-neutral-700 flex items-center justify-center overflow-hidden" style={{height: '12rem'}}>
        {project.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-neutral-600 flex items-center justify-center text-neutral-200">No image</div>
        )}

        {/* Status Badge */}
        <div className="absolute top-2 right-2">
          <span className={`text-xs font-bold px-2 py-1 rounded-full ${
            project.status === "Completed" 
              ? "bg-green-600 text-green-50" 
              : "bg-yellow-600 text-neutral-900"
          }`}>
            {project.status}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-neutral-50 mb-2">{project.title}</h3>
        <p className="text-neutral-300 text-sm mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags (Pills) */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-neutral-700 text-neutral-200 text-xs rounded-md font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          {project.linkUrl && (
            <Link href={project.linkUrl} className="flex-1 bg-blue-600 text-white text-center py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
              View Project
            </Link>
          )}
          {project.githubUrl && (
            <Link href={project.githubUrl} className="flex-1 bg-neutral-700 text-white text-center py-2 rounded-md text-sm font-medium hover:bg-neutral-600 transition">
              GitHub
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;