---
layout: post
title:  "duplicate variable declaration"
date:   2014-04-20 20:40:00
categories: errata chapter4
author: Semmy
page: 108
---

On page 108, the variable `$new_comment` is inadvertently declared with in two
`var` statements. It should only be declared above the `if` statement. The corrected
code looks like this:

    var $new_comment;

    if ($(".comment-input input").val() !== "") {
        $new_comment = $("<p>").text($(".comment-input input").val());
        $(".comments").append($new_comment);
        $(".comment-input input").val("");
    }

Thanks to Ken Hommel for reporting this.
