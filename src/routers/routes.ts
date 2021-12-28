import { lazy } from "react";
// import { LazyPage1 ,LazyPage2, LazyPage3 } from "../01-lazyload/pages";
// import { LazyLayout } from '../01-lazyload/layout/LazyLayout';
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path:string;
    Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/layout/LazyLayout'));
// const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2'));
// const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
    {
        // quiero  que todas las rutas sean procesadas aqui y se asi con este "to" esto es como redireccionar la ruta
        // to: '/lazyload/*',
        // path:'/lazyload/',
        to: '/lazyload', //=> eliminar el / del final para que el navlink detecte la ruta activa
        path: 'lazyload/*',
        // manera correcta de hacer las cosas
        Component: LazyLayout,
        name: 'lazyLayout-Dashboar'
    },
    {
        to: '/no-lazy',
        path:'no-lazy',
        Component: NoLazy,
        name: 'No Layzy'
    },
];



//     to: '/lazy2',
//     path:'lazy2',
//     Component: Lazy2,
//     name: 'lazy-2'

//     to: '/lazy3',
//     path:'lazy3',
//     Component: Lazy3,
//     name: 'lazy-3'
