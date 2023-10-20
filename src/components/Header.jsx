import React from 'react'
import academyLogo from '../assets/icons/academy-logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const token = true
    return (
        <div className='header'>
            <div className="container">
                <div className="header__wrapper">
                    <div className='header__wrapper'>
                        <div className="header__logo">
                            <div className="header__img"><img src={academyLogo} alt="" /></div>
                        </div>
                        <div className="header__nav">
                            <NavLink to='/' className="header__link">Главная</NavLink>
                            <NavLink to='/directions' className="header__link">Курсы</NavLink>
                        </div>
                    </div>
                    {
                        !token ?
                            <div className="header__actions">
                                <button className="second__btn accent__btn">Войти</button>
                                <button className="accent__btn">Регистрация</button>
                            </div> :
                            <NavLink to='/profile'>
                                <div className='header__avatar'>
                                    <i class="fa-regular fa-user"></i>
                                </div>
                            </NavLink>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header