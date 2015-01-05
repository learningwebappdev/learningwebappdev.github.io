---
layout: post
title:  "Twitter API Changes"
date:   2014-06-07 14:40:00
categories: errata chapter6
author: Semmy
page: 196
printing: First
---

On page 196, we set up `ntwitter` to use our Twitter API keys. Twitter has recently changed the name of the _Consumer key_ and _Consumer secret_ to _API key_ and _API secret_, respectively. They also refer to the _Access token key_ as simply an _Access token_ now.

This doesn't change the code you send into `ntwitter`, however -- it just means that your `credentials.json` file should look something like this:

    {
        "consumer_key": "your app's API key here",
        "consumer_secret": "your app's API secret here",
        "access_token_key": "your app's Access token here",
        "access_token_secret": "your app's Access token secret here"
    }


Thanks to [Ken Hommel](https://www.linkedin.com/pub/ken-hommel/1/2a/225) for reporting this change to me!
