---
layout: post
title:  "Express 4 Problems"
date:   2014-04-12 16:39:00
categories: errata chapter6
author: Semmy
page: 206
printing: First
---

The latest version of Express (anything above 4.0.0) breaks some examples in
the book. This is easily remedied by installing a version below 4. Specifically,
anywhere the book says to type:

    npm install express

You can change it to

    npm install express@3

Which will install version 3. I'll try to find the specific issues this causes
and post a migration to express 4 guide soon.