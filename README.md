<h1 align="center">QuizNest</h1>

<h2 align="center"> A Quiz Website</h2>

<h2 align="center">Milestone Project 2 - Lee Smith</h2>


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



#### __Game Page__



#### __End Page__



#### __Highscore Page__



#### __CSS Validation__

### __Lighthouse Testing__

### __Home Page Testing__

![Home Page Testing](readme-docs/testing/Lighthouse%20test%20index%20-%20P2.JPG)

### __Game Testing__

![Game Page Testing](readme-docs/testing/Lighthouse%20test%20game%20-%20P2.JPG)

### __End Page Testing__

![Submit Page Testing](readme-docs/testing/Lighthouse%20test%20end%20-%20P2.JPG)

### __Highscore PageTesting__

![Highscore Page Testing](readme-docs/testing/Lighthouse%20test%20highscore%20-%20P2.JPG)

# Test Cases

## User Experience 

### Home Page


### Game Page


### End Page


### Highscore Page


# User Testing


# Fixed Bugs

Fixed a bug with the score. The score would be added up correctly but when viewed in the highscore page, it would show a correctly random score. I fixed this issue by console logging each section but couldn't not find the issue after doing some research i found that using submit sometimes can change what you are asking it do it so I changed the save from a submit to a button and this has seems to work.

Fixed bug with the API questions and answers where they where bringing in unwanted characters on to the page which made the page look unreadable. I fixed this by added .replace() to each unwanted characters and adding the correct character. After doing this I was still having issues with some text showing these unwanted characters so I spoke with one of my friend Chris Parry who is a software developer who advised me to use https://cdn.jsdelivr.net/npm/he@1.2.0/he.min.js and add that into my code instead of manaual doing it myself. After implementing the issue has now fixed.

### Supported Screens and Browsers

## Deployment

## Github Pages

__The Site was deployed via GitHub Pages.__

>1. Go to GitHub.
>2. Find QuizNest repository or [Click Here]().
>3. Go to settings [Click Here]().
>4. On the left hand side of the General tab click on Pages [Cllck Here]().
>5. In Build and deployment, select Deploy from a branch.
>6. Then In branch select the Main tab and the /(Root) tab.
>7. Then click save and wait for the deployment to go live.

---

## Gitpod.io Deployment

>1. Go to github.
>2. Find QuizNest repository or [Click Here]().
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