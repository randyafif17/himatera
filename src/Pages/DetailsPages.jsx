import React, { useState } from "react"
import "./details.css"
// import "../../components/header/header.css"
// import avatar from "../assets/img_avatar.png"
import img from "../assets/b5.jpg"
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { blog } from "../assets/data/Data"

    export const DetailsPages = () => {
    const { id } = useParams()
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        let blogs = blog.find((blogs) => blogs.id === parseInt(id))
        if (blogs) {
        setBlogs(blogs)
        }
    }, [])

return (
    <>
        {blogs ? (
            <section className='singlePage'>
            <div className='container'>
                <div className='left'>
                    <img src={blogs.cover} alt='cover' />
                </div>
                <div className='right'>
                    <h1>Betadine Feminine Wash</h1>
                    <p>{blogs.desc}</p>
                    <p>Author: Sunil</p>
                </div>
            </div>
            </section>
        ) : null}
        </>
    )
}