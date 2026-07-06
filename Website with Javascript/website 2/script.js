score={
  total:0,
};
function game()
{
  let result=0;
  let random=Math.random();
  if(random>=0 && random<(1/6))
  {
    result=1;
    score.total=score.total+result;
  }
  else if(random>=(1/6) && random<(2/6))
  {
    result=2;
      score.total=score.total+result;
  }
 else if(random>=(2/6) && random<(3/6))
  {
    result=3;
  score.total=score.total+result;
  }
  else if(random>=(3/6) && random<(4/6))
  {
    result=4;
      score.total=score.total+result;
  }
  else if(random>=(4/6) && random<(5/6))
  {
    result=5;
       score.total=score.total+result;
  }
  else
  {
    result=6;
      score.total=score.total+result;
  }
    document.getElementById("dice").src = `Image/${result}.jpg`;
  alert(`You scored ${result} .The total is ${score.total}`);
}