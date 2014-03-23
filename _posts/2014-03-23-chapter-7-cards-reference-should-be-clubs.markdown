---
layout: post
title:  "'cards' reference should be 'clubs'"
date:   2014-03-23 3:10:33
categories: errata chapter7
author: Semmy
page: 223
---

In the example at the bottom of page 223, there is a reference to `cards` that should be `clubs`.
Specifically,

    ... cards.push({"rank":rank, "suit":"clubs"})

should actually be

    ... clubs.push({"rank":rank, "suit":"clubs"})
    
Thanks to [Douglas Eichelberger](https://www.linkedin.com/pub/douglas-eichelberger/11/614/722)
for reporting this!