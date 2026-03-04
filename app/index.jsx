import React from 'react';
import { tasks } from '../data/tasks.json';
export default function LandingPage() {

    return (
        <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Junior Software Tutorial</h1>
            <p>A comprehensive guide to building modern web applications</p>
            
            {/* Hero Section outlining the scope of the project */}
            <div style={{ marginTop: '30px' }}>
                {tasks.map((task, index) => (
                    <div key={index} style={{ marginBottom: '30px', borderLeft: '4px solid #0366d6', paddingLeft: '20px' }}>
                        <h2>{task.title}</h2>
                        <p style={{ color: '#666' }}>{task.description}</p>
                        <ul style={{ marginLeft: '20px' }}>
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