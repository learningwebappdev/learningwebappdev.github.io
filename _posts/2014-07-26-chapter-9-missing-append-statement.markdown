---
layout: post
title:  "Missing append statement"
date:   2014-07-26 14:40:00
categories: errata chapter9
author: Semmy
page: 252
printing: First
---

In the example code at the bottom of page 252, we're missing the line that appends the
newly created tab to the tabs section of the DOM. To fix this, we simply need to modify
the last few lines of the function so it looks like this:

            $("main .content").append($content);
            return false;
        });

        // add aElement to the tabs
        $("main .tabs").append($aElement);
    });


Thanks to [James FitzGibbon](https://github.com/jf647) for reporting this issue!
