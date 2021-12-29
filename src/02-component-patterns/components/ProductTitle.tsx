import { useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface Props {
    className?: string,
    title?: string,
    style?: React.CSSProperties,
}

//cuando es una sola propiedad puede ser manejado desde el mismo proveedor variables
// export const ProductTitle =({ title, className }: { title?: string, className?: string })=>{

export const ProductTitle =({ title, className, style }: Props)=>{

    const { product } = useContext(ProductContext);

    return(
        <span className={ `${styles.productDescription} ${className}` } style={style}>{ title ? title : product.title }</span>
    )
}