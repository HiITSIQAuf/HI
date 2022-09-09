import React from 'react'
import { BsTelegram, BsFacebook } from 'react-icons/bs'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'
import './navbar.css'

export const Navbar = () => {

    return (
        <nav>
            <div className='nav_top'>
                <div className='icon_all'>
                <BsTelegram className='icon_sin'/>
                <AiFillInstagram className='icon_sin'/>
                <BsFacebook className='icon_sin'/>
                <AiFillTwitterCircle className='icon_sin'/>
                </div>
                <span className='span'>
                    <div className="left">
                        <div className="one"></div>
                        <div className="two"></div>
                    </div>
                    <div className="right">
                        <div className="one"></div>
                        <div className="two"></div>
                    </div>
                </span>
                <div className='search'>
                    <div className='mesh'></div>
                    <div className="mesh1"></div>
                </div>
            </div>
            
            <div className='nav_bot'>
                <ul>
                    <li><a href='../'>Дом</a></li>
                    <li><a href='#newhistory'>Новая история</a></li>
                    <li><a href='#portfolia'>Портфолио</a></li>
                    <li><a href='#locat'>Пасположение</a></li>
                </ul>
            </div>
        </nav>
    )
}
