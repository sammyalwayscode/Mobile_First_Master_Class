import React from 'react'
import { HeaderWrapper, Logo, ShowLinks, ProLinks } from '../AppStyle/AppStyle'

function Header() {
  return (
    <HeaderWrapper>
      <Logo>
        <h1>Logo</h1>
      </Logo>

      <ShowLinks>
        <ProLinks to='/'>Home</ProLinks>
        <ProLinks to='/'>About</ProLinks>
        <ProLinks to='/'>Contact</ProLinks>
      </ShowLinks>
    </HeaderWrapper>
  )
}

export default Header
