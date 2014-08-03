---
layout: post
title:  "toDos Object should be an Array"
date:   2014-08-03 14:40:00
categories: errata chapter6
author: Semmy
page: 205
---

In Chapter 6, we hard-code the _toDos_ items on the server-side. This should be an array, but
in the examples I've incorrectly made it an object. What this means is that in the variable
declarations of Chapter 6. In other words, the variable declaration section that looks like this:

    var express = require("express"),
        http = require("http"),
        app = express(),
        toDos = {
            // set up todo list here by copying
            // the content from todos.OLD.json
        };

should look like this instead:

    var express = require("express"),
        http = require("http"),
        app = express(),
        toDos = [
            // set up todo list here by copying
            // the content from todos.OLD.json
        ];


This code is repeated on page 207, so it needs to be fixed there as well.

Thanks to Matthew Schupack for catching this and emailing me about it!
