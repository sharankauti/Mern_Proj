import React from 'react'
import styles from '../../../Shared/Componets/Navigation/MainHeader.module.css'
import { NavLink } from 'react-router-dom'
const NavLinks = (props) => {
  return (
        <ul className={styles.navList}>
            <li className='px-4'>
                <NavLink to='/' exact activeStyle={{backgroundColor:'rgba(0, 0, 0, 0.33)',padding:'5px',borderRadius:'4px'}}>ALL USERS</NavLink>
            </li>
            <li className='px-4'>
                <NavLink to='/u1/places' activeStyle={{backgroundColor:'rgba(0, 0, 0, 0.33)',padding:'5px',borderRadius:'4px'}}>My PLACES</NavLink>
            </li>
            <li className='px-4'>
                <NavLink to='/places/new'>ADD PLACES</NavLink>
            </li>
            <li className='px-4'>
                <NavLink to='/'>Authenticate</NavLink>
            </li>
        </ul>
  )
}

export default NavLinks