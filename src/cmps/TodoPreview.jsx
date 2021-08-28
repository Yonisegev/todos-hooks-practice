import React from 'react';
import { useToggle } from '../hooks/useToggle';
import { EditTodoForm } from './EditTodoForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
export function TodoPreview({ todo, onDeleteTodo, onToggleTodo, onEditTodo }) {
  const [isEditing, toggleIsEditing] = useToggle(false);
  return (
    <ListItem style={{height: '64px'}}>
      {isEditing ? (
        <EditTodoForm todo={todo} onEditTodo={onEditTodo} toggleIsEditing={toggleIsEditing} />
      ) : (
        <>
          <Checkbox
            onClick={() => onToggleTodo(todo.id)}
            tabIndex={-1}
            checked={todo.isDone}
          />
          <ListItemText
            style={{ textDecoration: todo.isDone && 'line-through' }}
          >
            {todo.task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              onClick={() => onDeleteTodo(todo.id)}
              aria-label='Delete'
            >
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={toggleIsEditing} aria-label='Edit'>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
