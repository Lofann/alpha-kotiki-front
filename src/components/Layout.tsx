import React, { Fragment } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
function Layout() {
    return (
        <Fragment>
            <header>
                <nav>
                    <Navbar/>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>

        </Fragment>
    );
}


export default Layout