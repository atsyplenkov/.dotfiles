# Dotfiles

Personal configuration files managed with `dotter`.

## Commands

```bash
# Dry run to see what will be deployed
dotter deploy --dry-run --force

# Verbose mode (shows diffs between before/after)
dotter deploy -v

# Extra verbose (specify -v up to 3 times)
dotter deploy -vvv

# Maximum verbosity with RUST_LOG
RUST_LOG=trace dotter deploy -vvv

# Force deploy all configuration files
dotter deploy -fv
```

## Architecture

| Directory | Purpose |
|-----------|---------|
| `.dotter/` | Dotter configuration and deployment rules |
| `ghostty.conf` | Terminal emulator config |
| `yazi.toml` | File manager config |
| `cursor/` | Cursor editor settings |
| `positron/` | Positron editor settings |
| `antigravity/` | Antigravity editor settings |
| `firefox/` | Arkenfox user overrides |
| `fish/` | Fish shell configuration, functions, and completions |
| `claude-code/` | Claude Code config, commands, and skills |

## Deployment

This repo uses **dotter** to symlink config files to `~/.config/`. Install via:
```bash
cargo install dotter
```

Edit `.dotter/global.toml` to add new files, then deploy.

## Tech Stack

Dotter (Rust), JSON configs, TOML
