// let todoItem = document.querySelector("#todolist_item1");
// let todoBox = document.querySelector("#todolist_item1_input");

//todoItem.addEventListener("click", function () {
//todoItem.classList.toggle("todolist_activeitem");
//todoBox.classList.toggle("todolist_activeitem");
//});

for (let i = 1; i <= 6; i++) {
  document
    .querySelector(`#todolist_item${i}`)
    .addEventListener("click", function () {
      document
        .querySelector(`#todolist_item${i}`)
        .classList.toggle("todolist_activeitem");
      document
        .querySelector(`#todolist_item${i}_input`)
        .classList.toggle("todolist_activeitem");
    });
}
