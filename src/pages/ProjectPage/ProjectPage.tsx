import React from 'react'
import { Projects } from '../../components/Projects/Projects'
import { NavigationMenu } from '../../shared/NavigationMenu/NavigationMenu'

export const ProjectPage = () => {
  return (
    <div className=''>
      <NavigationMenu isSticky={true}/>
      <Projects/>
    </div>
  )
}
