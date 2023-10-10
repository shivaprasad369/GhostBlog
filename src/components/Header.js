import React from 'react'
import classes from './Header.module.css'

export default function Header() {
  return (
    <>
    <ul className={classes.list}>
        <li>
            DashBoard
        </li>
        <li>Posts</li>
        <li>Link</li>
    </ul>
    </>
  )
}
