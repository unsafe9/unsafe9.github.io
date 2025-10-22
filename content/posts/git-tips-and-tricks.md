---
title: "Git Tips and Tricks for Developers"
date: 2025-10-18T10:00:00+09:00
draft: false
description: "Productivity boosting Git commands"
tags: ["git", "productivity", "tools"]
---

Master these Git commands to boost your productivity.

## Useful Aliases

```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.st status
git config --global alias.last 'log -1 HEAD'
```

## Interactive Rebase

Clean up your commit history before merging:

```bash
git rebase -i HEAD~3
```

## Stash with Message

```bash
git stash save "work in progress on feature X"
```

## Cherry-pick

Apply specific commits from another branch:

```bash
git cherry-pick <commit-hash>
```

These commands will save you time every day!
