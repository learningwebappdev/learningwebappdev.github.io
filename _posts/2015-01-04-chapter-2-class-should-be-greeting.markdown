---
layout: post
title:  "class should be greeting"
date:   2015-01-04 14:40:00
categories: errata chapter2
author: Semmy
page: 64
printing: Second
---

In the example at the bottom of page 64, the CSS specifies the following:

    p.selected {
        color: green;
    }

But in the above HTML, the class is specified as `greeting`, not `selected`.
The class should be the same in the HTML and the CSS. So the CSS should be
changed to:

    p.greeting {
        color: green;
    }

Thanks to Kasper Meyer for pointing this out!
