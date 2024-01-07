$("#inputbtn").on("click",function(){
  let userInput = input.value;
  const output = userInput.replace(/[,\n\s]+/g
  , ' ').split(' ').sort();
  console.log(output)
  let size=output.length
  // let n=output[size-1];
  let n=72;
  // console.log(n)
  let count=1;
  let absentno=[];
  for(let i=0;i<n;i++){
      absentno.push(count);
      count++;
  }
  for(let i=0;i<size;i++){
      for(let j=0;j<n;j++){
          if(output[i]==absentno[j]){
              absentno.splice(j,1);
              // console.log("j="+j)
          }
      }
  }
// console.log(absentno);
let p=output.join(' ');
  let a=absentno.join(' ');
  document.querySelector("#output1").value=a;
  document.querySelector("#output2").value=p;
  // console.log(output);
});
$("#rebtn").on("click",function(){
  document.querySelector("#input").value=" ";
  document.querySelector("#output1").value=" ";
  document.querySelector("#output2").value=" ";
})
