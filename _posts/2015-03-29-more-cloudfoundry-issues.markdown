---
layout: post
title:  "More CloudFoundry Issues"
date:   2015-03-29 14:40:00
categories: errata chapter8
author: Semmy
page: 234
printing: Second
---

CloudFoundry has changed significantly in version 6, and -- sadly --
it looks like it did not maintain compatibility with version 5 (which
we used for the book). This means some of the narrative in the book
won't work as described with the version of the cf client included
with node-dev-bootstrap (specifically, seeing logs and
troubleshooting).

To make matters worse, if we update to CloudFoundry 6, we lose the
interactive push command. You can see all of the differences enumerated
[in the CloudFoundry documentation](http://docs.cloudfoundry.org/devguide/installcf/whats-new-v6.html).

Fortunately, my friend Mike Hennessey has posted some instructions on
getting CloudFoundry 6 to work with the code examples in the book. To
start, you'll need to download and install the CloudFoundry 6 client
on your host machine. Instructions are
[here](http://docs.cloudfoundry.org/devguide/installcf/install-go-cli.html).

Next, you can find a sample manifest and some additional instructions
on [Mike's blog](http://blogs.uoregon.edu/cit382sched15w/cloud-foundry/cf-manifests/).

He also has some specific instructions for getting the tweet counter to work
[here](http://blogs.uoregon.edu/cit382sched15w/cloud-foundry/cf-tweet-counter)
and [here](http://blogs.uoregon.edu/cit382sched15w/cloud-foundry/add-redis-cloud).

Thanks to Mike Hennessey for all of his help in tracking down these
issues and providing solutions!