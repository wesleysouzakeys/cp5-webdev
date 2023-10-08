import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../routes/estilo.module.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


function Home() {
  const [slidePerView, setSlidePerView] = useState(2);

  const imagens = [

    { id: '1', image: './src/assets/mexican1.jpg' },
    { id: '3', image: './src/assets/mexican2.jpg' },
    { id: '2', image: './src/assets/mexican3.jpg' },
  ];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidePerView(2);
      } else {
        setSlidePerView(1);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);


  return (
    <section>

      <center>
        <h1 style={{ marginBottom: '20px' }}>Bem vindo ao Restaurante El Sabor</h1>
      </center>

      <Swiper
        slidePerView={slidePerView}
        pagination={{ clickable: true }}
        navigation
      >
        {imagens.map((item) =>
          <SwiperSlide key={item.id}>
            <img src={item.image} alt='slide' className={styles.slideItem} />
          </SwiperSlide>
        )}
      </Swiper>

      <center>
        <h3>Nosso restaurante conta com uma variedade incrível de refeições que irão te surpreender!</h3>
      </center>

    </section>
  )
}
export default Home