import React from 'react'
import { useState } from 'react';
const Maincontent = () => {
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Complete project update report', status: 'pending' },
        { id: 2, name: 'Team meeting at 11 AM', status: 'in-progress' },
        { id: 3, name: 'Send review emails', status: 'pending' }
    ]);

    const [announcements] = useState([
        'Company meeting tomorrow at 10 AM',
        'Deadline for Q4 report next Monday'
    ]);

    const [goals] = useState([
        { id: 1, name: 'Complete 5 client follow-ups', progress: 0.6 },
        { id: 2, name: 'Update weekly KPI metrics', progress: 0.4 }
    ]);

    const handleTaskToggle = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' } : task
            )
        );
    };

  return (
    <div>
      <section className='bg-teal-900 p-4 round rounded-lg'>
        <h2 className='text-3xl font-bold mb-2'>📝 Daily Tasks</h2>

        <ul className='space-y-2'>
            {tasks.map((task)=>(
                <li key={task} className='flex items-center justify-between  p-2 border-b'>
                    <span className={`${task.status=== 'completed' ? 'line-through text-gray-500' : ''}`}>{task.name}</span>
                    <button className= {`px-2 py-1 rounded ${task.status==='completed' ? 'bg-green-500' : 'bg-gray-300 text-slate-800'}`} onClick={()=> handleTaskToggle(task.id)}>{task.status ==='completed' ? 'undo' : 'completed'}</button>
                </li>
            ))}
        </ul>
      </section>

      <section className="bg-teal-900 p-4 rounded-lg shadow-lg mt-2">
                        <h2 className="text-2xl font-bold mb-2">📢 Announcements</h2>
                        <ul className="space-y-2 list-disc list-inside">
                            {announcements.map((announcement, index) => (
                                <li key={index}>{announcement}</li>
                            ))}
                        </ul>
        </section>

        <section className="bg-teal-900 p-4 rounded-lg shadow-lg mt-2" >
                    <h2 className="text-2xl font-bold mb-2">🎯 Goal Tracking</h2>
                    <ul className="space-y-4">
                        {goals.map((goal) => (
                            <li key={goal.id} className="flex justify-between items-center">
                                <span>{goal.name}</span>
                                <progress value={goal.progress} max="1" className="w-1/2"></progress>
                            </li>
                        ))}
                    </ul>
        </section>
    </div>
  )
}

export default Maincontent
