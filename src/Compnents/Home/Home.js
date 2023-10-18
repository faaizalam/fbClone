import React from 'react'
import Layout from '../Layout/Layout'
import { Person } from '@material-ui/icons'
import { Rating } from '../Rating'
import { LSidebar } from '../LeftSidebar/LSidebar'
import RSidebar from '../rightsidebar/RSidebar'
import { Feed } from '../MainFeeds/Feed'

export let Stars=[{id:1,"rating":4},{id:3,"rating":3},{id:4,"rating":5},]
export const Home = () => {
  return (
    // <Rating/>
    <Layout>
    <div className='mainchild'>
     <LSidebar/> 
     <Feed/>

     <RSidebar/>
     
      

    
    </div>

    </Layout>
  )
}
