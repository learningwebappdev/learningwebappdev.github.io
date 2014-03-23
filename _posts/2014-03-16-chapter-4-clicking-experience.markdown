---
layout: post
title:  "A better clicking experience?"
date:   2014-03-16 13:55:33
categories: errata chapter4
author: Semmy
page: 106
---

There is a section in Chapter 4 called 'A better clicking experience.' This
section shouldn't be there. In a previous revision, the button object in the
example was a `span` element, which meant that the cursor wasn't a pointer
by default.

Once we changed it to a `button` element, changing the cursor was no longer
necessary.

In addition, there is no `.comment_input` element, instead it's a
`.comment-input` element (note the dash instead of the underscore).

Thanks to [Michael Rasmussen](http://twitter.com/MichaelRpdx) for reporting this!
