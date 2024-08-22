$(document).ready(function () {
  const button = $("#adicionar");
  const toDoList = $("#to-do-list");

  button.click(function (e) {
    e.preventDefault();
    const taskField = $("#task-field");
    createRow(taskField.val());
    taskField.val("");
  });

  function createRow(tarefa) {
    const li = `<li><div class="check"></div><span class="task">${tarefa}</span></li>`;
    toDoList.append(li);
  }

  toDoList.on("click", ".check", function () {
    $(this).toggleClass("mark");
  });

  toDoList.on("click", ".task", function () {
    $(this).toggleClass("line");
  });
});
