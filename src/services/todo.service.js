import { storageService } from './storage.service'
import uuid from 'uuid/dist/v4';

export const todoService = {
    query,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo
}
const _defaultTodos = [
    { id: 1, task: 'Walk the dog', isDone: false },
    { id: 2, task: 'Wash car', isDone: true },
    { id: 3, task: 'Cook dinner', isDone: false },
];
let gTodos = _initTodos()


function query() {
    return Promise.resolve(gTodos)
}

function addTodo(newTodoTxt) {
    const newTodo = { id: uuid(), task: newTodoTxt, isDone: false }
    const updatedTodos = [...gTodos, newTodo]
    gTodos = updatedTodos
    _saveTodosToLocalStorage()
}

function deleteTodo(todoId) {
    const updatedTodos = gTodos.filter(todo => todo.id !== todoId)
    gTodos = updatedTodos
    _saveTodosToLocalStorage()
}

function toggleTodo(todoId) {
    const updatedTodos = gTodos.map(todo => {
        return todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo
    })
    gTodos = updatedTodos
    _saveTodosToLocalStorage()
}

function editTodo(todoId, newTaskTxt) {
    const updatedTodos = gTodos.map(todo => {
        return todo.id === todoId ? { ...todo, task: newTaskTxt } : todo
    })
    gTodos = updatedTodos
    _saveTodosToLocalStorage()
}

function _saveTodosToLocalStorage() {
    storageService.saveToStorage('todosDB', gTodos)
}

function _initTodos() {
    const localStorageTodos = storageService.loadFromStorage('todosDB')
    if (!localStorageTodos || !localStorageTodos.length) {
        return _defaultTodos
    } else {
        return localStorageTodos
    }
}