import html from "./app.html?raw";
import todoStore, { Filters } from "../store/todo.store";
import { renderTodos, renderPendingCount } from "./use-cases";

const ElementIDs = {
  clearCompleted: ".clear-completed",
  TodoList: ".todo-list",
  NewTodoInput: "#new-todo-input",
  TodoFilters: ".filtro",
  PendingCountLabel: "#pending-count",
};

/**
 *
 * @param {String} elementId
 */

export const App = (elementId) => {
  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(ElementIDs.TodoList, todos);
    updatePendingCout();
  };

  const updatePendingCout = () => {
    renderPendingCount(ElementIDs.PendingCountLabel);
  };

  // When app function is called
  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();

  // HTML reference
  const clearCompletedBtn = document.querySelector(ElementIDs.clearCompleted);
  const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
  const todoListUl = document.querySelector(ElementIDs.TodoList);
  const filtersLi = document.querySelectorAll(ElementIDs.TodoFilters);

  // Listeners
  clearCompletedBtn.addEventListener("click", () => {
    todoStore.deleteCompleted();
    displayTodos();
  });

  newDescriptionInput.addEventListener("keyup", (e) => {
    if (e.keyCode != 13) return;
    if (e.target.value.trim().length === 0) return;

    todoStore.addTodo(e.target.value);
    displayTodos();
    e.target.value = "";
  });

  todoListUl.addEventListener("click", (e) => {
    const selectedElement = e.target.closest("[data-id]");
    todoStore.toggleTodo(selectedElement.getAttribute("data-id"));
    displayTodos();
  });

  todoListUl.addEventListener("click", (e) => {
    const isDestroyElement = e.target.className === "destroy";
    const selectedElement = e.target.closest("[data-id]");

    if (!e || !isDestroyElement) return;
    todoStore.deleteTodo(selectedElement.getAttribute("data-id"));
    displayTodos();
  });

  filtersLi.forEach((element) => {
    element.addEventListener("click", (elem) => {
      filtersLi.forEach((e) => e.classList.remove("selected"));
      elem.target.classList.add("selected");

      switch (elem.target.text) {
        case "Todos":
          todoStore.setFilter(Filters.All);
          break;
        case "Pendientes":
          todoStore.setFilter(Filters.Pending);
          break;
        case "Completados":
          todoStore.setFilter(Filters.Completed);
          break;
      }
      displayTodos();
    });
  });
};
