var tests = document.getElementsByClassName('test')
var index = 2;

var left = document.getElementById('left')
var right = document.getElementById('right')

var carousel = document.getElementById('car');
var x = -20
console.log(tests)
console.log(carousel)
left.addEventListener('click', function(){
  if(index > 0){
  index-=1;
  x+=20;
  for (var i = 0; i < tests.length; i++) {
    tests[i].style.opacity = '0.05';
    tests[i].style.transform = 'translateY(0px)'
  }
  tests[index].style.opacity = '1';
  tests[index].style.transform = 'translateY(50px)'
  carousel.style.transform = `translateX(${x}%)`
}
})

right.addEventListener('click', function(){
  if(index < 4){
  index+=1;
  x-=20;
  for (var i = 0; i < tests.length; i++) {
    tests[i].style.opacity = '0.05';
    tests[i].style.transform = 'translateY(0px)'
  }
  tests[index].style.opacity = '1';
  tests[index].style.transform = 'translateY(50px)'
  carousel.style.transform = `translateX(${x}%)`
}
})
