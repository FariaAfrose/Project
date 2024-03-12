import React, { useState } from 'react';
import './Column.css';
import { Button } from 'antd';
import Task from './Task';
import { useStore } from './store';

export default function Column({ state }) {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const tasks = useStore((store) => store.tasks.filter((task) => task.state === state));
  const addTask = useStore((store) => store.addTask);
  return (
    <div className="column">
      <div className="titleWrapper">
        {' '}
        <p>
          {' '}
          {state}

        </p>
        {/* <button type="button" onClick={() => { addTask(`asdsa${state}`, state); }}>Add</button> */}
        <Button type="primary" onClick={() => (setOpen(true))}>Add</Button>
      </div>

      {tasks.map((task) => (
        <Task title={task.title} key={task.title} />

        ))}
      {open && (

      <div className="Modal">
        <div className="modalContent">
          <input onChange={(e) => setText(e.target.value)} value={text} />
          <Button
            type="primary"
            onClick={() => {
addTask(text, state);
setText('');
setOpen(false);
}}
          >
            Submit
          </Button>
        </div>
      </div>
      )}
    </div>
  );
}
