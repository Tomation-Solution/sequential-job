import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BiFilter} from 'react-icons/bi'
import { SearchBarContainer } from './SearchBar.style'


export const SearchBar = () => {
  return (
    <SearchBarContainer>
        <AiOutlineSearch/>
        <BiFilter/>
        <input type="text" placeholder='Search'/>
    </SearchBarContainer>
  )
}


export default SearchBar