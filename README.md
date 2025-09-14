# .dotfiles
My configuration files. Inspired by [**@wurli**](https://github.com/wurli/dotfiles)'s. This repo is mainly for my future self, in case I forget. Regardless of the OS, I store them in the `$HOME` directory (`$HOME/.dotfiles/`).

### · `dotter`
This repo uses `dotter` to manage the configuration files. Install `dotter` from crates.io:
```bash
cargo install dotter
```
T
hen run `dotter deploy` to deploy the configuration files.
```bash
# Dry run to see what will be deployed
dotter deploy --dry-run --force
# Force deploy the configuration files
dotter deploy -fv
```

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