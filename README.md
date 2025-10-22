# unsafe9.github.io

A clean, minimal tech blog built with Hugo.

## Built With

- **Hugo Extended** (v0.151.0+) - Static site generator
- **Custom unsafe9 Theme** - Fully designed and developed with Claude Code
- **GitHub Pages** - Automatic deployment on push to main

## How to Post

```bash
# Create a new post
hugo new posts/my-post-title.md

# Edit the file in content/posts/my-post-title.md
# Set draft: false when ready

# Preview locally
hugo server -D

# Push to main branch to deploy
git add .
git commit -m "Add new post"
git push
```

## Features

- Clean, minimal design
- Full-text search
- Tag system with tag cloud
- Giscus comments integration
- Responsive layout
- Syntax highlighting for code blocks
- Reading time estimation
- RSS feed
- Social links (GitHub, LinkedIn, Email)
- Fast page loads

## Local Development

```bash
# Clone and start the Hugo development server
git clone https://github.com/unsafe9/unsafe9.github.io.git
cd unsafe9.github.io
hugo server -D
```

Visit `http://localhost:1313` to preview.

## Configuration

Edit `config.toml` to customize site title, description, social links, and Giscus comments.

---

Built with [Hugo](https://gohugo.io/) and fully customized with [Claude Code](https://claude.com/claude-code)
