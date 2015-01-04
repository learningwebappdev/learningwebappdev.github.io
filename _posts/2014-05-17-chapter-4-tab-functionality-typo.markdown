---
layout: post
title:  "minor error in tabs"
date:   2014-05-17 19:40:00
categories: errata chapter4
author: Semmy
page: 135
printing: First
---

On page 135, there's a minor error in the section called 'Creating the tab functionality.'

When building the functionality for the third tab, we have to make sure to select the
third child of the tabs. Specifically, the code that looks like this:

    $(".tabs a:nth-child(3)").on("click", function () {
        $(".tabs span").removeClass("active");
        $(".tabs a:nth-child(2) span").addClass("active");
        $("main .content").empty();
        return false;
    });

Should look like this:

    $(".tabs a:nth-child(3)").on("click", function () {
        $(".tabs span").removeClass("active");
        $(".tabs a:nth-child(3) span").addClass("active");
        $("main .content").empty();
        return false;
    });

Thanks to Gilbert Desport and Ken Hommel for reporting this!
