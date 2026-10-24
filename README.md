# RemoteJobs

A remote jobs board built with Next.js 16, TypeScript and Tailwind CSS. Search and filter remote software jobs, open a job for the full details, and save the ones you like.

**Live site:** https://remotejobs-liard.vercel.app

## Features

- Search by title, company, category or tag
- Filter by category and job type
- Search and filters stored in the URL, so results can be shared and bookmarked
- Pagination (10 jobs per page)
- Job detail page with tags, salary when available, and a sanitized description
- Save jobs with a client component and localStorage, plus a Saved page
- Loading skeletons, an error page with retry, and a styled 404
- Installable PWA with a service worker and an offline fallback page
- SEO: page titles, Open Graph metadata, sitemap.xml and robots.txt
- Lighthouse (mobile): Performance 99, Accessibility 100, Best Practices 100, SEO 100

## Tech stack

- Next.js 16 (App Router, server components, caching)
- TypeScript
- Tailwind CSS
- sanitize-html, to clean job descriptions before rendering

## Data source

Jobs come from the [Remotive](https://remotive.com) API. Listings are delayed by 24 hours, and every job links back to its page on Remotive. The data is cached and refreshed about every 6 hours to respect Remotive's request limits. If the API is unavailable, the app falls back to a saved sample in `data/jobs.sample.json`.

## Run it locally

    git clone https://github.com/Haez0004/remotejobs.git
    cd remotejobs
    npm install
    npm run dev

Then open http://localhost:3000.

The repo includes an `.npmrc` with `legacy-peer-deps=true`, because `eslint-config-next` is on an older version than Next.js 16 and npm would otherwise stop on a peer dependency conflict.

## Environment variable

`NEXT_PUBLIC_SITE_URL` is optional locally and defaults to `http://localhost:3000`. On Vercel, set it to the live URL with no trailing slash. It is used for the sitemap, robots.txt and social preview metadata.

## Project structure

    app/            pages, layouts, sitemap, robots, loading and error states
    components/     Navbar, Footer, JobCard, SaveButton, SavedList, JobsSkeleton
    lib/jobs.ts     data layer: fetch, cache and fallback
    lib/saved.ts    saved jobs stored in localStorage
    data/           sample jobs used as a fallback

## Credit

Job data provided by [Remotive](https://remotive.com). Built by Haez.
