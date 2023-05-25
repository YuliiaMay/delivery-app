import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";


const SharedLayout = () => {
    return ( 
        <>
            <header>
                <div>
                    <nav>
                        <NavLink to="/" >Home</NavLink>
                        <NavLink to="/shop" >Shop</NavLink>
                        <NavLink to="/cart">Cart</NavLink>
                    </nav>
                </div>
            </header>
            <main>
                <Suspense fallback={<div>Loading .... </div>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
}

export default SharedLayout;