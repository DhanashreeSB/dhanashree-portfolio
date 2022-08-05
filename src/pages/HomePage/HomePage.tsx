import React from 'react'
import { Home } from '../../components/Home/Home'
import { NavigationMenu } from '../../shared/NavigationMenu/NavigationMenu'

export const HomePage = () => {
  return (
    <div>
        <NavigationMenu isSticky={false}/>
        <Home/>
    </div>
  )
}
