import React from 'react'
import { useParams } from 'react-router-dom';

import Rating from '@mui/material/Rating';

import avatarImg from '../assets/images/Ellipse 22.png'
import jsImage from '../assets/images/javascript-girl.jpg'
import pythonImage from '../assets/images/python-bg.jpg'
import cImage from '../assets/images/csharp-girl.jpg'
import javaImage from '../assets/images/java-girl.jpg'

const Reviews = () => {
    const { id } = useParams()
    const defaultImg = [jsImage, cImage, pythonImage, javaImage]
    const data = [
        {
            img: avatarImg,
            review: 'топовые курсы для начинающих, топовые курсы для начинающих, топовые курсы для начинающих, топовые курсы для начинающих,',
            rating: 5,
            name: 'Иванов Иван Иванович',
            solved_at: '25.05.2023',
        },
        {
            img: avatarImg,
            review: 'топовые курсы для начинающих, топовые курсы для начинающих, топовые курсы для начинающих, топовые курсы для начинающих,',
            rating: 5,
            name: 'Иванов Иван Иванович',
            solved_at: '25.05.2023',
        },
        {
            img: avatarImg,
            review: 'топовые курсы для начинающих, топовые курсы для начинающих, топовые курсы для начинающих, топовые курсы для начинающих,',
            rating: 5,
            name: 'Иванов Иван Иванович',
            solved_at: '25.05.2023',
        },
        {
            img: avatarImg,
            review: 'топовые курсы для начинающих, топовые курсы для начинающих, топовые курсы для начинающих, топовые курсы для начинающих,',
            rating: 5,
            name: 'Иванов Иван Иванович',
            solved_at: '25.05.2023',
        },
        {
            img: avatarImg,
            review: 'топовые курсы для начинающих, топовые курсы для начинающих, топовые курсы для начинающих, топовые курсы для начинающих,',
            rating: 5,
            name: 'Иванов Иван Иванович',
            solved_at: '25.05.2023',
        }
    ]
    return (
        <div className='reviews' style={{ backgroundImage: `url(${defaultImg[id - 1]})` }}>
            <div className="container">
                <h2 className="reviews__title">Название курса</h2>
                <div className="reviews__wrapper">

                    {
                        data.map((item) => (
                            <div className="reviews__reviews">
                                <div className="reviews__avatar">
                                    <img src={item.img} alt="" />
                                </div>
                                <div>
                                    <p className="reviews__text">
                                        {item.review}
                                    </p>
                                    <Rating name="read-only" value={item.rating} readOnly />
                                </div>
                                <div className='reviews__desc'>
                                    <p className="reviews__name">{item.name}</p>
                                    <p className="reviews__text">{item.solved_at}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Reviews