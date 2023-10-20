import React from 'react'
import Directions from '../components/Directions'
import bgVideo from '../assets/videos/bg-video.mp4'

const Main = () => {
  return (
    <>
      <div className='main'>
        <div className='main__frame'>
          <video src={bgVideo} width='100%' height='100%' autoPlay loop="loop" ></video>
        </div>
        <div className="container">
          <div className="main__wrapper">
            <div className="main__text">
              <h3 className="main__title">
                Начни путь <br/> в программировании
              </h3>
              {/* <h3 className="main__title">
                Продолжай расти вместе с нами
              </h3> */}
              <p className="main__description">
                Выбери свой формат — от тестовых краткосрочных курсов, до 9 месяцев полноценного обучения профессии
              </p>
            </div>

            <div className="main__ifno">
              <div className="main__img"><img src="" alt="" /></div>
              <div className="main__img"><img src="" alt="" /></div>
            </div>
          </div>
        </div>
        <a href="#directions" className="main__link"><i class="fa-solid fa-chevron-down"></i></a>
      </div>
      <Directions />
    </>
  )
}

export default Main