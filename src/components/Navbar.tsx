import React, { Fragment } from 'react';

import logo from '../resourses/KOTIK.png';
import {Link} from 'react-router-dom'

import { Linter } from 'eslint';
function Navbar() {
    return (
            <Fragment>
                <ul>
                    <li className="logo">
                        <img src={logo} alt=''></img>
                    </li>
                    <li>
                        <Link className="link page" to='/' >Главная</Link>
                    </li>
                    <li className='account'>
                        <Link className="link" to="/account">ФИО</Link>
                    </li>
                    <li className='login'>
                        <Link className="link " to='/'>Войти</Link>
                    </li>

                </ul>
            </Fragment>
    
    );
}


export default Navbar