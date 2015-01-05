---
layout: post
title:  "Errors on Page 228"
date:   2014-03-23 13:55:33
categories: errata chapter7
author: Semmy
page: 228
printing: First
---

There are two minor errors in Chapter 7 on page 228. The first appears in the
first code example at the top of the page. Specifically, the reference to 
`Cards` should be lowercase. In other words, 

    Cards.forEach(function (card) {

should be

    cards.forEach(function (card) {

In addition, the example in the middle of the page is described as changing
"all of the cards that have the suit spades to hearts" when in reality it's
doing the opposite.

Thanks to [Douglas Eichelberger](https://www.linkedin.com/pub/douglas-eichelberger/11/614/722)
for reporting both of these!