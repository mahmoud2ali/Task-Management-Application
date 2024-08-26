import styles from "./page.module.css"


function Task({ title, content, onDelete }) {
  


    return (
        <div className={styles.main}>
            <div>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
            <button onClick={onDelete}>delete</button>
        </div>
    )
}

export default Task