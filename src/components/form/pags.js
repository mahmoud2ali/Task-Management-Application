import styles from "./page.module.css"
import { useState } from "react"
import Task from "../task/page"

export default function Form() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [tasks, setTasks] = useState([])


    function save() {
        if(title && content)
        {
            setTasks([...tasks, {title, content}]);
            setTitle("");
            setContent("");
        }
    }

   
    function deleteTask(index) {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    }


    return (
        <div>
            <div className={styles.form}>
                <h1><span className = {styles.t}>t</span><span className ={styles.o1}>o</span><span className = {styles.d}>d</span><span className = {styles.o2}>o</span></h1>
                <h2>Add a new task</h2>
                <input type="text" value={title} placeholder="title" onChange={(e) => setTitle(e.target.value)} />
                <input type="text" value={content} placeholder="content" onChange={(e) => setContent(e.target.value)} />
                <button type="button" onClick={save}>Add</button>
            </div>
            <div className={styles.tasks}>
                {tasks.map((task, index) => (
                    <Task key={index} title={task.title} content={task.content} onDelete={() => deleteTask(index)}/>
                ) )}
            </div>

        </div>
    )
}