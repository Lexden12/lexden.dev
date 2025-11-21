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
import React from "react";
import ExternalLink from "@/components/ExternalLink";

export default function About() {
    return (
        <main className="min-h-screen px-4 py-6 bg-neutral-900 text-neutral-100">
            <h1 className="text-3xl font-bold">Alex "Lexden" Schendel</h1>
            <div className="mt-4 max-w-prose text-neutral-300">
                <p>
                    Hello! My name is Alex and I am a Firmware Engineer by day and a gamer/DiYer
                    by night.
                </p>
                <p className="mt-2">
                    The projects page has a list of the projects I am working/have worked on.
                </p>
                <p className="mt-2">
                    This whole site is still very much a WIP, and being a firmware engineer who
                    is used to working in the backend low-level stuff, front-end web dev is
                    certainly outside of my wheelhouse, so please feel free to submit feedback
                    on this website's{' '}
                    <ExternalLink
                        href="https://github.com/Lexden12/lexden.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-indigo-400"
                    >
                        GitHub repo
                    </ExternalLink>
                    .
                </p>
            </div>
        </main>
    );
}
