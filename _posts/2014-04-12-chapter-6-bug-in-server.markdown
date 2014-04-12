---
layout: post
title:  "Bug in Server Code"
date:   2014-04-12 16:42:00
categories: errata chapter6
author: Semmy
page: 205
---

On page 205, the Express server that serves up `todos.json` is missing a slash.

Specifically, the line that looks like

    app.get("todos.json", function (req, res) {

should look like this

    app.get("/todos.json", function (req, res) {

Thanks to [Dan Candela](https://github.com/dcandela) for finding this and reporting it!
