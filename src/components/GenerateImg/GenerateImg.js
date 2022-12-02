import React, { useState, useRef } from 'react'
import './GenerateImg.css'
import Wrapper from '../Wrapper/Wrapper'
import DisplayImg from '../DisplayImg/DisplayImg'
import { MdOutlineExpandMore } from "react-icons/md";
import ScrollToTop from '../ScrollToTop';
import { db } from '../../firebase';

function GenerateImg() {

  const displayImg = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  const [info, setInfo] = useState({
    prompt: "",
    size: "",
    number: "",
    url: ""
  });

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    db.collection('prompt')
    .add({
      prompt: info.prompt,
      size: info.size,
      number: info.number,
      url: info.url
    })
    .then(() => {
      console.log(info);
    })
    .catch((error) => {
      console.log(error.message);
    });
    
    setInfo({ prompt: "", size: "", number: "", url: "" });
  };

  return (
    <Wrapper>
      <ScrollToTop/>
      <div className='imgWrapper'>
        <h1 className='fc-white'>{' >Image Generation '}</h1>
        <div className='flex-col fc-white content'>
          <form onSubmit={handleSubmit}>
            <div className='input-container full-width'>
              <label for="">Prompt</label>
              <textarea name="prompt" cols='20' rows='7' value={info.prompt} onChange={handleChange} />
            </div>
            
            <div className='input-container'>
              <label>Size</label>
              <input type='text' name='size' value={info.size} onChange={handleChange} />
            </div>
            
            <div className='input-container'>
              <label>Number</label>
              <input type='text' name='number' value={info.number} onChange={handleChange} />
            </div>
            
            <div>
              <button className='form-btn button fs-200 fc-white extrabold'>Generate</button>
            </div>

            <div>
              <button className='form-btn button fs-200 fc-white extrabold'>Get a Variant</button>
            </div>
            
            <div className='input-container full-width'>
              <label>URL</label>
              <input type='text' name='url' value={info.url} onChange={handleChange} />
            </div>
            
            <div className='full-width'>
              <button className='form-btn button fs-200 fc-white extrabold'>Submit</button>
            </div>
            
          </form>
        </div>

        <div className='scroll flex-col' onClick={() => scrollToSection(displayImg)}>
          <h3 className='fs-50 fc-white'>Scroll for Images</h3>
          <MdOutlineExpandMore className='fc-white fs-600 extrabold' />
        </div>

        <div ref={displayImg}>
          <DisplayImg />
        </div>
      </div>
    </Wrapper>
  )
}

export default GenerateImg