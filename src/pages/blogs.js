import React from 'react'
import Callus from '../components/Callus'
import Layout from '../components/Layout'
import BlogSection from '../components/Pages/Blogs/BlogSection'

const blogs = () => {
    return (
        <Layout>
            <BlogSection heading="Our Blogs" />
            <Callus />
        </Layout>
    )
}

export default blogs
