---
layout: post
title:  "Amazeriffic Problems in Chapter 6"
date:   2014-06-07 12:40:00
categories: errata chapter6
author: Semmy
page: 202
---

Starting on page 202, there are a couple of issues with the description of setting up the server for Amazeriffic.

To start, I made the decision to change all of the server-side _app.js_ source files (which is the traditional name for an Express app's entry point) to _server.js_ so as to not cause confusion between the client _app.js_ and the server file. Unfortunately, it's still called _app.js_ in two places: pages 202 and 205. In other words, on those pages where it says to run the app with the command `node app.js`, it should actually say to run the command `node server.js`. The filenames are correct in the examples posted on Github.

There are a couple of related issues as well. If you're running into trouble getting the example to work, please also see these issues:

[Bug in Server Code](http://learningwebappdev.com/errata/chapter6/2014/04/12/chapter-6-bug-in-server.html)

[Express 4 Problems](http://learningwebappdev.com/errata/chapter6/2014/04/12/chapter-6-express-version-4.html)

These issues have been reported by several readers, and will be fixed in the first ebook update.
