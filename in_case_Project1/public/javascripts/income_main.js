document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("addIncome").addEventListener("click", function () {
        let newIncomeItem = new IncomeItem(
            document.getElementById("nIncome").value,
            document.getElementById("amnIncome").value,
        );
                
        if(newIncomeItem.isValid()) {
            IncomeList.push(newIncomeItem);
            clear();
            updateDisplay(IncomeList);
        }
        else {
            document.getElementById("tIncome").innerHTML = "Sorry, invalid input. Try again!"
        }
    });

    document.getElementById("clear").addEventListener("click", clear);
});

function clear() {
    document.getElementById("nIncome").value = "";
    document.getElementById("amnIncome").value = "";
    
    document.getElementById("nIncome").focus();
}

let IncomeList = [];
    
function updateDisplay(array){
    // let myList = document.getElementById("lists");
    // myList.innerHTML = '';
    let tIncome = 0;
    for (i = 0; i < array.length; i++) {
        tIncome += array[i].amnIncome;
        // let node = document.createElement("li"); 
        // node.innerHTML = array[i].fname + ", " + array[i].calories + ", " + array[i].howmany
        // document.getElementById("lists").appendChild(node);
    } 
    document.getElementById("tIncome").innerHTML = "INCOME: " + tIncome + "$";
}