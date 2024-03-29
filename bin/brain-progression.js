// Function to generate a random geometric progression
import readlineSync from 'readline-sync';

const generateProgression = () => {
  const progressionLength = Math.floor(Math.random() * 6) + 5; // Random length between 5 and 10
  const start = Math.floor(Math.random() * 10) + 1; // Random starting number
  const ratio = Math.floor(Math.random() * 5) + 2; // Random ratio between 2 and 6
  const hiddenIndex = Math.floor(Math.random() * progressionLength);

  const progression = [];
  let current = start;

  for (let i = 0; i < progressionLength; i++) {
    if (i === hiddenIndex) {
      progression.push('..');
    } else {
      progression.push(current);
      current *= ratio;
    }
  }

  return {
    question: progression.join(' '),
    answer: start * ratio ** hiddenIndex,
  };
};

// Function to play the game
const playProgressionGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  console.log('What number is missing in the progression?');
  let correct = true;

  for (let round = 1; round <= 3; round++) {
    const { question, answer } = generateProgression();
    console.log(`Question: ${question}`);
    const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);

    if (userAnswer === answer) {
      console.log('Correct!\n');
    } else {
      console.log(`${userAnswer}' is wrong answer ;(. Correct answer was '${answer}.`);
      console.log(`Let's try again, ${name}!\n`);
      correct = false;
      break;
    }
  }

  if (correct) {
    console.log(`Congratulations, ${name}!\n`);
  }
};

playProgressionGame();
