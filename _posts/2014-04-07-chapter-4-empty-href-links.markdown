---
layout: post
title:  "Missing href attribute in links"
date:   2014-04-07 13:55:33
categories: errata chapter4
author: Semmy
page: 133
printing: First
---

In the Amazeriffic HTML example in Chapter 4, I created the tabs without `href`
attributes in the `<a>` tags. In other words, on page 133 the example looks
like this

    <div class="tabs">
      <a href=""><span class="active">Newest</span></a>
      <a href="">Oldest</a>
      <a href="">Add</a>
    </div>

In order to prevent the browser from reloading the page, there needs to be
something in the `href`. I prefer to use a `#`. So it should look like this:

    <div class="tabs">
      <a href="#"><span class="active">Newest</span></a>
      <a href="#">Oldest</a>
      <a href="#">Add</a>
    </div>

Thanks to Olusola Akapo for noticing this and reporting it!