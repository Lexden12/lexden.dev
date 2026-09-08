# lexden.dev

This is my [homepage](https://lexden.dev), created in [Next.js](https://nextjs.org) and bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Feel free to open an issue if you have any feedback or suggestions, I am not a web developer, so I would appreciate any feedback.

Please note that this is free and open-source, distributed under the [Apache License, Version 2.0](LICENSE). While you are free to modify and distribute this project, please remember to use proper attributions (see also [NOTICE](NOTICE) for third-party acknowledgements).

## Features

- **MDX content pages** — The site uses [MDX](https://mdxjs.com) for content pages, so Markdown and JSX can be mixed for authoring pages. Content lives next to its route (e.g. `app/about/content.mdx`) and is rendered by the co-located `page.tsx`.
- **Custom MDX components** — [mdx-components.tsx](mdx-components.tsx) provides custom components (such as a `<Video>` element) available inside MDX files.
- **Project cards** — The [Projects](/projects) page renders cards from a single source of truth in [`lib/projects.ts`](lib/projects.ts) using the [`ProjectCard`](components/ProjectCard.tsx) component.
- **Styling** — Styled with [Tailwind CSS v4](https://tailwindcss.com) (including `@tailwindcss/typography` for prose).
- **Type-safe** — Written in [TypeScript](https://www.typescriptlang.org) in strict mode.
- **CI** — A GitHub Actions workflow (`.github/workflows/ci.yml`) runs typechecking (`tsc --noEmit`), linting, and a production build on every push and pull request to `main`.

## Tech Stack

| Tool | Purpose |
| --- | --- |
| [Next.js 16](https://nextjs.org) (App Router) | Framework / rendering |
| [React 19](https://react.dev) | UI library |
| [TypeScript](https://www.typescriptlang.org) | Language |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling |
| [MDX](https://mdxjs.com) via [`@next/mdx`](https://nextjs.org/docs/app/building-your-application/configuring/mdx) | Content authoring |
| [ESLint](https://eslint.org) (`eslint-config-next`) | Linting |

## Project Structure

```
app/                    # App Router routes
  page.tsx              # Home page (/)
  content.mdx           # Home page content
  about/                # About page (/about)
  projects/             # Projects overview (/projects)
    website/            # Project page (/projects/website)
    battery/            # Project page (/projects/battery)
    cpu/                # Project page (/projects/cpu)
    airquality/         # Project page (/projects/airquality)
  trips/yellowstone/    # Trip page (/trips/yellowstone)
components/             # Shared React components (Navbar, Footer, ProjectCard)
lib/projects.ts         # Single source of truth for the project list
public/                 # Static assets (images, videos, favicons, ...)
mdx-components.tsx      # Custom components available in MDX files
next.config.ts          # Next.js config (MDX via @next/mdx)
```

Adding a new project: add an entry to `lib/projects.ts` and create an `app/projects/<slug>/` folder containing a `page.tsx` that imports a `content.mdx` (mirroring the existing project pages).

## Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server (pages are compiled in real time):

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Other Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimized production build in `.next` |
| `npm start` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | Typecheck without emitting files |

Copyright 2025 Alex "Lexden" Schendel
