 let val = document.querySelector('.message');
// console.log(val.textContent = 'vishnu');

// //Dom is actually a structured representaion of html documentation which allows javascript to access the html elements and css class to manipulate them
// document.querySelector('.number').textContent = 19;

// let sum = document.querySelector('.guess');
// console.log(sum.value);
let num;
num = Math.floor(Math.random() * 20);
document.querySelector('.again').addEventListener('click', () =>
{
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').textContent = '?';
    num = Math.floor(Math.random() * 20);
    console.log(num);
})

const getRandom = () =>
{
    
    num = Math.floor(Math.random() * 20);
    console.log(num);
}
console.log(num);
let maxScore = 20;
let Score = Number(document.querySelector('.score').textContent);
console.log(Score)
let highScore = document.querySelector('.highscore');

const print = () =>
{
    let min = Number(document.querySelector('.guess').value);
    console.log(`Input field number ${min}`);
    if (!min) {
      val.textContent="⛔️No Number!"
    }
    else if (min < num)
    {
        val.textContent = "😣To Low!"
        Score--;
        document.querySelector('.score').textContent = Score;
    }
    else if (min === num)
    {
        val.textContent = "🎉🎉Correct!"
        highScore.textContent = Score;
        document.querySelector('.number').textContent = num; 
        document.querySelector('body').style.backgroundColor = 'green';
    }
    else if (min > num)
    {
        val.textContent = '👻👻Greater!'
        Score--;
        document.querySelector('.score').textContent = Score;
        }
    }
document.querySelector('.check').addEventListener('click', print);

//Fully resting the game after clicking on again
const reset = () =>
{
    document.querySelector('.guess').value = null;
    document.querySelector('.score').textContent = 20;
    document.querySelector('.highscore').textContent = 0;
    document.querySelector('.message').textContent = '🦆Start Guessing'
    document.querySelector('.number').textContent = '?';  
    getRandom();

    }

document.addEventListener('keypress', () =>
{
    console.log('keypressed');
})
document.addEventListener('keydown', () =>
{
    console.log('keydown');
})
document.addEventListener('keyup', (e) =>
{
    console.log(e);
})