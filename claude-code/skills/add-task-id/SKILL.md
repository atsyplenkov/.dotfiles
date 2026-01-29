---
name: add-task-id
description: Use when user wants to add CLAUDE_CODE_TASK_LIST_ID to .claude/settings.json for persistent task list sharing across Claude Code sessions
disable-model-invocation: true
---

# Add Task List ID to Project

## Overview

Adds `CLAUDE_CODE_TASK_LIST_ID` to the current project's `.claude/settings.json` file. This enables persistent task lists that can be shared across multiple Claude Code sessions. Uses the sanitized directory name as the task list ID.

## When to Use

Use this when:
- User explicitly runs `/add-task-id`
- Setting up task list sharing for a project
- Starting work on a new project that needs persistent tasks

Do NOT use for:
- Global task list configuration (use `~/.claude/settings.json`)
- Modifying other environment variables
- Setting up task lists for multiple projects at once

## Quick Reference

| Scenario | Action |
|----------|--------|
| `.claude/settings.json` exists, has `env` | Merge `CLAUDE_CODE_TASK_LIST_ID` into existing `env` |
| `.claude/settings.json` exists, no `env` | Add `env` section with the task list ID |
| `.claude/settings.json` missing | Create minimal file with `env` section |
| `.claude/` directory missing | Create directory, then create settings.json |

**Sanitization Rules:**
- Convert to lowercase
- Replace spaces and non-alphanumeric characters with underscores
- Example: `My Project-2026` → `my_project_2026`

## Implementation

**Target File Structure:**
```json
{
  "env": {
    "CLAUDE_CODE_TASK_LIST_ID": "<sanitized-directory-name>"
  }
}
```

**Process:**
1. Get current working directory name
2. Sanitize the name (lowercase, replace non-alphanumerics with underscores)
3. Ensure `.claude/` directory exists (create if needed)
4. Check if `.claude/settings.json` exists
5. If exists: read file, merge or add `env.CLAUDE_CODE_TASK_LIST_ID`
6. If missing: create new file with minimal structure
7. Write updated JSON back to file
8. Report success with file contents and next steps

**Example Output:**
```
Added CLAUDE_CODE_TASK_LIST_ID to .claude/settings.json

Task list ID: playground

File contents:
{
  "env": {
    "CLAUDE_CODE_TASK_LIST_ID": "playground"
  }
}

Next steps:
- Restart Claude to apply the setting
- Verify with: claude config get env CLAUDE_CODE_TASK_LIST_ID
```

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Creating file in wrong directory | Only modify `.claude/` in current project |
| Overwriting existing `env` variables | Always merge, never replace entire `env` object |
| Not sanitizing directory name | Always apply sanitization rules |
| Forgetting to create `.claude/` directory | Ensure directory exists before creating file |
