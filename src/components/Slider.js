import React from 'react';
import '../components/Slider.css';

function Slider() {
   window.onload = function() {
      let sliderImages = document.querySelectorAll('.slide'),
         arrowLeft = document.querySelector('#arrow-left'),
         arrowRight = document.querySelector('#arrow-right'),
         current = 0;
      // Clear all images
      function reset() {
         for (let i = 0; i < sliderImages.length; i++) {
            sliderImages[i].style.display = 'none';
         }
      }
      // Init slider
      function startSlide() {
         reset();
         sliderImages[0].style.display = 'block';
      }
      // Show prev
      function slideLeft() {
         reset();
         sliderImages[current - 1].style.display = 'block';
         current--;
      }
      // Show next
      function slideRight() {
         reset();
         sliderImages[current + 1].style.display = 'block';
         current++;
      }
      // Left arrow click
      arrowLeft.addEventListener('click', function() {
         if (current === 0) {
            current = sliderImages.length;
         }
         slideLeft();
      });
      // Right arrow click
      arrowRight.addEventListener('click', function() {
         if (current === sliderImages.length - 1) {
            current = -1;
         }
         slideRight();
      });
      startSlide();
   };

   // create onChangeSlide Arrow Function
   const onChangeSlide = index => {
      let sliderImages = document.querySelectorAll('.slide');
      for (let i = 0; i < sliderImages.length; i++) {
         sliderImages[i].style.display = 'none';
      }
      sliderImages[index].style.display = 'block';
   };

   return (
      <div className="wrap">
         <div id="arrow-left" className="arrow"></div>
         <div id="slider">
            <div className="slide slide1">
               <div className="slide-content"></div>
            </div>
            <div className="slide slide2">
               <div className="slide-content"></div>
            </div>
            <div className="slide slide3">
               <div className="slide-content"></div>
            </div>
            <div className="slide slide4">
               <div className="slide-content"></div>
            </div>
            <div className="slide slide5">
               <div className="slide-content"></div>
            </div>
         </div>
         <div id="arrow-right" className="arrow"></div>
         <div className="nav">
            <div onClick={() => onChangeSlide(0)} className="dot"></div>
            <div onClick={() => onChangeSlide(1)} className="dot"></div>
            <div onClick={() => onChangeSlide(2)} className="dot"></div>
            <div onClick={() => onChangeSlide(3)} className="dot"></div>
            <div onClick={() => onChangeSlide(4)} className="dot"></div>
         </div>
      </div>
   );
}
export default Slider;
