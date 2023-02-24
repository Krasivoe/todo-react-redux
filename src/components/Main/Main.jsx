import styles from './Main.module.scss';
import TodoApp from '../TodoApp/TodoApp.jsx';

const Main = () => {
  return (
    <main className="container">
      <section className={styles.main}>
        <h2 className={styles.title}>Задачи</h2>
        <TodoApp />
      </section>
    </main>
  );
};

export default Main;
