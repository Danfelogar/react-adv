import { Suspense } from 'react';
import { BrowserRouter, } from 'react-router-dom';
import { Routes, Route, NavLink , Navigate } from 'react-router-dom';

import { routes } from './routes';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import logo from '../logo.svg'

export const Navegation = () => {
    return (
        <Suspense fallback={<span>loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={ logo } alt="logo" />
                        <ul>
                            {
                                routes.map((route,idx)=>{
                                    return(
                                        <li key={idx}>
                                            <NavLink to={route.to} className={ ({ isActive }) => isActive ? 'nav-active' : '' }>{ route.name }</NavLink>
                                        </li>
                                    )
                                })
                            }
                            {/* <li>
                                <NavLink to="/lazy2" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 2</NavLink>
                            </li>
                            <li>
                                <NavLink to="/lazy3" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 3</NavLink>
                            </li> */}
                        </ul>
                    </nav>

                    <Routes>
                        {
                            routes.map((route,idx)=>{
                                return(
                                    <Route key={idx} path={route.path} element={ <route.Component /> } />
                                )
                            })
                        }
                        {/* <Route path="lazy2" element={ <LazyPage2/> } />
                        <Route path="lazy3" element={ <LazyPage3/> } /> */}

                        <Route path="/*" element={ <Navigate to= { routes[0].to } replace/> } />
                        {/* <Route path="/*" element={ <Navigate to= "/lazy1" replace/> } /> */}
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}
