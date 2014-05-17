---
layout: post
title:  "indexOf off-by-one error"
date:   2014-04-20 12:18:00
categories: errata chapter7
author: Semmy
page: 219
---

There is a slight error in the code that determines if a tweet contains the
word `awesome`. Specifically, on pages 219 and 221, the code that says

    if (tweet.text.indexOf("awesome") >= -1) {

should not have the equals. In other words, it should read

    if (tweet.text.indexOf("awesome") > -1) {

If `indexOf` returns -1, then it means it didn't find the word. This is
actually correct in the code found in our Github repository.

This was caught by an incredibly sharp reader named [Nick Litwin](http://github.com/polynickglot)!

Thanks, Nick!
