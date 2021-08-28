import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { useInputState } from '../hooks/useInputState';
export function TodoForm({ onAddTodo }) {
  const [value, handleChange, reset] = useInputState('');
  const onFormSubmit = (ev) => {
    ev.preventDefault();
    onAddTodo(value);
    reset();
  };

  return (
    <Paper className='todo-form' style={{margin: '1rem 0', padding: '0 1rem'}}>
      <form onSubmit={onFormSubmit}>
        <TextField value={value} onChange={handleChange} margin="normal" label="Add new todo" fullWidth />
      </form>
    </Paper>
  );
}
