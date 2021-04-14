Thanks so much for your interest in Lumen Learning!  We appreciate you taking the time to review this code and give us feedback on how it could be improved.  Please do not spend any longer than half an hour reviewing this project.

## What do I need to do?

There are two steps to completing this review.  Please create an email and send it to james@lumenlearning.com which includes your work on the two steps.

The first step is to look through the code in this repository, especially in `main.js` where all of the major logic is located.  Find note any lines of code you believe either deserve special praise as being very clear or which you believe should be improved in any fashion - either to make the meaning more clear or fix any bugs which you have found.

Please collect your notes in the form of:

{file name} {line number} {your comment}

For instance:

| file name | line number | comment |
| --- | --- | --- |
| astronauts.spec.js | 1 | I see that Jest is being used for unit tests. |

Also, please remember that you are communicating with a colleague when making these notes.

The second step is to write up answers for the following questions:
* Please describe your experience providing or receiving code reviews like this.
* Did you run the code locally?
* Did you feel you were missing any context for this code review? What other info might have helped you understand the context for this feature?

## What is this code supposed to do?

This program takes a number of astronauts in an array.  Each astronaut is an object in the form of:

- *String name* the astronaut's full name
- *Date applicationDate*: the date when the astronaut applied to be on a ship
- *Array of String preferredShip*; a list of the names of each ship in the order that the astronaut would like to be stationed on them.  Every preferredShip is guaranteed to include all available spaceships and the strings are only spaceship names.

Then there are spaceships, in the form of:

- *String name*: the spaceship's name
- *Date expeditionDate*: the day when the spaceship will launch
- *Number capacity*: always a positive integer, the number of astronauts a spaceship can hold
- *Array of astronaut objects*: originally an empty array, the function `assignToSpaceships` will add assigned astronauts to this array.

Every astronaut is to be assigned to the spaceship based on when their application was received.  Every astronaut should be given their highest preferred spaceship which has not yet run out of capacity.  If the astronaut's first choice spaceship is full, then they should be placed on their second choice spaceship, and so on until they have been placed on a spaceship.

There will never be more astronauts to be assigned than there is combined capacity of spaceships.

It is just fine for a spaceship to only have one - or even zero - astronauts assigned to it.

Once assignment is completed, each astronaut should receive a message in the following form:

`Congratulations {astronaut name}. You have been assigned to journey into the heart of the universe on the Spaceship {spaceship name}. Please be prepared to start your journey on { expedition date formatted as month/day/year }.`

Those will be printed out to the console for now.
