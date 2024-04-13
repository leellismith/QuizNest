<h1 align="center">QuizNest</h1>

<h2 align="center"> A Quiz Website</h2>

<h2 align="center">Milestone Project 2 - Lee Smith</h2>

![Am I Responsive Image](readme-docs/testing/amiresponsive%20-%20P2.JPG)


## <p align='center'>[QuizNest Live Site](https://leellismith.github.io/QuizNest/)

## <p align='center'>[QuizNest Repository](https://github.com/leellismith/QuizNest)

# UXD

# Purpose of the Project

I have decided to create a general knowledge quiz that users can come to the website and test their knowledge.

I am aiming to create a website that feels up to date and streamlined which will incude a play buttom which will send to to the quiz and give users 10 questions once the quiz is finished it will send the user to the end page which will allow them to save the users highscore to the local storage then the user will then have a option to either play again or go back to the home screen, where they will find a highscore button where they will be able to see their top scores.

The website is designed to test the users knowledge.

# User Stories

* As a user, I would like to be able to visit and play a quiz.
* As a user, I wouuld like to see highscores of the quiz.
* As a user, I would like to being able to take the quiz with ease.
* As a user, I would like to see the answer if I got a question wrong.
* As a user, I would like to website to look good.
* As a user, I would like to be able to submit my score and view it.

## Steps to be taken

1. Research websites.
2. Sketch up designs.
3. Create wireframes designs.
4. find mixed content that works together (Colour Scheme, Font Styles and Background).
5. Find how the content will work together.
6. Design Website.
7. Create Website (Using API, HE, Animated background and local storage.)
8. Test website.
9. Deploy Website.

# Features

* __Background Image__
  > The animated background was selected to give the website a look of excitment.

* __Play Button__
  > On the home screen you will locate a play button which will take you straight to the game.

* __Highscore Button__
  > Under the Play button you will also locate a Highscore button which will take you to the highscore page which highscores are stored using local storage.

* __Quiz Game__
  > Once you have clicked of the play button, you will be sent straight to the game which will included 10 questions of a random selection from a open API.
  > If a question is answered correct the selected answer will turn green.
  >If a question is answered incorrect the selected answer will turn red but the correct answer will show in green.

* __End Page__
  >When the last question is the quiz is answered, you will be sent to the last page.

* __Save Button__
  > On the last page you will be able to enter a username and save the score to local storage. Once entered you will be sent back to the home page to either play again or view highscores.

* __Play Again Button__
  > If you are unhappy with you score you will be able to press the Play again button and this will send you to a new quiz.

* __Home Button__
  > The home button will send you back to the home page.

* __Footer__
      
  >The footer of the page will include links to social media websites

## Future Features

* Login Option.
* Server Storage.
* Leaderboard Page.
* More Quiz Type Option.
* To Select More Than 10 Questions.
* To Select Difficulty.


# Typography and Color Scheme

The Colour Scheme will include of HEX colours - 

* `#FFFCF2` - White
* `#CCC5B9` - Grey 
* `#252422` - Dark Grey
* `#EB5E28` - Orange

These colours work well together and will make the website clear and visually appealing.

# Wireframes

## Mobile Wireframe

![Mobile Wireframe](readme-docs/wireframes/Mobile%20Wireframe%20-%20P2.JPG)

## Tablet Wireframe

![Mobile Wireframe](readme-docs/wireframes/Tablet%20Wireframe%20-%20P2.JPG)

## Desktop Wireframe

![Mobile Wireframe](readme-docs/wireframes/Desktop%20Wireframe%20-%20P2.JPG)

# Technology
* __HTML__
* __CSS__
* __Hover.css__
* __FlexBox__
* __Font Awesome__
* __Google Fonts__
* __Git__
* __GitHub__
* __Figma__
* __vantajs__
* __jsdelivr__


# Testing

## Code Validation

### __W3 Validator__

#### __Home Page__

![Home Page Validation](readme-docs/testing/W3V%20Home%20Page%20-%20P2.JPG)

#### __Game Page__

![Game Page Validation](readme-docs/testing/W3V%20Game%20Page%20-%20P2.JPG)

#### __End Page__

![End Page Validation](readme-docs/testing/W3V%20End%20Page%20-%20P2.JPG)

#### __Highscore Page__

![Highscore Page Validation](readme-docs/testing/W3V%20Highscore%20Page%20-%20P2.JPG)

#### __CSS Validation__

![CSS Validation](readme-docs/testing/CSS%20Validation%20-%20P2.JPG)

## __Lighthouse Testing__

### __Home Page Testing__

![Home Page Testing](readme-docs/testing/Lighthouse%20test%20index%20-%20P2.JPG)
___
### __Game Testing__

![Game Page Testing](readme-docs/testing/Lighthouse%20test%20game%20-%20P2.JPG)
___
### __End Page Testing__

![Submit Page Testing](readme-docs/testing/Lighthouse%20test%20end%20-%20P2.JPG)
___
### __Highscore PageTesting__

![Highscore Page Testing](readme-docs/testing/Lighthouse%20test%20highscore%20-%20P2.JPG)

## __Jshint Testing__

### __Game Page__

![Game Jshint Testing](readme-docs/testing/Game%20jshint%20-%20P2.JPG)
___
### __End Page__

![End Page Jshint Testing](readme-docs/testing/End%20jshint%20-%20P2.JPG)
___
### __Highscore Page__

![Highscore Jshint Testing](readme-docs/testing/Highscore%20jshint%20-%20P2.JPG)

# Test Cases

## User Experience 

### Home Page

    When the user first enters the website they will see the animated background and the QuizNest <h1> tag at the center of the page.
    
    Below the header the user will find a Play button and and Highscore button.




### Game Page

    Once the play button has been selected they will then enter the quiz game.

    The user will received a question from the API used and have a selection of 4 answers.
    If the user answers correctly the selected box will turn green. If the user answers incorrectly 
    the box will turn red and the correct answer will show up as green.

    The user will have a total of 10 questions to answer.


### End Page

    Once the quiz is finished you will be redirected to the End page of the site.

    Here you will be able to save your score to a local drive. If you do this you will be redirected to the index.html page, to look at your Hichscore or just play again.

    There is also a play again button to give the user another chance to do better or there is a home button for the user to go back to the home page.


### Highscore Page

    When the user has submitted their score they will be able to view this in the Highscore.html page.

    Here the user will be able to view up to top 5 scoring scores.

# Responsivenes Testing

| Case Testing Responsivenes | Result |
  |---       | ---       |
  | Quiz responsivenes at max-width: 600px | Passed |
  | Quiz responsivenes at max-width: 1400px | Passed |
  | Font responsivenes at max-width: 600px | Passed |
  

# User Testing

| Users | Results | Fixed Issues |
|--- |--- |--- |
| First User | Found issue with the Github link would overlap on smaller screens with larger questions. | Fixed issued by adding Media Query. |
| Second User | No Issues Found | N/A |
| Third User | No Issues Found | N/A |
| Fourth User | No Issues Found | N/A |
| Fifth User | No Issues Found | N/A |

# Manual Testing

    I used manual testing in the devlopment of this project. I used this to look into every feature and functionality to ensure it was working correctly. The hands on approach allowed me to ensure that this project would meet the requirement while uncover any potential issues straight away. 


# Fixed Bugs

    Fixed a bug with the score. The score would be added up correctly but when viewed in the highscore page, it would show a correctly random score. I fixed this issue by console logging each section but couldn't not find the issue after doing some research i found that using submit sometimes can change what you are asking it do it so I changed the save from a submit to a button and this has seems to work.
---
    Fixed bug with the API questions and answers where they where bringing in unwanted characters on to the page which made the page look unreadable. I fixed this by added .replace() to each unwanted characters and adding the correct character. After doing this I was still having issues with some text showing these unwanted characters so I spoke with one of my friend Chris Parry who is a software developer who advised me to use https://cdn.jsdelivr.net/npm/he@1.2.0/he.min.js and added that into my code instead of manaual doing it myself. After implementing the CDN the issue did fix.

### Supported Screens and Browsers

| Screens | Supported |
|---|---|
| Phone | Yes
| Tablet | Yes |
| Laptop | Yes |
| Desktop | Yes |
---
Browsers | Supported|
|---| ---|
| Google Chrome | Yes |
| Safari | Yes |
| Firefox | Yes |
| Mircosoft Edge | Yes |
---

## Deployment

## Github Pages

__The Site was deployed via GitHub Pages.__

>1. Go to GitHub.
>2. Find QuizNest repository or [Click Here](https://github.com/leellismith/QuizNest).
>3. Go to settings [Click Here](https://github.com/leellismith/QuizNest/settings).
>4. On the left hand side of the General tab click on Pages [Cllck Here](https://github.com/leellismith/QuizNest/settings/pages).
>5. In Build and deployment, select Deploy from a branch.
>6. Then In branch select the Main tab and the /(Root) tab.
>7. Then click save and wait for the deployment to go live.

---

## Gitpod.io Deployment

>1. Go to github.
>2. Find QuizNest repository or [Click Here](https://github.com/leellismith/QuizNest).
>3. Click on the green <> Code button.
>4. In the dropdown you will find the HTTP url. Copy that.
>5. Load up [Gitpod](https://gitpod.io/)
>6. Once logged in, Select Orange new workspace button.
>7. Click on select a respository.
>8. Paste in the repository. See steps 1 - 4.
>9. Click continue.
>10. Your workspace has been set up.
___
 __Making a Clone__

 >1. Follow steps 1 - 4 from the Gitpod.io deployment steps.
 >2. Open your Terminal.
 >3. Select a location where you would like the clone to save to.
 >4. Type __git clone__ and paste the respository.
 >5. Press Enter to create your local clone.

 # Credits

 ### __I used the following people, videos and websites in the build of this website.__

#### __Followed [James Q Quick tutorial](https://www.youtube.com/watch?v=rFWbAj40JrQ&list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF) to help build the foundation of the quiz.__

#### __Animated 3D background taken from [Vanta JS](https://www.vantajs.com/).__

#### __API was used from [Open Trivia](https://opentdb.com/api_config.php).__

#### __CDN was used from [jsDelivr](https://www.jsdelivr.com/package/npm/he). This was used to encode and decode issues with the questions and answers__
