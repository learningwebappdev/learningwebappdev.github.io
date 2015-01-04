---
layout: post
title:  "Refactoring the code using a loop"
date:   2014-03-16 13:55:33
categories: errata chapter4
author: Semmy
page: 136
printing: First
---

In an earlier iteration of the book, I had a discussion of the JavaScript `this`
operator in Chapter 4, but I removed it because I thought it wasn't really
necessary for beginners and it wasn't essential to the narrative.

Unfortunately, this change led to an (embarrassing) error in one of the examples
in Chapter 4. The example appears on page 136 in this snippet of code.

    var tabNumber;

    for (tabNumber = 1; tabNumber <= 3; tabNumber++) {
        var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
        $(tabSelector).on("click", function () {
            $(".tabs span").removeClass("active");
            $(tabSelector).addClass("active");
            return false;
        });
    }

The end result of this example is that tab 3 is _always_ active, no matter which
tab is clicked on. It's actually very easy to fix (and appeared this way in an
earlier draft). Simply change

    $(tabSelector).addClass("active");

to

    $(this).addClass("active");


You can think of the `this` operator as simply a pointer to the current DOM
element that is clicked on in the click handler. There are lots of gotchas with
the `this` operator in JavaScript, however, so I decided to avoid it when
introducing basic concepts to beginners.

Explaining why the code above fails is a little trickier without first
explaining closures. The easiest way to describe what's happening here
is that there's actually only one `tabSelector` variable, and it's shared among
all the click handlers. Therefore when it is updated, it is updated in all 3
click handlers. Since it ends at the third tab, all click handlers activate
the third tab.

In general, it's best to avoid creating functions inside normal `for` loops.
If the function depends on the index of the loop (`tabNumber` in this case)
it will almost inevitably behave incorrectly.

This was reported by an eagle-eyed reader named Gilbert Desport. Thanks,
Gilbert!