import { ReactElement } from "react";

export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    //es opcional puede recibir o no un solo elemento de react o un arreglo de varios elementos
}

export interface Product {
    id:string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: ({ title }: {title?: string })=> JSX.Element,
    Image: ({ img }: { img?: string })=> JSX.Element,
    Buttons: () => JSX.Element,
}