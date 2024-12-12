# Frontend Mentor - Interactive comments section solution

This is a solution to the [Interactive comments section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview
This is my solution to this interactive comments section challenge, i was able to get the design looking closely as possible and at the same time making it responsive for all screen sizes. I used the popular ReactJs library coupled with my deep knowledge of html and css. 

The challenge is basically a typical comments section that allows a user to type in comments, of course edit and delete previous comments and users can also reply to comments made by other users as well. The challenge is as challenging as possible, every step of the development process poses new challenge that allows me to think deep and wide and also make research on solving each problem as they presents themselves. 

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, Read, Update, and Delete comments and replies
- Upvote and downvote comments
- **Bonus**: save the current state in the browser that persists when the browser is refreshed.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Sass](https://sass-lang.com/) - Css Preprocessor

### What I learned
- I learned to use the javascript local storage to store comments so it persists even when the browser is refreshed. Using the block of code below, i was able to set the comments with the key "COMMENTS" 

```Javascript
  useEffect(() => {
    localStorage.setItem("COMMENTS", JSON.stringify(comments));
  }, [comments])
 ``` 
And using the block of code below, I was able to get the comments from local storage to display for the user

```Javascript
const [comments, setComments] = useState((commentsInfo) => {
    const localValue = localStorage.getItem("COMMENTS");
    if(localValue == null) return [];
    return JSON.parse(localValue);
  });
```
- I also learned to import svg icons directly into my react components for convenient styling. 
```Javascript
    import {ReactComponent as IconReply} from '../../assets/images/icon-reply.svg'    
```
After importing the icons like that, i could easily change the color for the hover and active states using the css fill attribute.

### Continued development
for future developments, i would like to create a profile section for each user that displays basic information about the user once their name or profile picture is clicked.

### Useful resources



## Author

- Fullname - [Oludare Abdulazeez Ajadi]
- Frontend Mentor - [@Abdulazeez782](https://www.frontendmentor.io/profile/Abdulazeez782)
- Twitter - [@ajadii_](https://x.com/ajadii_)


