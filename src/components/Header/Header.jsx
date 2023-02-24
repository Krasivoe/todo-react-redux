import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <h1 className={styles.title}>Список задач с использованием Redux</h1>
      </div>
    </header>
  );
};

export default Header;
