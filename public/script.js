let age = prompt("Enter your age: ", 1);
let maxAge = prompt("You will live until the ripe old age of: ", 100);
let numPerDay = prompt("Number of snacks you eat daily: ", 1 ); 

let sure = confirm("Are you veryyyy sure? Baka mali yung input mo...what if mali yung natype mo and naging 0 yung result? You want to see the answer na ba? Sorry na :(");

if(sure){
    let totalRequired = (Number(numPerDay) * 365) * (Number(maxAge) - age);
    document.write(`You will need ${totalRequired} cups of coffee to last you until the ripe old age of ${maxAge}`);
}
else{
    window.alert("Why would you leave :(...the answer was a click away!");
}

