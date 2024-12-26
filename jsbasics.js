function show()
{
var n=document.getElementById("val1").value;
/*var i, f=1;
for (i=2; i<n; i++) {
   if(n%i==0)
   {
    f=0;
   }
}
if (f==1)
    document.getElementById("result").innerHTML="yes";
else
   
    document.getElementById("result").innerHTML="no";*/
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++)
        {
            document.getElementById("result").innerHTML+="*";
        }
        document.getElementById("result").innerHTML+="<br>";

    }
}