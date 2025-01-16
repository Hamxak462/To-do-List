const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!") // when input-box empty, show alert..........
    }
    else{
        let li = document.createElement("li");//when write some text in input-box then create li....
        li.innerHTML = inputBox.value; // something we write in input-box then store it in li.....
        listContainer.appendChild(li); // that li store in list-container(means li is child of ul).
        
        let span = document.createElement("span");// create span tag for 'x' icon
        span.innerHTML = "\u00d7";// \u00d7 code of 'x'icon
        li.appendChild(span);// apply the logic on 'x' and remove the parent tag of SPAN.......
    }
    inputBox.value = "";// when CLICK on "add button" then the "inputbox" will empty by default...
    saveData()
}
listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){           // when click on li then apply checked class on li...
        e.target.classList.toggle('checked');
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
    // this function means don't remove data when refresh the page
};
saveData()
// function showTask(){
//     listContainer.innerHTML = localStorage.getItem("data")
//     // in this function data get form the above function...
//     // don't remove data when cross the webpage....
// }
// showTask();