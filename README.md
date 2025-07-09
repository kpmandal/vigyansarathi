# Vigyan Sarathi - The Blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_NETLIFY_BADGE_ID/deploy-status)](https://app.netlify.com/sites/YOUR_NETLIFY_SITE_NAME/deploys)

Welcome to the official repository for the **Vigyan Sarathi** blog. This project is a content-driven website built to help Indian government job aspirants master the General Science section of their exams.

The site is built with a modern, headless architecture for maximum performance, scalability, and ease of content management.

*   **Framework**: [Next.js](https://nextjs.org/)
*   **Headless CMS**: [Contentful](https://www.contentful.com/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Deployment**: [Netlify](https://www.netlify.com/)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/YOUR_GITHUB_USERNAME/vigyan-sarathi-blog)

> **Note**: Clicking the button above will create a new repository for you, deploy it to Netlify, and guide you through adding the necessary Contentful API keys.

---

## Table of Contents

- [Key Features](#key-features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Set Up Contentful](#3-set-up-contentful)
  - [4. Set Up Environment Variables](#4-set-up-environment-variables)
  - [5. Run the Development Server](#5-run-the-development-server)
- [Deployment to Netlify](#deployment-to-netlify)
- [Automatic Rebuilds (Webhook)](#automatic-rebuilds-webhook)

---

## Key Features

*   🚀 **Blazing Fast**: Built with Next.js using Static Site Generation (SSG) with Incremental Static Regeneration (ISR). Pages are pre-built for maximum performance and SEO.
*   **✍️ Content-Driven**: All science notes, subjects, and special sections are managed entirely through the Contentful CMS, allowing for easy updates without touching code.
*   **🌐 Bilingual Ready**: The Contentful model is configured to support both English and Hindi content for key fields.
*   **🎨 Styled with Tailwind CSS**: A clean, professional, and responsive design using the custom "Saraswati" theme.
*   **✨ Custom Components**: Includes special components like the `Exam Spotlight` box, which can be embedded directly into post content from the CMS.
*   **🤖 Automated Deployments**: Every `git push` to the `main` branch triggers an automatic build and deployment on Netlify.

## Getting Started

Follow these instructions to set up the project for local development.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or later recommended)
*   [Git](https://git-scm.com/)
*   A free [Contentful](https://www.contentful.com/get-started/) account

### 1. Clone the Repository

First, clone this repository to your local machine.

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/vigyan-sarathi-blog.git
cd vigyan-sarathi-blog
### 2. Install Dependencies

Install all the required npm packages. This will also generate your `package-lock.json` file.

```bash
npm install
