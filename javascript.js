    /*var a=10;
    let b=20;
    var a=30;
    document.write(a);
    const c=10;
    document.write(c);
    var a=20;
    document.write(typeof(a))*/
    function show()
    {
        var a=document.getElementById("name").value;
        var b=Number(a);
        /*var c=document.getElementById("name1").value;
        var d=Number(c);*/
        if(b%2==0){
        document.getElementById("result").innerHTML="even";
    }
    else{
        document.getElementById("result").innerHTML="odd";
    }

    }
 