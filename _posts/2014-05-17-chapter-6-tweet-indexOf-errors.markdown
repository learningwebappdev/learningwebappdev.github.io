---
layout: post
title:  "tweet indexOf errors"
date:   2014-04-20 12:40:00
categories: errata chapter6
author: Semmy
page: 199
---

Starting on page 199 there are several errors involving the `tweet` object. Specifically
in code that is checking to see if a tweet's text contains a given string, you'll see
something like this:

    tweet.indexOf("awesome") > -1

Since tweet is an object, and not a string, this code should check the tweet's `text`
property instead:

    tweet.text.indexOf("awesome") > -1

Thanks to David Boles and [Nick Litwin](https://github.com/polynickglot) for reporting this!
