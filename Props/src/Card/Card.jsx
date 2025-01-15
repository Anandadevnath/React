import styles from './Card.module.css';
import images from 'E:/Web development/frontend/React/PROPS/public/mista.png';

function Card() {
    return (
        <div className={styles.Card}>
            <img src={images} alt="" />
            <h2>Card</h2>
            <p>I make stupid stuff</p>
        </div>
    );
}

export default Card;