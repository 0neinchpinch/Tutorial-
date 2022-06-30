document.getElementById("submit").onclick = function(){

    let a = document.getElementById("atext").value;
    a = Number(a);

    let b = document.getElementById("btext").value;
    b = Number(b);

    let c =Math.sqrt((Math.pow(a,2)+Math.pow(b,2)));
    document.getElementById("result").innerHTML = "Hypotenuse is "+c;
}