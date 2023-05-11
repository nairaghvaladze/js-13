document.body.style.backgroundColor="Darkorchid";
document.body.style.textAlign="center";
document.body.style.color="white";
document.body.style.fontSize="30px";
document.body.style.fontWeight="700";
var b=document.getElementById("color");

var c=1;
while (c <= 50)
{  if (c % 2==0 ){
  document.write('<font color="green">');
  document.write(c, " <br>");
c++;
}    else if(c % 2 ==1) { 
      document.write('<font color="red">');
      document.write(c, " <br>");     
    c ++;
   

    }
}