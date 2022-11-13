window.addEventListener("load", getTodo);
const AddBtn = document.querySelector("#add");
const todolists = document.querySelector(".lists");
AddBtn.addEventListener("click", addFun);
function addFun() {
  const textIn = document.querySelector("#Todoin");
  const DltBtn = document.createElement("button");
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-trash";
  const editBtn = document.createElement("button");
  const editicon = document.createElement("i");
  editicon.className = "fa-solid fa-pen-to-square";
  const check = document.createElement("i");
  const checkBtn = document.createElement("button");
  check.className = "fa-solid fa-check-to-slot";
  const list = document.createElement("p");

  list.className = "text";
  list.innerText = textIn.value;
  editBtn.className = "edit";
  DltBtn.className = "delete";
  list.appendChild(editBtn);
  list.appendChild(DltBtn);
  list.appendChild(checkBtn);
  editBtn.appendChild(editicon);
  DltBtn.appendChild(icon);
  checkBtn.appendChild(check);
  todolists.appendChild(list);
  savelocalStorage(textIn.value);
  textIn.value = "";
}

// todolists.addEventListener("click",Delete)
// function Delete(event){
//     let parettargetEl = event.path[1]
//     if(parettargetEl.className=="text"){
//         parettargetEl.remove()
//     }else{
//         return
//     }()
// }
function savelocalStorage(todo) {
  console.log(todo);
  if (localStorage.getItem("todo") == null) {
    localStorage.setItem("todo", todo);
  } else {
    localStorage.setItem("todo", localStorage.getItem("todo") + "," + todo);
  }
}
function getTodo() {
  let getElement = localStorage.getItem("todo");
  let arrayElement = getElement.split(",");
  arrayElement.forEach((el) => {
    const textIn = document.querySelector("#Todoin");
    const DltBtn = document.createElement("button");
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-trash";
    const editBtn = document.createElement("button");
    const editicon = document.createElement("i");
    editicon.className = "fa-solid fa-pen-to-square";
    const check = document.createElement("i");
    const checkBtn = document.createElement("button");
    check.className = "fa-solid fa-check-to-slot";
    const list = document.createElement("p");

    list.className = "text";
    list.innerText = textIn.value;
    editBtn.className = "edit";
    DltBtn.className = "delete";
    list.appendChild(editBtn);
    list.appendChild(DltBtn);
    list.appendChild(checkBtn);
    editBtn.appendChild(editicon);
    DltBtn.appendChild(icon);
    checkBtn.appendChild(check);
    todolists.appendChild(list);
  });
}
todolists.addEventListener("click", Delete);

function Delete(e) {
  let targetEl = e.target;
  console.log(targetEl);
  if (targetEl.className == "fa-solid fa-trash") {
    let parentEl = e.path[2];
    let getElement = localStorage.getItem("todo");
    let arrayElemet = getElement.split(",");
    let findEl = arrayElemet.findIndex((el) => {
      return el == parentEl.innerText;
    });
    console.log(findEl);
    arrayElemet.splice(findEl, 1);
    localStorage.setItem("todo", arrayElemet.toString());
    parentEl.remove();
  } else {
    return;
  }
}
todolists.addEventListener("click", check);
function check(e) {
  let target = e.target;
  let parentEl = e.path[2];
  let child = parentEl.children[0];

  if (target.className === "fa-solid fa-check-to-slot") {
    parentEl.classList.toggle("check");
  }
}

todolists.addEventListener("click", Edit);
function Edit(e) {
  let targetEl = e.target;
  if (targetEl.className == "fa-solid fa-pen-to-square") {
    let parentEl = e.path[1];
    let getElement = localStorage.getItem("todo");
    let arrayElemet = getElement.split(",");
    let findEl = arrayElemet.findIndex((el) => {
      return el == parentEl.innerText;
    });
    console.log(findEl);
    localStorage.setItem("todo", arrayElemet.toString());


  } else {
    return;
  }
}
// let d = 0;
// function Edit(e) {
//   let targetEl = e.target;
//   let parentEl = e.path[1];

//   if (targetEl.className == "fa-solid fa-pen-to-square") {
//     let getElement = localStorage.getItem("todo");
//     let arrayElement = getElement.split(",");
//     let list = parentEl.querySelector("p");
//     let findel = arrayElement.findIndex((el) => {
//       return el;
//     });
//     if (d == 0) {
//       const inputEl = document.createElement("input");
//       inputEl.type = "text";
//       parentEl.appendChild(inputEl);
//       targetEl.innerText = "done";
//       d = d + 1;
//     } else if (d == 1) {
//       targetEl.innerText = "edit";
//       const inputEl = parentEl.children[4];
//       list.innerText = inputEl.value;
//       inputEl.remove();
//       arrayElement.splice(findel, 1, inputEl.value);
//       console.log(arrayElement);
//       localStorage.setItem("todo", arrayElement.toString());
//       d = d - 1;
//     }
//   }
// }
