---
layout: post
title:  "missing line in makeTabActive"
date:   2014-04-20 23:41:00
categories: errata chapter4
author: Semmy
page: 136
---

On page 137, there's a missing line in the `makeTabActive` function.

Specifically, the function needs to empty the main content div so that
the new content can be added. The full function should look like this.

    var makeTabActive = function (tabNumber) {
        // construct the selector from the tabNumber
        var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
        $(".tabs span").removeClass("active");
        $(tabSelector).addClass("active");
        $("main .content").empty();        
    };

Thanks to Ken Hommel for reporting this!
