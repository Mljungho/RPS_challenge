# Rock Paper Scissors challenge
This is rock paper scissor application in which a user can play versous the computer.

## The code
Currenly the code is run on a localhost  "http://localhost:3001/" 
The code implementation only contains of a randomly generated answer from the computer,
using Math.random() to generate a value, and the computer answer based on that result.

This version contain both comments, debuggers and redundant code. 

The test implementation is extremley rudimentary, focus was put on the game logic, 
witch did not reach developer expectations
future implementation will contain functional code that takes into consideration the 
player responce, so it is not completley random. 

## Dependencies 

- Built with HTML and Vanilla JS
- Tested with Cypress
- Basic css

## Setup

Clone this repo and run `$yarn`
then start server with `$yarn start` to launch "http://localhost:3001/"
then you can access the e2e test with `$yarn cy:open`

## Acknowledgments 

- Craft Academy course material.
- Cypress documentation
- Youtube videos such as: 
 - for basic RPS function
    [YouTube](https://www.youtube.com/watch?v=RwFeg0cEZvQ)
 - for inspiration regarding CSS and spanner use in HTML
    [YouTube](https://www.youtube.com/watch?v=1yS-JV4fWqY)

## Future updates and improvments

Finish implementation of "smart oponent", likely convert App to a React App (Copy JS code at least) and deploy on Netlify. 