# .dotfiles

My configuration files. Inspired by [**@wurli**](https://github.com/wurli/dotfiles)'s. This repo is mainly for my future self, in case I forget. Regardless of the OS, I store them in the `$HOME` directory (`$HOME/.dotfiles/`).

## Dotter

This repo uses `dotter` to manage configuration files via symlinks to `~/.config/`.

```bash
# Install
cargo install dotter

# Dry run to see what will be deployed
dotter deploy --dry-run --force

# Verbose mode (shows diffs)
dotter deploy -v

# Force deploy all configuration files
dotter deploy -fv
```

## Architecture

| Directory | Purpose |
|-----------|---------|
| `.dotter/` | Dotter configuration and deployment rules |
| `ghostty.conf` | Terminal emulator config |
| `yazi.toml` | File manager config |
| `claude-code/` | Claude Code AI assistant config (CLAUDE.md, commands, statusline) |
| `opencode/` | OpenCode config (oh-my-opencode.json) |
| `cursor/` | Cursor editor settings |
| `positron/` | Positron editor settings |
| `antigravity/` | Antigravity editor settings |
| `firefox/` | Arkenfox user overrides |

<!-- ## Windows
To start or add a new config, copy the original file into the `.dotfiles` directory. Then create a symbolic link to it in `$HOME`. On new machines, simply `git clone` this repository.

```powershell
# Navigate to your `.dotfiles` directory
cd $HOME\.dotfiles

# Create custom symlink function
function symlink ([String] $real, [String] $link) {
    if (Test-Path $real -pathType container) {
        # Create a hardlink for individual files
        cmd /c mklink /j $link.Replace("/", "\") $real.Replace("/", "\")
    } else {
        # Create a junction for folders
        cmd /c mklink /h $link.Replace("/", "\") $real.Replace("/", "\")
    }
}

# Create symlink!
symlink .gitconfig $HOME\.gitconfig
``` -->
