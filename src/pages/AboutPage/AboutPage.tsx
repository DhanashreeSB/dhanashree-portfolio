import React from 'react'
import { About } from '../../components/About/About'
import { NavigationMenu } from '../../shared/NavigationMenu/NavigationMenu'

export const AboutPage = () => {
  return (
    <div>
      <NavigationMenu/>
      <About/>
    </div>
  )
}
