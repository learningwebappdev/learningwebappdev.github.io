---
layout: post
title:  "spans should be buttons"
date:   2014-04-20 13:40:00
categories: errata chapter5
author: Semmy
page: 174
---

There are a couple of instance on pagees 174-175 where code that looks
like this

    $button = $("<span>").text("+");

should look like this

    $button = $("<button>").text("+");

These errors are left over from an earlier iteration of the Amazeriffic
code.

Thanks to David Boles for finding these errors and reporting them.
