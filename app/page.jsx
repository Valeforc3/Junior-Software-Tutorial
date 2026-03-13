import React from 'react';
import { tasks } from '../data/tasks';
export default function LandingPage() {

    return (
        <div>
            <h1>Junior Software Tutorial</h1>
            <p>A comprehensive guide to building modern web applications</p>
            
            <div>
                {tasks.map((task, index) => (
                    <div>
                        <h2>{task.title}</h2>
                        <p>{task.description}</p>
                        <ul>
                            {task.subtasks.map((subtask, subIndex) => (
                                <li key={subIndex} style={{ marginBottom: '8px' }}>{subtask}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}