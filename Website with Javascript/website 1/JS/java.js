let score = JSON.parse(localStorage.getItem('score'));

if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
function computerMove()
{
  let random=Math.random();
  let move='';
  if(random>=0 && random<(1/3))
  {
    move='Rock';
  }
  else if(random>=(1/3) &&random<(2/3))
  {
    move='Paper';
  }
  else
  {
    move='Scissors';
  }
  return move;
}
function Rock(move)
{
  let result='';
  if(move==='Rock')
  {
    result='Tie';
    score.ties++;
  }
  else if(move==='Paper')
  {
    result='You lose';
    score.losses++;
  }
  else
  {
    result='You win';
    score.wins++;
  }
  localStorage.setItem('score', JSON.stringify(score));
  alert(`You choose Rock.Computer choose ${move}.${result}
    wins:${score.wins} ,losses:${score.losses} ties:${score.ties}`)
}
function Paper(move)
{
  let result='';
  if(move==='Rock')
  {
    result='You win';
    score.wins++;
  }
  else if(move==='Paper')
  {
    result='Tie';
    score.ties++;
  }
  else
  {
    result='You lose';
    score.losses++;
  }
  localStorage.setItem('score', JSON.stringify(score));
  alert(`You choose Paper.Computer choose ${move}.${result}
    wins:${score.wins} ,losses:${score.losses} ties:${score.ties}`)
}
function Scissor(move)
{
  let result='';
  if(move==='Rock')
  {
    result='You lose';
    score.losses++;
  }
  else if(move==='Paper')
  {
    result='You win';
    score.wins++;
  }
  else
  {
    result='Tie';
    score.ties++;
  }
  localStorage.setItem('score', JSON.stringify(score));
alert(`You choose Scissor.Computer choose ${move}.${result}
    wins:${score.wins} ,losses:${score.losses} ties:${score.ties}`)
}
function reset()
{
  score.wins=0;
  score.losses=0;
  score.ties=0;
  alert('Score is reset');
  localStorage.removeItem('score');
}
