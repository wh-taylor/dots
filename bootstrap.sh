#!/bin/sh

# Alacritty
ln -sfT ~/.dots/alacritty/.alacritty.yml ~/.alacritty.yml

# i3wm
ln -sfT ~/.dots/i3/config ~/.config/i3/config

# Zsh and PowerLevel10k
ln -sfT ~/.dots/zsh/.p10k.zsh ~/.p10k.zsh
ln -sfT ~/.dots/zsh/.zshrc ~/.zshrc

# VSCode
ln -sfT ~/.dots/vscode ~/.vscode

# Backgrounds
ln -sfT ~/.dots/bg ~/Pictures/Backgrounds

# Git
ln -sfT ~/.dots/git/dot.gitconfig ~/.gitconfig

# Polybar
ln -sfT ~/.dots/polybar/config.ini ~/.config/polybar/config.ini
ln -sfT ~/.dots/polybar/launch.sh ~/.config/polybar/launch.sh
