# AGENTS

This document contains essential information that AI agents need to know when working on this Hugo blog project.

## 📚 Project Overview

- **Project Type**: Personal tech blog based on Hugo static site generator
- **Theme**: PaperMod
- **Deployment**: GitHub Pages (automated deployment via GitHub Actions)
- **Site URL**: https://unsafe9.github.io

## 🏗️ Project Structure

```
/
├── config.toml              # Hugo site configuration file
├── content/                 # Content files
│   ├── posts/              # Blog posts (Markdown files)
│   ├── about.md            # About page
│   └── search.md           # Search page
├── layouts/                 # Custom layout overrides
│   └── partials/
│       └── comments.html   # Comment system
├── static/                  # Static files (images, CSS, etc.)
├── public/                  # Build output (ignored by Git)
├── themes/PaperMod/        # PaperMod theme
└── archetypes/             # New content templates
```

## ✍️ Content Writing Rules

### Creating a New Post

```bash
hugo new posts/post-name.md
```

The generated file will be located at `content/posts/post-name.md`.

### Front Matter Structure

Every post must include the following Front Matter:

```yaml
---
title: "Post Title"
date: 2025-01-20
draft: false              # false: public, true: draft
tags: ["Tag1", "Tag2"]
categories: ["Category"]
description: "Post description (for SEO)"
toc: true                 # Auto-generate table of contents
---
```

## 🔧 Development Guidelines

- Run local development server: `hugo server -D`
- Access via browser at `http://localhost:1313`
- Build: `hugo`
- See documentations using Context7: `Hugo`, `Hugo PaperMod`, `Markdown`

## 📋 Code Guidelines

- All text (code, comments, documents, etc.) **MUST** be written in English
- Run the build command before committing to verify the build
- Don't modify `public/` directory (it's build output)
- Don't modify `themes/` directory (it's theme submodules)
- Always create new posts in `content/posts/` directory
- Add custom styles in `static/css/style.css`
- Override theme layouts in `layouts/` directory
