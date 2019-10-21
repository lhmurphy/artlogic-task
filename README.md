# SEO Toggle Task
Front-end development exercise  

## Technologies used:

* Vanilla JavaScript (ES6)
* HTML5
* CSS
* jQuery
* git
* gitHub

## Installation:

1. Clone or download the repo
1. Open the `index.html` in your browser of choice

## Overview:

<img width="1280" alt="Screenshot 2019-10-21 at 17 38 22" src="https://user-images.githubusercontent.com/38182323/67224745-cfe15b80-f429-11e9-9bb8-50f10eef5182.png">

#### Wireframe
I began with drawing out a basic wireframe to ensure correct semantic layout as I know this is important for accessibility.  

#### gitHub
I tried to maintain good practice in regularly pushing code to github to show the steps I made in my process.

#### Definition list
Building an FAQ page was new to me so I did some research around the best way to do this, I discovered the correct semantics were to include `dl` for 'definition list', `dt` for 'definition title' and `dd` for 'definition description'.

#### Responsive design
I completed responsive design for desktop, mobile and tablet. I wanted the smaller screens to have the hero and FAQ section at 100% width to make it much more user friendly. I also made the hero only 90% of the viewport height so that the user could clearly see there were questions in the section below and encourage them to scroll down.

#### Styling
I really enjoyed styling - I feel confident in my ability to copy so this was fun to try to get it pixel perfect.

## Challenges:

<img width="642" alt="Screenshot 2019-10-21 at 17 40 52" src="https://user-images.githubusercontent.com/38182323/67224835-fdc6a000-f429-11e9-9a3f-fce8b0c57900.png">

* jQuery `slideToggle`: At first I managed to get the FAQs to toggle up and down but it meant that all of the questions could be clicked on and opened and with all of them open it would break the layout of the page and go below the bottom. To prevent this I added a `slideUp()` which would close the previous FAQ before doing anything else.

* Positioning the background image: I has to research how to position a background image in a certain position, I found that starting the image in negative pixels helped to position the image in the way that the brief shows.

* Arrow icon toggling: I really enjoyed using the Font Awesome toolkit for the drop down arrows, it took a bit of research to figure out how to change the icon onClick but soon discovered how to do so with a `toggleClass()`.


## Future features:

#### Given more time I would...
* Continue with the responsive design, I noticed that some screen dimensions do not fit too well

* The user is currently unable to close an FAQ question that is already open so I would like to figure out how to close it onClick and not just to click on another FAQ to close the previous one.

* Add Ajax requests to pull through the JSON data, I started this and would love to get it working.
