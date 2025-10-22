# Tech Blog

A clean, minimal Hugo static website built for tech blogging and deployed on GitHub Pages.

## Features

- ✅ Clean & minimal design
- ✅ Post search functionality
- ✅ Tag system with sidebar tag cloud
- ✅ RSS feed
- ✅ Giscus comments support (configurable)
- ✅ Reading time calculation
- ✅ Responsive design
- ✅ Social icons (GitHub, LinkedIn, Email)
- ✅ Fast and optimized

## Quick Start

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) (v0.112.0 or later)
- Git

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/unsafe9/unsafe9.github.io.git
cd unsafe9.github.io
```

2. Run the development server:
```bash
hugo server -D
```

3. Visit `http://localhost:1313` to view your site

### Creating a New Post

```bash
hugo new posts/my-new-post.md
```

Edit the generated file in `content/posts/my-new-post.md` and set `draft: false` when ready to publish.

## Configuration

Edit `config.toml` to customize your site:

### Site Information
```toml
baseURL = 'https://unsafe9.github.io/'
title = 'Your Blog Title'
```

### Profile & Social Links
```toml
[params]
  description = 'Your blog description'
  author = 'Your Name'
  profileIcon = '/images/profile.png'

  [params.social]
    github = 'https://github.com/yourusername'
    linkedin = 'https://linkedin.com/in/yourprofile'
    email = 'mailto:your@email.com'
```

### Enable Giscus Comments

1. Visit [giscus.app](https://giscus.app) to generate your configuration
2. Add to `config.toml`:
```toml
[params.giscus]
  repo = 'your-username/your-repo'
  repoId = 'your-repo-id'
  category = 'General'
  categoryId = 'your-category-id'
  mapping = 'pathname'
  theme = 'light'
```

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch using GitHub Actions.

### Manual Deployment

```bash
hugo --gc --minify
```

The built site will be in the `public/` directory.

## Theme Structure

```
themes/unsafe9/
├── layouts/
│   ├── _default/
│   │   ├── baseof.html      # Base template
│   │   ├── list.html        # List pages
│   │   ├── single.html      # Single post
│   │   └── index.json       # Search index
│   ├── partials/
│   │   ├── head.html        # Meta tags
│   │   ├── header.html      # Site header
│   │   ├── footer.html      # Site footer
│   │   ├── post-card.html   # Post preview card
│   │   ├── sidebar-tags.html # Tag sidebar
│   │   ├── social-icons.html # Social icons
│   │   └── comments.html    # Giscus comments
│   └── index.html           # Home page
├── assets/
│   ├── css/
│   │   └── main.css         # Styles
│   └── js/
│       └── search.js        # Search functionality
└── static/
```

## License

MIT

## Credits

Built with [Hugo](https://gohugo.io/)
