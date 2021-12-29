import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

import noImage from '../assets/no-image.jpg';

export interface Props {
    className?: string,
    img?: string,
    style?: React.CSSProperties
}
// export const ProductImage =({img = ''})=>{
    //un string vacio para un ternario significa que no tiene valor

export const ProductImage =({img, className,style}: Props)=>{
    //un string vacio para un ternario significa que no tiene valor

    const { product } = useContext(ProductContext);

    let imgToShow: string;

    if(img) {
        imgToShow = img;
    } else if (product.img) {
        imgToShow = product.img;
    }else {
        imgToShow = noImage;
    }

    return(
        <img className={ `${styles.productImg} ${className}` } src={ imgToShow } alt="Product img" style={style} />
    )
}