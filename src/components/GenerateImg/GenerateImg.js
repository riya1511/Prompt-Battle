import React, { useState, useRef, useEffect } from 'react'
import './GenerateImg.css'
import Wrapper from '../Wrapper/Wrapper'
import DisplayImg from '../DisplayImg/DisplayImg'
import { MdOutlineExpandMore } from "react-icons/md";
import ScrollToTop from '../ScrollToTop';
import { db } from '../../firebase';
// import { Configuration, OpenAIApi } from "openai";
import axios from 'axios';

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
    number: 4,
    url: "",
  });
  const [selectedURL, setSelectedURL] = useState("");
  const [imgURL, setImgURL] = useState([]);

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = "/api/submission";
    axios.post(url, {
      url: info.url,
    })
    .then(res => {
      console.log(res.data);
    });

    // db.collection('prompt')
    // .add({
    //   prompt: info.prompt,
    //   size: info.size,
    //   number: info.number,
    //   url: info.url
    // })
    // .then(() => {
    //   console.log(info);
    // })
    // .catch((error) => {
    //   console.log(error.message);
    // });
    
    setInfo({ prompt: "", size: "", number: "", url: "" });
  };

  const generateImg = async () => {
    const url = "/api/generate-image";
    axios.post(url, {
      prompt: info.prompt,
      size: info.size,
      number: info.number,
    })
    .then(res => {
      console.log(res.data);
    });
  };

  const generateVari = async () => {
    const url = "/api/generate-variants";
    axios.post(url, {
      size: info.size,
      number: info.number,
      selectedURL: selectedURL,
    })
    .then(res => {
      console.log(res.data);
    });
  };

  async function fetchData() {
    try {
      const response = await axios.get("/generate-img")
      setImgURL(imgURL => imgURL.concat(response.data))
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <Wrapper>
      <ScrollToTop/>
      <div className='imgWrapper'>
        <h1 className='fc-white'>{' >Image Generation '}</h1>
        <div className='flex-col fc-white content'>
          <form onSubmit={handleSubmit}>
            <div className='input-container full-width'>
              <label htmlFor="">Prompt</label>
              <textarea name="prompt" cols='20' rows='7' value={info.prompt} onChange={handleChange} />
            </div>
            
            <div className='input-container'>
              <label>Size</label>
              <input type='text' name='size' value={info.size} onChange={handleChange} />
            </div>
            
            <div className='input-container'>
              <label>Number</label>
              <input type='number' name='number' maxLength='4' value={info.number} onChange={handleChange} />
            </div>
            
            <div>
              <button className='form-btn button fs-200 fc-white extrabold' onClick={generateImg}>Generate</button>
            </div>

            <div>
              <button className='form-btn button fs-200 fc-white extrabold' onClick={generateVari}>Get a Variant</button>
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
          <DisplayImg src={imgURL} setSelectedURL={setSelectedURL} />
          {console.log(selectedURL)}
        </div>
      </div>
    </Wrapper>
  )
}

export default GenerateImg