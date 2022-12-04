import React from 'react'
import './DisplayImg.css'
import img from '../GenerateImg/img.jpg';

function DisplayImg({ src, setSelectedURL }) {

  const selected = (e) => {
    // console.log(e.target.src);
    setSelectedURL(e.target.src);
  }

  return (
    <div className='generated-imgs fc-white'>
      <div className='gallery'>
        {src.map( (url, i) => {
          return <img src={url} alt='generated-img' className='gallery__img' key={i} onClick={selected}></img>
        })}
        {/* <img src={src} alt='generated-img' className='gallery__img'></img>
        <img src={src} alt='generated-img' className='gallery__img'></img>
        <img src={src} alt='generated-img' className='gallery__img'></img> */}
        {/* <img src={img} alt='generated-img' className='gallery__img' onClick={selected}></img> */}
      </div>
    </div>
  )
}

export default DisplayImg