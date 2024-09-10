import styles from "./page.module.css"


function Task({ title, content, onDelete }) {



    return (
        <div className={styles.main}>
            <div>
                <div className={styles.top}>
                    <h2>{title}</h2>
                    <button onClick={onDelete}>delete</button>
                </div>
                <p>{content}</p>
            </div>

        </div>
    )
}

export default Task