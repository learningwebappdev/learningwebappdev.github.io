---
layout: post
title:  "fixed vs relative font-size keywords"
date:   2015-01-04 14:40:00
categories: errata chapter2
author: Semmy
page: 75
printing: Second
---

On page 75, there is a discussion about relative vs. fixed font sizes. Unfortunately,
I got some of the facts wrong here.

It turns out that `xx-large` and `x-large` (along with `xx-small` and `x-small`) are
absolute-size keywords, not relative-size. So changing the base font-size will not
change elements that are styled with those keywords.

On the other hand, `larger` and `smaller` are relative font-size keywords, and
work as described. The specifics can be found [here in the W3C's documentation]
(http://www.w3.org/TR/CSS21/fonts.html#font-size-props).


Github user [bazzaxiv](https://github.com/bazzaxiv) was kind enough to report
this and provide the reference. Thanks so much!
