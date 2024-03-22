#! /usr/bin/env node
import inqurer from 'inquirer';
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inqurer.prompt([
    {
        name: 'UserGuessNumber',
        type: 'number',
        message: 'Enter your guess number between 1-10'
    },
]);
if (answer.UserGuessNumber === randomNumber) {
    console.log('Congrats! You guessed Right number');
}
else {
    console.log('You guessed wrong number');
}
;
