import React from 'react'
import { Link } from 'react-router-dom'

import Rating from '@mui/material/Rating'
import jsImage from '../assets/images/javascript-image.png'
import pythonImage from '../assets/images/Python-Symbol.jpg'
import cImage from '../assets/images/c#-image.png'
import javaImage from '../assets/images/java-image.jpg'
import bgImg1 from '../assets/images/programming(1).jpg'
import bgImg2 from '../assets/images/programming(2).jpg'
import bgImg3 from '../assets/images/programming(3).jpg'

const Directions = () => {

    const data = [
        {
            id: 1,
            img: jsImage,
            title: 'Frontend JavaScript',
            rating: 5,
            reviews_count: 1000
        },
        {
            id: 2,
            img: cImage,
            title: 'Backend C#',
            rating: 4,
            reviews_count: 105
        },
        {
            id: 3,
            img: pythonImage,
            title: 'Backend python',
            rating: 1,
            reviews_count: 10
        },
        {
            id: 4,
            img: javaImage,
            title: 'Backend Java',
            rating: 3,
            reviews_count: 2305
        },
    ]
    return (
        <div className='directions' id='directions'>
            <div className="directions__images">
                <div className="directions__bgimg"><img src={bgImg1} alt="backgraund img" /></div>
                <div className="directions__bgimg"><img src={bgImg2} alt="backgraund img" /></div>
                <div className="directions__bgimg"><img src={bgImg3} alt="backgraund img" /></div>
            </div>
            <div className="container">
                <h2 className="directions__name">
                    Курсы
                </h2>
                <hr className='direction__line' />
                <div className="directions__wrapper">
                    {
                        data.map((item) => (
                            <div className="directions__card">
                                <div className="directions__img">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <div className="directions__desc">
                                    <h2 className="directions__title">{item.title}</h2>
                                    <div className='descriptions__dflex'>
                                    <p className="directions__info">Рейтинг</p>
                                    <Rating name="read-only" value={item.rating} readOnly  className='directions__rating'/>
                                    </div>
                                    <p className="directions__info">{`Отзывы: ${item.reviews_count}`}</p>
                                    <Link to={`/directions/${item.id}`}>
                                        <button className="direction__btn accent__btn">Смотреть отзывы</button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}

export default Directions