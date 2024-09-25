import React from 'react'
import { Search } from '@material-ui/icons';
import "./Header.css";
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';


function Header() {
    const [{user},dispatch] = useDataLayerValue()
  return (
    <div className='header'>
        <div className='header-left'>
            <Search />
            <input placeholder = 'Search..' type = 'text'/>
            
        <div className ="header-right">
            <Avatar scr = {user?.image[0]?.url} 
            alt={user?.display_name} />
            <h4>{user?.display_name}</h4>
        </div>

        </div>

    </div>
  )
}

export default Header
