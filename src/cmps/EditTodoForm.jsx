import React from 'react';
import TextField from '@material-ui/core/TextField'
import {useInputState} from '../hooks/useInputState'

export function EditTodoForm({todo, onEditTodo, toggleIsEditing}) {
    const [value, handleChange, reset] = useInputState(todo.task)
    const onFormSubmit = (ev) => {
        ev.preventDefault()
        onEditTodo(todo.id, value)
        reset()
        toggleIsEditing()
    }
  return (
      <form onSubmit={onFormSubmit} style={{marginLeft: '1rem', width: '50%'}}>
      <TextField className="edit-todo-form" margin="normal" value={value} onChange={handleChange} fullWidth autoFocus />
      </form>

  )

  
}
