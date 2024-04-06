<h1 align="center">QuizNest</h1>

<h2 align="center"> A Quiz Website</h2>

<h2 align="center">Milestone Project 2 - Lee Smith</h2>

Bugs

Fixed a bug with the score. The score would be added up correctly but when viewed in the highscore page, it would show a correctly random score. I fixed this issue by console logging each section but couldn't not find the issue after doing some research i found that using submit sometimes can change what you are asking it do it so I changed the save from a submit to a button and this has seems to work.

Fixed bug with the API questions and answers where they where bringing in unwanted characters on to the page which made the page look unreadable. I fixed this by added .replace() to each unwanted characters and adding the correct character. After doing this I was still having issues with some text showing these unwanted characters so I spoke with one of my friend Chris Parry who is a software developer who advised me to use https://cdn.jsdelivr.net/npm/he@1.2.0/he.min.js and add that into my code instead of manaual doing it myself. After implementing the issue has now fixed.