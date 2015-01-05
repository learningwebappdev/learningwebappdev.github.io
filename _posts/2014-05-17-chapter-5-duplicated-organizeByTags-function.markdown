---
layout: post
title:  "duplicate organizeByTag function"
date:   2014-05-17 23:40:00
categories: errata chapter5
author: Semmy
page: 171
printing: First
---

On page 171, the test example has the `organizeByTag` function declared
and defined in two places. One definition should be removed.

In addition, the one defined inside the `main` function doesn't take the
`toDoObjects` parameter.

It's probably a better practice to define it in the `main` function instead
of outside of it (that way it's 'hidden' from the global scope), but since
this is just a test application to set up the functionality, it doesn't
really matter either way.

Thanks to [Ken Hommel](https://www.linkedin.com/pub/ken-hommel/1/2a/225) for pointing this out!
