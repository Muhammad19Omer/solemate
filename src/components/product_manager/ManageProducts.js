import React, { useEffect, useState } from 'react';
import Todo from '../../Todo';
import db from '../../firebase';

function ManageProducts() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // this code fires when the app.js loads
        db.collection('products').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            console.log((snapshot.docs.map(doc => doc.data())));
            setTodos(snapshot.docs.map(doc => doc.data().name))
        })
    }, []);

    return (
        <ul>
            {todos.map(todo => (
                <Todo text={todo}/>
            ))}
        
      </ul>
    )
}

export default ManageProducts