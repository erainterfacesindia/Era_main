import React from 'react'
import OurTeam from '../components/Pages/OurTeam/OurTeam'
import Layout from "../components/Layout"
import '../components/Style/global.css'
import OurAdvisors from '../components/Pages/OurTeam/OurAdvisors'

const team = () => {
    return (
        <Layout>
        <OurAdvisors/>
        <OurTeam/>
        </Layout>
    )
}

export default team
