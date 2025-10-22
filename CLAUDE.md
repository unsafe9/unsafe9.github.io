# CLAUDE.md

## Project Overview
Hugo v0.151.0+extended static blog with custom "unsafe9" theme. Clean, minimal design for technical content with search and responsive layout.

**Critical:** This project uses Hugo v0.146.0+ layout structure:
- Partials in `_partials/` (with underscore)
- NO `_default` folder
- Home page is `home.html` not `index.html`

## Setup Commands
- `hugo server` - Start dev server
- `hugo server -D` - Include drafts
- `hugo --gc --minify` - Production build
- `hugo new posts/my-post.md` - New post
- `hugo config` - View configuration

## Code Style
- **Templates**: Go HTML syntax in `themes/unsafe9/layouts/`
- **Partials**: `themes/unsafe9/layouts/_partials/` (underscore required)
- **Layouts**: `home.html`, `single.html`, `list.html` (NO `_default` folder)
- **CSS**: Custom properties in `themes/unsafe9/assets/css/main.css`
- **Content**: Markdown in `content/posts/`

## Testing Instructions
- Run `hugo server` before committing
- Test responsive design and search functionality
- Verify internal links work

## PR Guidelines
- Format: `[type] Description` (e.g., `[feature] Add dark mode`, `[fix] Date formatting`)
- Test with `hugo server` before committing
- Update README.md for project changes

---

## Hugo Template Quick Reference

**Common Patterns:**
```go-html-template
{{ .Title }}                              # Page title
{{ .Content }}                            # Full content
{{ .RelPermalink }}                       # Relative URL
{{ site.RegularPages }}                   # All pages
{{ range where site.RegularPages "Section" "posts" }}
  {{ .Render "view_card" }}
{{ end }}
```

**Partials:**
```go-html-template
{{ partial "header.html" . }}             # Call partial
{{ with .Params.author }}By {{ . }}{{ end }}
```

**Taxonomies:**
```go-html-template
{{ range .GetTerms "tags" }}
  <a href="{{ .RelPermalink }}">{{ .LinkTitle }}</a>
{{ end }}
```

## Context7 Integration
For Hugo docs: Use Context7 with `/gohugoio/hugodocs` (9.1 trust, 2151+ snippets)

**Example prompts:**
- "Use Context7 to research Hugo's related content feature"
- "Check Context7 for Hugo image processing and implement responsive images"
- "Research Hugo shortcodes using Context7 and create custom callout boxes"

## Key Configuration
See config.toml

## Common Tasks

**Add new feature:**
1. Use Context7 for Hugo docs if needed
2. Modify templates in `themes/unsafe9/layouts/`
3. Use Chrome DevTools to check it looks good
4. Test with `hugo server` (If the server is already running, skip this step)
5. Commit with `[feature]` prefix

**Fix template issues:**
1. Check layout structure in Project Overview
2. Verify partials use `_partials/` path
3. Ensure no `_default` folder references

**Create content:**
1. `hugo new posts/title.md`
2. Edit front matter (title, date, tags)
3. Write content in markdown
4. Preview with `hugo server -D`
