# User settings.json location
Depending on your platform, the user settings and keybindings files are located here:

* Windows `%APPDATA%\Positron\User\settings.json`

* Linux `$HOME/.config/Positron/User/settings.json`

See [official docs](https://code.visualstudio.com/docs/configure/settings#_settings-file-locations) for more.

## Windows
In powershell, to navigate to the `%APPDATA%`, use env variable `$env:APPDATA`. Therefore, to create a symlink to the `keybindings.json` for example:

```powershell
# keybindings
symlink $HOME\keybindings.json $env:APPDATA\Positron\User\keybindings.json

# settings
symlink $HOME\settings.json $env:APPDATA\Positron\User\settings.json
```