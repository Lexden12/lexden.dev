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
import Image from "next/image";

export const metadata = {
    title: "Lexden.dev",
    description: "The home of Lexden",
};

export default function Home() {
    return (
        <main className="mx-auto p-0">
            <section className="w-full text-center py-6">
                <h1 className="prose text-3xl font-bold text-neutral-50 mx-auto inline-block">Welcome to Lexden</h1>
            </section>

            <section className="w-full">
                <div className="w-full">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-auto block rounded-md shadow"
                        aria-label="Sample local video"
                    >
                        {/* Place a video file at public/lexden.mp4 */}
                        <source src="/lexden2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>
        </main>
    );
}
