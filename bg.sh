#!/bin/bash
ffmpeg -y -i bg.mp4 -vframes 1 bg.png
convert bg.png -fill black -colorize 85 -blur 0x8 bg-blur.png
convert bg.png -fill black -colorize 75 -blur 0x8 web/bg.png
