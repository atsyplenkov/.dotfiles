# .dotfiles
My configuration files. Inspired by [**@wurli**](https://github.com/wurli/dotfiles). This repository is mainly for my future self, in case I forget. Regardless of the operating system, I store them in the home directory (`$HOME\.dotfiles` or `~/.dotfiles`).

## Windows
To start or add a new config, copy the original file into the `.dotfiles` directory. Then create a symbolic link to it in `$HOME`. On new machines, simply `git clone` this repository and create the symbolic links.

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
```

## Linux
TBA