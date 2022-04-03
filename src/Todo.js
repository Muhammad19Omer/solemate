import React from 'react';
import './Todo.css';
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

function Todo(props) {
  return (
    <List className="todo_list">
      <ListItem>
      <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.text} secondary="Dummy Deadline">
        </ListItemText>
        
      </ListItem>
    </List>
  )
}

export default Todo