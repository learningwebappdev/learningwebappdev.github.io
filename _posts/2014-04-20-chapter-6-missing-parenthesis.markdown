---
layout: post
title:  "Missing parenthesis"
date:   2014-04-20 12:40:00
categories: errata chapter6
author: Semmy
page: 194
printing: First
---

In the code example on page 194, there is a missing parenthesis at the end
of the line that looks like this

    app.use(express.static(__dirname + "/client");

Specifically, it should look like this.

    app.use(express.static(__dirname + "/client"));

Thanks to both [Nick Litwin](http://github.com/polynickglot) and David Boles
for reporting this issue!