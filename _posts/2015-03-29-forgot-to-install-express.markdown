---
layout: post
title:  "forgot to install express"
date:   2015-03-29 14:40:00
categories: errata chapter6
author: Semmy
page: 201
printing: Second
---

Gregory Hill was kind enough to write me and point out that on page
201 in Chapter 6, we copy the Tweet Counter's `server.js` file into a
new location, but we never install express in that directory. If you
try to run the program as-is, you'll get an error. So make sure you
run the following command before running the server.

    $ npm install express@3

I've also included instructions on [how to use Express
4](http://learningwebappdev.com/errata/chapter6/2015/01/04/chapter-6-express-4-migration.html)
in your app if you're interested.
