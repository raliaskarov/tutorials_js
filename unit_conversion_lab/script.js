function temperature()
{
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32;
    document.getElementById("fahrenheit").value = f
    console.log("Completed calculation: ",fahrenheit.value)
}

function weight()
{
    var kg = document.getElementById("kg").value;
    var lbs = kg * 2.2;
    console.log("Converted kg to pounds: ", lbs)
    document.getElementById("lbs").value = lbs
}

function distance()
{
    var km = document.getElementById("km").value;
    var miles= km * 0.62137
    document.getElementById("miles").value = miles
}