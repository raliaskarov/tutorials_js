function compute()
{
    console.log("Compute function triggered");
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var N = document.getElementById("years").value;
    var year = new Date().getFullYear() + parseInt(N);
    var I = parseInt(p) * parseFloat(r) / 100 * parseInt(N);
    var amount = parseInt(p) + parseFloat(I);
    console.log("Calculated amount: ",amount)
    var result = document.getElementById("result");
    
    if(p==="" || p <= 0) {
        alert("Please enter positive number");
        document.getElementById("principal").focus();
    }
    else {
        result.innerHTML = "If you deposit $" + 
        "<mark>" + p  + "</mark>" + 
        ",\<br\>at an interest rate of " + 
        "<mark>" + r  + "</mark>" + 
        "%\<br\>You will receive an amount of " + 
        "<mark><b>$" + amount + "</b></mark>" + 
        ",\<br\>in the year " + 
        "<mark>" + year + "</mark>" + "\<br\>";
    }
    
}
        
function updateRate() {
    var rateval = document.getElementById("rate").value;  
    console.log("Received rate value", rateval)  
    document.getElementById("rateval").innerText = rateval
}