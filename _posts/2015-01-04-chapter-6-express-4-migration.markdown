---
layout: post
title:  "Migrating Examples to Express 4"
date:   2015-01-04 14:40:00
categories: errata chapter6
author: Semmy
page: 206
printing: Second
---

I previously [wrote](http://learningwebappdev.com/errata/chapter6/2014/04/12/chapter-6-express-version-4.html)
that several examples in the book don't work with the latest version of
Express.js. It turns out that getting the examples up and running in
Express 4 isn't really too difficult.

Alex Koutmos writes:

>I found some good information here regarding Express 3->4 migration: [http://scotch.io/bar-talk/expressjs-4-0-new-features-and-upgrading-from-3-0](http://scotch.io/bar-talk/expressjs-4-0-new-features-and-upgrading-from-3-0)

> And to specifically fix the issue in the `server.js` file, I did the following:
>
> 1. 'npm install body-parser' in the project directory
> 2. I then added 'bodyParser = require("body-parser")' in my server.js
> 3. Lastly, instead of 'app.use(express.urlencoded())' I did 'app.use(bodyParser.urlencoded({"extended" : "true"}))'

I tried this out and it seemed to work pretty well! I'll update the examples soon,
but in the meantime feel free to use Alex's instructions to get up and running
with the latest version of Express!

Thanks, Alex!

