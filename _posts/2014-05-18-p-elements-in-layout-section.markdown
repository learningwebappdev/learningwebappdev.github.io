---
layout: post
title:  "p elements in layout section"
date:   2014-05-18 19:40:00
categories: errata chapter3
author: Semmy
page: 66
---

In the "Layouts with Floats" section in Chapter 3, there is an
error with the HTML and CSS. In particular, the `p` elements that
are contained in the `nav` section should not be styled as part
of the float. To fix this, we can add a class to the floating element:

    <body>
      <main>
        <nav>
          <p><a href="link1">link1</a></p>
          <p><a href="link2">link2</a></p>
          <p><a href="link3">link3</a></p>
          <p><a href="link4">link4</a></p>
        </nav>    
    
        <p class="content">Lorem ipsum dolor sit amet, consectetur adip
           sed do eiusmod tempor incididunt ut labore et dolore magna a
           enim ad minim veniam, quis nostrud exercitation ullamco labo
           aliquip ex ea commodo consequat. Duis aute irure dolor in re
           in voluptate velit esse cillum dolore eu fugiat nulla pariat
        </p>
      </main>
    </body>

And then, in the associated CSS, specify that the styling should only apply to
the `content` paragraph.

    main {
        width: 500px;
        margin: auto;
        background: gray;
        overflow: auto;
    }
    
    nav {
        width: 100px;
        float: right;
    }
    
    p.content {
        margin: 0; /* remove the default margin on p */
        padding: 10px;
        float: left;
        width: 380px; /* 400 - 2*10 = 380 */
    }

Similar changes will apply to all CSS in this section.
    
Thanks to Marco Vaccari for discovering and reporting this issue!
