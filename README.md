# unsafe9's Tech Blog

🔗 https://unsafe9.github.io

## 🚀 Usage

### Requirements

- [Hugo Extended](https://gohugo.io/installation/)
- Git

### Local Developments

1. **Clone Repository**

```bash
git clone https://github.com/unsafe9/unsafe9.github.io.git
cd unsafe9.github.io
```

2. **Run Development Server**

```bash
hugo server -D
```

Browse `http://localhost:1313`

3. **Write New Post**

```bash
hugo new posts/my-new-post.md
```

Open the generated file(`content/posts/my-new-post.md`) and write the content.

4. **Build**

```bash
hugo
```

`public/` directory will be generated.

## ✍️ Post Writing Guide

### Front Matter

Add metadata to the top of the post:

```yaml
---
title: "Post Title"
date: 2025-01-20
draft: false # false: Public, true: Draft
tags: ["Tag1", "Tag2"]
categories: ["Category"]
description: "Post Description (SEO)"
toc: true # Auto generate table of contents
---
```

## 🎨 Customization

### Change Settings

`config.toml` file to change the site settings:

```toml
baseURL = "https://your-username.github.io/"
title = "Your Blog Title"

[params]
  author = "Your Name"
  description = "Your blog description"
```

### giscus Comment Settings

1. Create settings on [giscus.app](https://giscus.app/)
2. Update the `[params.giscus]` section in the `config.toml` file:

```toml
[params.giscus]
  repo = "username/repo"
  repoId = "YOUR_REPO_ID"
  category = "General"
  categoryId = "YOUR_CATEGORY_ID"
```

### Modify Style

`static/css/style.css` to modify the design.

## 🚢 Deployment

### GitHub Actions automatically deploy

`main` branch push, GitHub Actions automatically build and deploy.

### GitHub Pages Settings

1. GitHub Repository Settings → Pages
2. Source: "GitHub Actions" Select
3. Save

## 📝 Development Workflow

1. Run `hugo server -D` locally
2. Write markdown file in `content/posts/`
3. Preview and test locally
4. Git commit and push
5. GitHub Actions automatically deploy
