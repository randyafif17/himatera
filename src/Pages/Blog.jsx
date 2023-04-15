import React from "react"
import { Article } from "../Components/article/Article"
import Navbar from "../Components/Navbar"
import Footer from "../Components/footer/Footer"

const Blog = () => {
  return (
    <>
    <Navbar />
    <div>
        <Article />
    </div>
    <Footer />
    </>
  )
}

export default Blog;