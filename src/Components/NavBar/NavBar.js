import React from 'react'
import './NavBar.css'
import vinyl from '../../images/kindpng_810924.png'


export function NavBar(){
    return (
       
            <nav>
                <div className='iconTitle'>
                    <div>
                        <img className='imgVinyl' src={vinyl} alt ='discImg'></img>
                    </div>
                    <div>
                        <a className="nav-link title" href='/#'>Rock'Nyl</a>
                    </div>
                </div>
                <div className='linksPage'>
                        <ul className='listUl'>

                            <li className='listLi'>
                            
                                <a 
                                    className="nav-link text-light" 
                                    href="/"
                                    >Home
                                </a>

                            </li>
                            <li className='listLi'>
                            
                                <a 
                                    className="nav-link text-light" href="/post-top-5">
                                    Vinyls
                                </a>
                            </li>

                            <li className='listLi'>

                                <a 
                                    className="nav-link text-light" 
                                    href="/">
                                    Category
                                </a>
                            

                            </li>

                            <li className='listLi'>

                                <a 
                                    className='nav-link' 
                                    href="/aboutUs">
                                    My Account
                                </a>
                            
                            </li>
                        </ul>
                </div>
            </nav>
     
    )
}