---
layout: post
title:  "client should be redisClient"
date:   2014-04-20 18:40:00
categories: errata chapter7
author: Semmy
page: 219
---

Starting on page 219 there are several code snippets that declare a `redisClient` variable but
then use the variable `client` in the actual code. That is an error.

All references to `client` in the Redis code
examples should be changed to `redisClient` (or, the variable declaration should be changed
to be just `client`).

Thanks to [Dan Candela](https://github.com/dcandela) for reporting this!
