import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState([
        
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting',
        day: 'Feb 12th at 5:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Lunch',
        day: 'Feb 18th at 12:30pm',
        reminder: false,
    }, 
  ])

  // Add task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task))
  }


  return (
    // This is not html, it is JavaScript Syntax Extension (JSX)
    // We can pass a title to the Header.js file from the root App.js -> the Header.js is dynamic and will render whatever is passed
    // We do this with <Header title={'text to pass'} />
    // We use propTypes within Header.js to make sure the title is a specific datatype, otherwise it isn't rendered
    // If nothing is passed, the we can define a defaultProp in Header.js (this is what we've done here)
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      : 'No Tasks To Show'}


    </div>
  );
}



export default App;
