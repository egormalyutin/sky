#!/bin/bash

[ -f ~/.xinitrc ] && mv ~/.xinitrc ~/.xinitrc.bak
ln -s ~/sky/xinitrc ~/.xinitrc

[ -f ~/.xmonad ] && mv ~/.xmonad ~/.xmonad.bak
ln -s ~/sky/xmonad ~/.xmonad
