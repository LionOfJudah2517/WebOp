## Website Performance Optimization portfolio project

 Easiest way to view the file is to go to https://lionofjudah2517.github.io/WebOp/. Here it will be a live website and you can see the speed of the website.

### Optimization Steps
  There was a lot of tweaking that I had to do to get the site to the desired speed. I will lay out the most significant and what impacted the speed for the site.
####Part 1: Editing the main.js file
 This was the most crucial for getting the pizza page to 60 fps. When you measure on the timeline it gives you the location of where the JS might be "bottlenecking". I took that information and I saw what we learned in one of the videos. There was a loop that was causing issues and it was easier to batch it in the variable after the loop has ran it's course. This was the key to speeding up that page.

####Part 2: Image Optimization
I knew the images were quite large and they needed to be resized and optimized. I used 3 different resources to get to the ideal speed. I used Optimizilla, Compressor.io, and gulp imagemin plugin to get this minified and compressed to desired size. This help take away a lot of the loading speed.

####Part 3: JS Rendering
Rather then keep the perfmatters.js file as async. I found a plugin that would defer the JS as long as possible that helped get the speed up to desired result.

####Part 4: Inline CSS with Gulp
I was having a hard time getting the last few points that I needed for the project to pass. I found a plugin that helped inline the CSS so that none of it needed to be in separate files, therefore it doesn't take as long to fetch and load. That was the final step to get my score above 90 on pagespeed insights.
