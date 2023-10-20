import React, { useEffect, useState } from 'react'
import avatarImg from '../assets/images/Ellipse 22.png'
import { Rating } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Review from '../components/Review'

const Profile = () => {

  const data = [
    {
      id: 1,
      review: 'топовые курсы для начинающих, топовые курсы для начинающих, топовые курсы для начинающих, топовые курсы для начинающих,',
      rating: 5,
      name: 'Иванов Иван Иванович',
      solved_at: '25.05.2023',
    },
    {
      id: 2,
      review: 'топовые курсы для начинающих, топовые курсы для начинающих, топовые курсы для начинающих, топовые курсы для начинающих,',
      rating: 5,
      name: 'Иванов Иван Иванович',
      solved_at: '25.05.2023',
    },
    {
      id: 3,
      review: 'топовые курсы для начинающих, топовые курсы для начинающих, топовые курсы для начинающих, топовые курсы для начинающих,',
      rating: 5,
      name: 'Иванов Иван Иванович',
      solved_at: '25.05.2023',
    },
    {
      id: 4,
      review: 'топовые курсы для начинающих, топовые курсы для начинающих, топовые курсы для начинающих, топовые курсы для начинающих,',
      rating: 5,
      name: 'Иванов Иван Иванович',
      solved_at: '25.05.2023',
    },
    {
      id: 5,
      review: 'топовые курсы для начинающих, топовые курсы для начинающих, топовые курсы для начинающих, топовые курсы для начинающих,',
      rating: 5,
      name: 'Иванов Иван Иванович',
      solved_at: '25.05.2023',
    }
  ]
  const [value, setValue] = useState(5)
  const navigate = useNavigate()
  const token = true
  useEffect(() => {
    const redirectPage = () => {
      if (!token) {
        navigate('/')
      }
    }
    redirectPage()
  }, [])
  return (
    <div className='profile'>
      <div className="container">
        <div className="profile__wrapper">
          <div className="profile__info">
            <div className="profile__img">
              <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/b6165c09-d376-436e-a8fa-78492ad1f98a/220x330" alt="" />
            </div>
            <div className="profile__status">
              <h4 className="profile__name">
                {data[0].name}
              </h4>
              <p className="profile__text">тут например будет на какие курсы он ходил</p>
              <p className="profile__text">здесь имя ментора</p>
              <p className="profile__text">информация об успеваемости за период обучения</p>
              <p className="profile__text">проекты которые он сделал за период обучения</p>
            </div>
          </div>

          <p className="profile__subtitle">Мои отзывы</p>
          <div className="profile__directions">

            {
              data.map((item) => (
                <Review key={item.id} item={item} actions/>
              ))
            }


          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile