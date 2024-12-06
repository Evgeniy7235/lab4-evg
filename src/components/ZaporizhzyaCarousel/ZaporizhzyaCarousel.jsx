import React, { useState } from 'react';
import styles from './style.module.css';

const images = [
  'https://img.pravda.com/images/doc/8/8/8840c88-63545bf-gettyimages-1237411394.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/%D0%9D%D0%B0%D0%B4_%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%D0%BE%D0%BC_%D0%9C%D0%B5%D1%82%D0%B0%D0%BB%D1%83%D1%80%D0%B3%D1%96%D0%B2.jpg/280px-%D0%9D%D0%B0%D0%B4_%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%D0%BE%D0%BC_%D0%9C%D0%B5%D1%82%D0%B0%D0%BB%D1%83%D1%80%D0%B3%D1%96%D0%B2.jpg',
  'https://baza.zruchno.travel//upload/gallery_images/f00279e5-50e8-54be-88ce-5c6d3ec1f992/2b5ba8a2-08a8-ffb3-37c0-5c6dc3a9556a.jpeg?qwer=0.3464692534344793',
  'https://media.slovoidilo.ua/media/publications/16/157034/157034-1_large.jpg',
];

function ZaporizhzyaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function prevSlide() {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }

  function nextSlide() {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }

  function goToStart() {
    setCurrentIndex(0);
  }

  return (
    <div className={styles.carousel__container}>
      <div className={styles.carousel__image}>
        <img src={images[currentIndex]} alt="Zaporizhzhia" />
      </div>
      <div className={styles.carousel__buttons}>
        <button onClick={prevSlide}>Назад</button>
        <button onClick={nextSlide}>Вперед</button>
        <button onClick={goToStart}>На початок</button>
      </div>
    </div>
  );
}

export default ZaporizhzyaCarousel;
