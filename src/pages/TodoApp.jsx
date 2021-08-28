import React, { useState, useEffect } from 'react';
import { todoService } from '../services/todo.service';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { TodoList } from '../cmps/TodoList';
import { TodoForm } from '../cmps/TodoForm';
export function TodoApp() {
  const initialTodos = [
    { id: 1, task: 'Walk the dog', isDone: false },
    { id: 2, task: 'Wash car', isDone: true },
    { id: 3, task: 'Cook dinner', isDone: false },
  ];
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const todos = await todoService.query();
    setTodos(todos);
  };

  const addTodo = (newTodoTxt) => {
    todoService.addTodo(newTodoTxt);
    loadTodos();
  };

  const onDeleteTodo = (todoId) => {
    todoService.deleteTodo(todoId);
    loadTodos();
  };

  const onToggleTodo = (todoId) => {
    todoService.toggleTodo(todoId);
    loadTodos();
  };

  const onEditTodo = (todoId, newTask) => {
    todoService.editTodo(todoId, newTask);
    loadTodos();
  };

  return (
    <div className='todo-app'>
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: '100vh',
          backgroundColor: '#fafafa',
        }}
        elevation={0}
      >
        <AppBar color='primary' position='static' style={{ height: '64px' }}>
          <Toolbar>
            <Typography color='inherit'>Todos with hooks!</Typography>
          </Toolbar>
        </AppBar>
        <Grid container justifyContent='center' style={{ marginTop: '1rem' }}>
          <Grid item xs={11} md={8} lg={4}>
            <TodoForm onAddTodo={addTodo} />
            {todos.length ? (
              <TodoList
                todos={todos}
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo}
                onEditTodo={onEditTodo}
              />
            ) : (
              <h2>No todos, add some now!</h2>
            )}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
