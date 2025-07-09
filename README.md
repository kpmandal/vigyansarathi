
Vigyan Sarathi - The Blog

![alt text](https://api.netlify.com/api/v1/badges/YOUR_NETLIFY_BADGE_ID/deploy-status)

Welcome to the official repository for the Vigyan Sarathi blog. This project is a content-driven website built to help Indian government job aspirants master the General Science section of their exams.

The site is built with a modern, headless architecture:

Framework: Next.js (for Static Site Generation and server-side features)

Headless CMS: Contentful (for all science notes and content management)

Styling: Tailwind CSS (for a modern, utility-first design)

Deployment: Netlify (for continuous, automated deployments from Git)

Live Demo

(Link to your deployed Netlify site will go here)

![alt text](https://www.netlify.com/img/deploy/button.svg)

Note: Clicking this button will create a new repository in your GitHub account, set it up on Netlify, and guide you through adding the necessary environment variables. You will need your Contentful keys ready.

Key Features

Content-Driven: All science notes, subjects, and special sections are managed entirely through the Contentful CMS, allowing for easy updates without touching code.

Blazing Fast: Built with Next.js using Static Site Generation (SSG) with Incremental Static Regeneration (ISR). Pages are pre-built for maximum performance and SEO.

Bilingual Ready: The Contentful model is configured to support both English and Hindi content for key fields.

Styled with Tailwind CSS: A clean, professional, and responsive design using the "Saraswati" theme.

SEO-Friendly: Next.js provides excellent search engine optimization out of the box.

Automated Deployments: Every git push to the main branch triggers an automatic build and deployment on Netlify. Content updates in Contentful can also trigger rebuilds via webhooks.

Getting Started

Follow these instructions to set up the project for local development.

Prerequisites

Node.js (v18 or later)

Git

A free Contentful account

1. Clone the Repository

First, clone this repository to your local machine.

Generated bash
git clone https://github.com/YOUR_GITHUB_USERNAME/vigyan-sarathi-blog.git
cd vigyan-sarathi-blog

2. Install Dependencies

Install all the required npm packages.

Generated bash
npm install
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Bash
IGNORE_WHEN_COPYING_END
3. Set Up Contentful

If you haven't already, log in to your Contentful space and ensure you have the following Content Models:

Subject (Fields: name)

Exam Spotlight (Fields: details)

Science Note (With fields for title, slug, content (Rich Text), etc., and a subject reference field linked to the Subject model).

4. Set Up Environment Variables

This project requires API keys to connect to Contentful.

Create a new file in the root of the project named .env.local.

Copy the contents of .env.example (or the block below) into it.

Generated env
# .env.local
# Get these values from your Contentful space under Settings -> API keys
CONTENTFUL_SPACE_ID="YOUR_SPACE_ID_HERE"
CONTENTFUL_ACCESS_TOKEN="YOUR_CONTENT_DELIVERY_API_TOKEN_HERE"
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Env
IGNORE_WHEN_COPYING_END

Replace the placeholder values with your actual keys from Contentful. The .env.local file is included in .gitignore and will not be committed to your repository.

5. Run the Development Server

You're all set! Start the local development server.

Generated bash
npm run dev
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Bash
IGNORE_WHEN_COPYING_END

Open http://localhost:3000 in your browser to see the result.

Deployment to Netlify

This repository is configured for instant deployment on Netlify.

Push your cloned repository to your own GitHub account.

Log in to Netlify and select "New site from Git".

Choose your repository.

Netlify will detect the Next.js settings automatically.

Crucially, go to Site settings > Build & deploy > Environment and add the same two environment variables you defined in your .env.local file:

CONTENTFUL_SPACE_ID

CONTENTFUL_ACCESS_TOKEN

Click "Deploy site".

Automatic Rebuilds on Content Change

To ensure your site updates when you publish new content in Contentful:

In Netlify, go to Site settings > Build & deploy > Build hooks.

Create a new build hook and copy the generated URL.

In Contentful, go to Settings > Webhooks.

Create a new webhook, paste the Netlify URL, and configure it to trigger on Entry events (Publish, Unpublish).
