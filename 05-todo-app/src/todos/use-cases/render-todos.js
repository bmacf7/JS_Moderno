import { Todo } from "../models/todo.model";
import { createHTMLTodo } from "./create-html-todo";

let element;

/**
 *
 * @param {String} elementId
 * @param {Todo} todos
 */

export const renderTodos = (elementId, todos = []) => {
  if (!element) element = document.querySelector(elementId);

  if (!element) throw new Error(`Element ${elementId} not found`);

  element.innerHTML = "";

  todos.forEach((todo) => {
    element.appendChild(createHTMLTodo(todo));
  });
};
