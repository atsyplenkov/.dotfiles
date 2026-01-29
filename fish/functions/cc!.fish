function cc! --wraps=cc --description 'Claude Code with bypassed permissions'
    command claude --permission-mode bypassPermissions $argv
end
