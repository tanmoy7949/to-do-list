let AddButton =document.getElementById('AddBtn')
let intText = document.getElementById('inputText')
let intDate = document.getElementById('inputDate')
let appendinput = document.getElementById('append-1')

AddButton.addEventListener('click',addToDo)

function addToDo(currEvent){
    if(intText.value===''){
        alert("Plase Write Something Here!")
        
    }
    else if(intDate.value===''){
        alert("Please Enter Valid Date")
    }
    else{
    let add = currEvent.currentTarget
    let add2 =add.parentElement.firstElementChild
    let date1 = add.previousElementSibling

    let newLi = document.createElement('li')
    newLi.className="li"
    newLi.innerHTML=`${add2.value + " -" + " "+ "("+date1.value+")"} <button id="deleteBtn" class="btn" onclick="removeBtn(this)" >Delete</button>` 
    // newLi.textContent=(add2.value + " -" + " "+ date1.value )

    appendinput.appendChild(newLi)
    }
    
}
function  removeBtn(e){
    //    let delBtn = e.parentElement
    //    delBtn.remove()
    e.parentElement.remove()
}