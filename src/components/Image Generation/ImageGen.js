import React, { useState, useRef, useEffect } from 'react'
import './ImageGen.css'
import 'bootstrap/dist/css/bootstrap.min.css';
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
      theme: "",
      number: "",
      // url: "",
    }
  );
  const [selectedURL, setSelectedURL] = useState("");
  const [imgURL, setImgURL] = useState([]);

  function handleChange({target :{ name , value}}){
      setInfo(prevValue => ({...prevValue,[name]:value}))
      console.log(value);
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
      theme: info.theme,
      number: info.number,
    })
    .then(res => {
      console.log(res.data);
    });
  };

  // const generateVari = async () => {
  //   const url = "http://3.6.65.227:8080/api/generate-variants";
  //   axios.post(url, {
  //     size: info.size,
  //     number: info.number,
  //     selectedURL: selectedURL,
  //   })
  //   .then(res => {
  //     console.log(res.data);
  //   });
  // };

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


          <div class="form-floating mb-3">
            <textarea
                className="form-control inputFeilds" 
                placeholder="Enter your prompt here"
                rows='5' 
                col='5'
                id="floatingTextarea"
                name='prompt'
                onChange={handleChange}
            >
            </textarea>
            <label for="floatingTextarea">Prompt</label>
          </div>


          <div className="form-floating mb-3">
              <input 
                  type="text" 
                  id='floatingInput' 
                  onChange={handleChange} 
                  className='form-control inputFeilds'
                  placeholder="Vinay"
                  name='name'
                  value={info.theme}
              />
              <label htmlFor="floatingName">Theme</label>
          </div>
            
            {/* <div className='input-container'>
              <label>Size</label>
              <select class="form-select" value={info.size}>
                <option value="1">1</option>
                <option value="4">4</option>
              </select>
              <input type='text' name='size' value={info.size} onChange={handleChange} />
            </div> */}

            <div className='size-radio flex-row'>
              <p>Number of Images: </p>
              <div className="form-check form-check-inline mb-3">
            <label class="form-check-label" for="inlineRadio1">1</label>
              <input className="form-check-input" id="inlineRadio1" type='radio' name='number1' value='1' checked={info.number === "1"} onChange={handleChange} />
            </div>

            <div className="form-check form-check-inline mb-3">
            <label class="form-check-label" for="inlineRadio2">4</label>
              <input className="form-check-input" id="inlineRadio1" type='radio' name='number4' value='4' checked={info.number === "4"} onChange={handleChange} />
            </div>
            </div>
            
            

            <div className='d-grid gap-2 mb-3'>
              <button className='button fs-200 fc-white extrabold' onClick={generateImg}>Generate</button>
            </div>

            {/* <div>
              <button className='form-btn button fs-200 fc-white extrabold' onClick={generateVari}>Get a Variant</button>
            </div> */}
            
            {/* <div className='input-container full-width'>
              <label>URL</label>
              <input type='text' name='url' value={info.url} onChange={handleChange} />
            </div> */}
            
            <div className='d-grid gap-2 mb-3'>
              <button className='button fs-200 fc-white extrabold'>Submit</button>
            </div>
            
          </form>
        </div>
        <div className='scroll flex-col' onClick={() => scrollToSection(displayImg)}>
          <h3 className='fs-50 fc-white'>Scroll for Images</h3>
          <h3 className='fs-50 fc-white'>v</h3>
        </div>

        <div ref={displayImg}>
          {console.log(selectedURL)}
        </div>
      </div>
    </Wrapper>
  )
}

export default GenerateImg