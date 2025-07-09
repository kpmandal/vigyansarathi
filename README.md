# Vigyan Sarathi - The Blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_NETLIFY_BADGE_ID/deploy-status)](https://app.netlify.com/sites/YOUR_NETLIFY_SITE_NAME/deploys)

Welcome to the official repository for the **Vigyan Sarathi** blog. This project is a content-driven website built to help Indian government job aspirants master the General Science section of their exams.

The site is built with a modern, headless architecture:

*   **Framework**: [Next.js](https://nextjs.org/) (for Static Site Generation and server-side features)
*   **Headless CMS**: [Contentful](https://www.contentful.com/) (for all science notes and content management)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (for a modern, utility-first design)
*   **Deployment**: [Netlify](https://www.netlify.com/) (for continuous, automated deployments from Git)

### Live Demo

**(Link to your deployed Netlify site will go here)**

---

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/YOUR_GITHUB_USERNAME/vigyan-sarathi-blog)

> **Note**: Clicking this button will create a new repository in your GitHub account, set it up on Netlify, and guide you through adding the necessary environment variables. You will need your Contentful keys ready.

---

## Key Features

*   **Content-Driven**: All science notes, subjects, and special sections are managed entirely through the Contentful CMS, allowing for easy updates without touching code.
*   **Blazing Fast**: Built with Next.js using Static Site Generation (SSG) with Incremental Static Regeneration (ISR). Pages are pre-built for maximum performance and SEO.
*   **Bilingual Ready**: The Contentful model is configured to support both English and Hindi content for key fields.
*   **Styled with Tailwind CSS**: A clean, professional, and responsive design using the "Saraswati" theme.
*   **SEO-Friendly**: Next.js provides excellent search engine optimization out of the box.
*   **Automated Deployments**: Every `git push` to the `main` branch triggers an automatic build and deployment on Netlify. Content updates in Contentful can also trigger rebuilds via webhooks.

## Getting Started

Follow these instructions to set up the project for local development.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or later)
*   [Git](https://git-scm.com/)
*   A free [Contentful](https://www.contentful.com/get-started/) account

### 1. Clone the Repository

First, clone this repository to your local machine.

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/vigyan-sarathi-blog.git
cd vigyan-sarathi-blog
```

### 2. Install Dependencies

Install all the required npm packages.

```bash
npm install
```

### 3. Set Up Contentful

If you haven't already, log in to your Contentful space and ensure you have the following **Content Models**:
1.  `Subject` (Fields: `name`)
2.  `Exam Spotlight` (Fields: `details`)
3.  `Science Note` (With fields for `title`, `slug`, `content` (Rich Text), etc., and a `subject` reference field linked to the `Subject` model).

### 4. Set Up Environment Variables

This project requires API keys to connect to Contentful.

1.  Create a new file in the root of the project named `.env.local`.
2.  Copy the contents of `.env.example` (or the block below) into it.

```env
# .env.local
# Get these values from your Contentful space under Settings -> API keys
CONTENTFUL_SPACE_ID="YOUR_SPACE_ID_HERE"
CONTENTFUL_ACCESS_TOKEN="YOUR_CONTENT_DELIVERY_API_TOKEN_HERE"
```
3.  Replace the placeholder values with your actual keys from Contentful. The `.env.local` file is included in `.gitignore` and will not be committed to your repository.

### 5. Run the Development Server

You're all set! Start the local development server.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment to Netlify

This repository is configured for instant deployment on Netlify.

1.  Push your cloned repository to your own GitHub account.
2.  Log in to Netlify and select "New site from Git".
3.  Choose your repository.
4.  Netlify will detect the Next.js settings automatically.
5.  **Crucially**, go to `Site settings > Build & deploy > Environment` and add the same two environment variables you defined in your `.env.local` file:
    *   `CONTENTFUL_SPACE_ID`
    *   `CONTENTFUL_ACCESS_TOKEN`
6.  Click "Deploy site".

### Automatic Rebuilds on Content Change

To ensure your site updates when you publish new content in Contentful:
1.  In Netlify, go to `Site settings > Build & deploy > Build hooks`.
2.  Create a new build hook and copy the generated URL.
3.  In Contentful, go to `Settings > Webhooks`.
4.  Create a new webhook, paste the Netlify URL, and configure it to trigger on `Entry` events (Publish, Unpublish).
