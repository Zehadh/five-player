function getValue(amount){
    const costString = document.getElementById(amount).value;
    const cost = parseFloat(costString);
    return cost;
}

document.getElementById("calculateBtn").addEventListener('click', function(){
    const singlePlayerExpense = getValue("perPlayerCost");

    const players = document.getElementById("myList").childElementCount;

    if(isNaN(singlePlayerExpense)){
        alert('Give a valid amount');
    }
    else{
        const playersCost = singlePlayerExpense * players;
        const playerFinalCost = document.getElementById("playerExpense");
        playerFinalCost.innerText = playersCost;
    }

    
})

document.getElementById("totalBtn").addEventListener('click', function(){
    const managerExpense = getValue("managerCost");

    const coachExpense = getValue("coachCost");

    const allPlayerExpenseString = document.getElementById("playerExpense").innerText;
    const allPlayerExpense = parseFloat(allPlayerExpenseString);

    if(isNaN(managerExpense && coachExpense && allPlayerExpense)){
        alert('Give a valid amount');
    }
    else{
        const totalExpense = allPlayerExpense + managerExpense + coachExpense;

        const total = document.getElementById("totalField");
        total.innerText = totalExpense;
    }
})



const selects = document.querySelectorAll(".selectBtn");
for(select of selects){
    select.addEventListener('click', function(event){
        const myList = document.getElementById("myList");
        if(myList.childElementCount < 5){
        const player = event.target.parentNode.childNodes[1].innerText;   
        const li = document.createElement('li');
        li.innerText = player;        
        myList.appendChild(li);
        event.target.disabled = true;
        event.target.style.backgroundColor = 'rgb(92, 52, 45)';
    }
    else{
        alert('You can select at-most 5 players.');
    }

    })
}