import styles from "./page.module.css";
import course from "../course.json"

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <ul>
                    {course.lessons.map((lesson) => {
                        return (
                            <li key={lesson.name}>
                                <h2>{lesson.name}</h2>
                                <p>{lesson.title}</p>
                            </li>
                        );
                    })
                    }
                </ul>
            </main>
        </div>
    );
}
