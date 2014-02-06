fb-tip-bookmarklet
==================

A bookmarklet based service to allow for users to tip dogecoins to each other without breaking facebook TOS

Tipping on facebook would be great to expose masses to tipping. But with the limits facebook API is putting in place it becomes hard to get it done.

I was thinking using a bookmarklet for this. A bookmarklet can operate outside the confines of facebook and yet access all the elements on the page, it can be made to auto insert the text to the comment box.

But more importantly the bookmarklet can call a tipbot server with the tipping info even before the post is sent. 

Another thing is to make the tippbot use bit.ly to return the url the user needs to click to get the coins and the same url can be used to let others signup to the tipping service.

with bit.ly or other url shortening service facebook would not be able to block links to a fixed domain either.

I wrote a small bookmarklet as a proof-of-concept. You can test it by going to the link bellow and drag the link within that page to your toolbar.

[Test Page](https://github.com/yardimli/fb-tip-bookmarklet/master/test.html)

Then open facebook waith for the page to finish loading click on the bookmark you just added and move the mouse around the page over the thumbnails of your friends.
