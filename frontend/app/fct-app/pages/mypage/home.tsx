import React from 'react'
import Background from '../../components/Background'
import Menubar from '@/components/Menubar'
import SubMenu from '../../components/SubMenu'

const home = () => {
  return (
    <>
       <Menubar/>
       <Background>
           <SubMenu/>
        </Background>
    </>
  )
}

export default home