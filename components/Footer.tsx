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

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 mt-12 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Alex "Lexden" Schendel — Built with Next.js
        </p>
        <p className="mt-1">
          <Link href="/" className="underline hover:text-neutral-200">
            Home
          </Link>{' '}
          •{' '}
          <a
            href="https://github.com/Lexden12/lexden.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-neutral-200"
          >
            Source
          </a>
        </p>
      </div>
    </footer>
  );
}
