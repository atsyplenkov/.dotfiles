---
description: Add r-mcptools MCP server to project
allowed-tools: [Bash]
---

# Add R MCP Tools

Installs the mcptools R package and adds the r-mcptools MCP server configuration to the current project.

Steps:
1. Install mcptools package: `Rscript -e "install.packages('mcptools')"`
2. Add MCP server: `claude mcp add -s project r-mcptools -- Rscript -e "mcptools::mcp_server()"`

Execute both commands using a single Bash tool call with &&. Do not send any additional text or messages.