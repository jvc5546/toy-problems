/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Example:
*   [
*     [ // one possible three round game outcome
*       'rock',    // round 1
*       'paper',   // round 2
*       'scissors' // round 3
*     ],
*     [ // next possible three round game outcome
*       'rock',    // round 1
*       'paper',   // round 2
*       'rock'     // round 3
*     ],
*   etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

function rockPaperScissors(rounds) {
  let options = ['rock', 'paper', 'scissors'];
  if (rounds === 0) {
    return [];
  }

  if (rounds === 1) {
    return options;
  }

  let outcomes = [];

  function getOutcomes (outcome) {
    if(outcome.length === rounds) {
      outcomes.push([...outcome]);
      return;
    }

    for (let i = 0; i < options.length; i++) {
      outcome.push(options[i]);
      getOutcomes([...outcome]);
      outcome.pop();
    }
  }

  getOutcomes([]);

return outcomes;
}