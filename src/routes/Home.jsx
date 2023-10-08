import {useState,useEffect} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import styles from '../routes/estilo.module.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


function Home (){
  //Hook- useState
  const [slidePerView, setSlidePerView]=useState(2);

  // criando o objeto de imagens
  const imagens =[

    {id:'1', image: './src/assets/mexican1.jpg'},
    {id:'2', image: './src/assets/mexican2.jpg'},
    {id:'3', image: './src/assets/mexican3.jpg'},
  ];
  //criando o hook useEfect - efeito colateral

  useEffect(()=>{
    //criar a função de responsividade no slideshow
    function handleResize() {
      if(window.innerWidth < 720){
        setSlidePerView(2);
      }else {
        setSlidePerView(1);
      }
    }
    //chamando a função 
    handleResize();
    //evento vai modificar toda que diminuir a página
    window.addEventListener('resize',handleResize);

    //como estamos usando o useEffect é bom sair do evento e
    //desmontarmos para não perder performace
    return ()=>{
      window.removeEventListener('resize', handleResize)
    }
    //retornando um array vazio
  },[]);


  return(
    <section>
      <Swiper
      slidePerView={ slidePerView}
      pagination={{clickable:true}}
      navigation
      >
        {imagens.map((item)=>
          <SwiperSlide key={item.id}>
            <img src={item.image} alt='slide' className={styles.slideItem}/>
          </SwiperSlide>
        )}

      </Swiper>

    
    </section>
  )
}
export default Home