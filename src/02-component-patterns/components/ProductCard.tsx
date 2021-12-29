import { createContext, ReactElement } from 'react';
import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';
import { Product, ProductContextProps } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    //es opcional puede recibir o no un solo elemento de react o un arreglo de varios elementos
    className?: string;
    style?: React.CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {

    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
        <div className={ `${styles.productCard} ${ className }` } style={ style }>
            { children }
            {/* <img className={ styles.productImg } src="./coffee-mug.png" alt="Coffe  Mug" /> */}
            {/* <ProductImage img={ product.img }/>

            <ProductTitle title={ product.title }/>

            <ProductButtons
            counter={counter}
            increaseBy={ increaseBy }  /> */}
        </div>
        </Provider>
    )
}


// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;