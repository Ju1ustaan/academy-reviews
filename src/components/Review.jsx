import React from 'react'
import { Rating } from '@mui/material'

const Review = ({ item, actions }) => {
    return (
        <div className="profile__reviews">
            <div>
                <p className="profile__text">
                    {item.review}
                </p>
                <Rating name="read-only" value={item.rating} readOnly />
            </div>
            <div className='profile__desc'>
                <p className="profile__text">Дата публикации</p>
                <p className="profile__text">{item.solved_at}</p>
            </div>
            {
                actions && <div className="profile__actions">
                    <button className="profile__action profile__edit"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button className="profile__action profile__delete"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            }
        </div>
    )
}

export default Review