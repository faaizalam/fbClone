import React from 'react'
import style from "./TimeLine.module.scss"
import Layout from '@/Compnents/Layout/Layout'
import { LSidebar } from '@/Compnents/LeftSidebar/LSidebar'
import RSidebar from '@/Compnents/rightsidebar/RSidebar'
import Profile from '@/Compnents/Profile/Profile'





const Timeline = () => {
  return (
    <Layout>
      <LSidebar/> 
      <Profile/>
      <RSidebar/>
    </Layout>
  )
}

export default Timeline
