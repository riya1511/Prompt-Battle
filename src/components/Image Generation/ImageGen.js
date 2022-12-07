import React, { useState, useRef, useEffect } from 'react'
import './ImageGen.css'
import Wrapper from '../Wrapper/Wrapper'
import axios from 'axios';

function GenerateImg() {

  const displayImg = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo(
      {
        top: elementRef.current.offsetTop,
        behavior: 'smooth'
      }
    )
  }

  const [info, setInfo] = useState(
    {
      prompt: "",
      size: "",
      number: 4,
      url: "",
    }
  );
  const [selectedURL, setSelectedURL] = useState("");
  const [imgURL, setImgURL] = useState([]);

  function handleChange({target :{ name , value}}){
      setInfo(prevValue => ({...prevValue,[name]:value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = "http://3.6.65.227:8080/api/submission";
    axios.post(url, {
      url: info.url,
    })
    .then(res => {
      console.log(res.data);
    });
  };

  const generateImg = async () => {
    const url = "http://3.6.65.227:8080/api/generate-image";
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
    const url = "http://3.6.65.227:8080/api/generate-variants";
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
      const response = await axios.get("http://3.6.65.227:8080/generate-img")
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
      <div className='flex-col borders'>
        <h1 className='fc-white title'>{' >Image Generation '}</h1>
        <div className='flex-col fc-white imgGen'>
          <form onSubmit={handleSubmit}>


          <div class="form-floating">
            <textarea
                className="form-control inputFeilds" 
                placeholder="Enter your prompt here" 
                id="floatingTextarea"
                name='prompt'
                onChange={handleChange}
            >
            </textarea>
            <label for="floatingTextarea">Comments</label>
          </div>


          <div className="form-floating">
              <input 
                  type="text" 
                  id='floatingName' 
                  onChange={handleChange} 
                  className={`form-control inputFeilds`} 
                  placeholder="Vinay"
                  name='name'
                  value={info.size}
              />
              <label htmlFor="floatingName">Name</label>
          </div>
            
            <div className='input-container'>
              <label>Size</label>
              <select class="form-select" value={info.size}>
                <option value="1">1</option>
                <option value="4">4</option>
              </select>
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
        </div>

        <div ref={displayImg}>
          {console.log(selectedURL)}
        </div>
      </div>
    </Wrapper>
  )
}

export default GenerateImg