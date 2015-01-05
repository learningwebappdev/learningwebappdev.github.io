---
layout: post
title:  "Incorrect ls command"
date:   2014-06-07 12:40:00
categories: errata chapter6
author: Semmy
page: 197
printing: First
---

On page 197, after installing the ntwitter module, I type `ls node_modules`. This won't work. The `node_modules` directory is actually one directory above, in the `app` directory.

This is because npm installs modules in the same directory as the closest `package.json` file, and since we didn't create a `package.json` file in the `Twitter` directory, it installs it one directory above where there is a `package.json` file.

Thanks to [Ken Hommel](https://www.linkedin.com/pub/ken-hommel/1/2a/225) for finding this!
