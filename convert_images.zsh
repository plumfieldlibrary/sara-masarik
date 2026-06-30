#!/usr/bin/env zsh
setopt nullglob
for file in ./public/*.{webp,jpg,jpeg,png}; do
  magick "$file" -quality 100 "${file%.*}.avif"
done
