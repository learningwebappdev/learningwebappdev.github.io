---
layout: post
title:  "keyCode example error"
date:   2014-03-23 13:00:33
categories: errata chapter4
author: Semmy
page: 108
printing: First
---

In page 108 of Chapter 4, there is an example that looks like this.

    $(".comment-input input").on("keypress", function (event) {
        if (keyCode === 13) {
            console.log("this is the keyCode " + event.keyCode);
        }
    });

The `keyCode` variable in the `if` statement should be accessed via the `event`
object.

    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            console.log("this is the keyCode " + event.keyCode);
        }
    });

Thanks to [Micheal Beatty](https://twitter.com/mwbeatty) for reporting this!
