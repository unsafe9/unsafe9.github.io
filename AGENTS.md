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

## 🔧 Development Commands

### Run Local Development Server
```bash
hugo server -D
```
- `-D` flag: Also display draft posts
- Access via browser at `http://localhost:1313`

### Build
```bash
hugo
```
- Generates static site in `public/` directory

## 📋 Guidelines for AI Agents

### Language Requirements

All text content MUST be written in English

### Pre-Commit Build Verification

**ALWAYS run `hugo` command before committing to verify the build:**

```bash
hugo
```

- This ensures all changes build successfully
- Check for any build errors or warnings
- Verify the output in `public/` directory
- **NEVER commit if the build fails**
- Fix any errors before proceeding with the commit

### File Modification Guidelines

- **NEVER MODIFY**: `public/` directory (build output)
- **MODIFY WITH CAUTION**: `config.toml`, `themes/` directory
- **Creating New Posts**: Always create in `content/posts/` directory
- **Style Modifications**: Add custom styles in `static/css/style.css`
- **Layout Modifications**: Override theme layouts in `layouts/` directory

## 🛠️ Requirements

- **Hugo Extended** version required
- Git installation required

## 📖 Reference Documentation

See the following documentation using Context7 when you need:
- Hugo
- Hugo PaperMod
- Markdown
