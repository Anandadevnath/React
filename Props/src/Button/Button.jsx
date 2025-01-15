import styles from './Button.module.css';

function Button() {

  const inlinecss = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }

  return (
    <div className={styles.container}>
      <button className={styles.button}>Click me!</button>
      <button style={inlinecss}>Click me!</button>
    </div>
  )
}

export default Button;