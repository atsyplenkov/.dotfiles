---
name: add-notebooklm-mcp
description: Use when adding NotebookLM MCP server to a project, or user wants to install notebooklm-mcp in current project
disable-model-invocation: true
---

# Add NotebookLM MCP to Project

## Overview

Adds the NotebookLM MCP server configuration to the current project's `.mcp.json` file. Creates the file if it doesn't exist, preserves existing MCP servers.

## When to Use

Use this when:
- User explicitly requests to add NotebookLM MCP to current project
- Project needs NotebookLM integration but lacks `.mcp.json`
- User command: `/add-notebooklm-mcp`

Do NOT use for:
- Global MCP installation (use `~/.claude.json`)
- Adding other MCP servers (create separate skill)

## Quick Reference

| Scenario | Action |
|----------|--------|
| `.mcp.json` exists, no notebooklm | Add notebooklm entry |
| `.mcp.json` exists, has notebooklm | Inform user, exit |
| `.mcp.json` missing | Create file with notebooklm |

## Implementation

```json
{
  "mcpServers": {
    "notebooklm": {
      "type": "stdio",
      "command": "npx",
      "args": ["notebooklm-mcp@latest"]
    }
  }
}
```

**Process:**
1. Check for `.mcp.json` in current directory
2. If exists: read, check for `notebooklm` key
3. If notebooklm exists: inform user, exit
4. If not: add configuration, preserve existing servers
5. If missing: create file with above structure
6. Report result

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Creating file in wrong directory | Only modify current project directory |
| Overwriting existing MCPs | Preserve all existing `mcpServers` entries |
| Invalid JSON | Use proper formatting with commas |
