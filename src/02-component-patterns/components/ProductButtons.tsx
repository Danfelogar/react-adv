import { useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

// interface ProductButtonsProps {
//     counter: number;
//     increaseBy: (value: number) => void;
//     //cosejo: si no sabes que variable le corresponde a cada parametro que recibes es recomendable hacer cursorpointer en la variable original para ver que retorna
// }

export interface Props {
    className?: string;
    style?: React.CSSProperties;
}

export  const ProductButtons =({className,style}: Props)=>{
    // { counter, increaseBy }: ProductButtonsProps estas eran las dependencias antes del context
    const { increaseBy, counter } = useContext(ProductContext);

    return(
        <div className={ `${styles.buttonsContainer} ${className}` } style={ style }>
            <button className={ styles.buttonMinus }
            onClick={()=> increaseBy(-1)}
            >-</button>

            <div className={ styles.countLabel }>{counter}</div>

            <button className={ styles.buttonAdd }
            onClick={()=> increaseBy(+1)}
            >+</button>
        </div>
    );
}