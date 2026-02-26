if status is-interactive
# Commands to run in interactive sessions can go here
end

# CODEX CLI ---
# For some reason I need to hardcode the home dir
set -Ux CODEX_HOME $HOME/.codex

# Tirith ---
# Protect catch ambigous characters
# See more https://github.com/sheeki03/tirith
tirith init --shell fish | source

# Aliases ---
## Default Claude Code
alias cc='claude --settings ~/.claude/settings.json $argv'
alias cc!='claude --settings ~/.claude/settings.json --permission-mode bypassPermissions $argv'

## Claude Code with Z.AI models
alias cz='claude --settings ~/.claude/settings-zai.json $argv'
alias cz!='claude --settings ~/.claude/settings-zai.json --permission-mode bypassPermissions $argv'

## Claude Code with Kimi models (via Ollama Cloud)
alias ck='claude --settings ~/.claude/settings-kimi.json $argv'
alias ck!='claude --settings ~/.claude/settings-kimi.json --permission-mode bypassPermissions $argv'

## ls on steroids
alias ll='ls -lha'

## Internet speed
alias csc='cloudflare-speed-cli'

## Codex
alias cx='codex $argv'
alias cx!='codex --full-auto $argv'

## Dolphin
alias dp='dolphin . >/dev/null 2>&1 &; disown'

# fzf ---
# Set up fzf key bindings
fzf --fish | source
