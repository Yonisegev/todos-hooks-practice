import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';
import { TodoPreview } from './TodoPreview';
export function TodoList({ todos, onDeleteTodo, onToggleTodo, onEditTodo }) {
  return (
    <Paper className='todos-list'>
      <List>
        {todos.map((todo, idx) => (
          <React.Fragment key={todo.id}>
            <TodoPreview
              todo={todo}
              onDeleteTodo={onDeleteTodo}
              onToggleTodo={onToggleTodo}
              onEditTodo={onEditTodo}
            />
            {idx < todos.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}
