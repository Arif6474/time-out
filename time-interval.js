// console.log('first assignment');
// console.log('second assignment');
// setInterval(() =>{
//     console.log('tik tik tik ');
// } , 1000);
// console.log('third assignment');
// console.log('fourth assignment');
let seconds = 0;
const timeId = setInterval(() =>{
  seconds ++;
  console.log(seconds);
  if( seconds > 15 ){
      clearInterval(timeId);

  }
}
, 1000);
