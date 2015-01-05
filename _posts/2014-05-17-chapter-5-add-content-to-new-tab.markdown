---
layout: post
title:  "Missing content in new tab"
date:   2014-05-17 13:50:00
categories: errata chapter5
author: Semmy
page: 175
printing: First
---

In Chapter 5, we add a new tab to the Amazeriffic app. In the code on page
175, we forgot to create the content at the end of the `else-if` statement.

To fix this, we'll add a line that looks similar to this, at the end of the
`else-if` statement, right before the closing curly brace.

    $content = $("<div>").append($inputLabel)
                         .append($input)
                         .append($tagLabel)
                         .append($tagInput)
                         .append($button);


Thanks to David Boles for reporting this!
