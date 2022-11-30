import React from 'react'
import './GenerateImg.css'
import Wrapper from '../../components/Wrapper/Wrapper'

function GenerateImg() {
  return (
    <Wrapper>
      <div className='imgWrapper'>
        <h1 className='fc-white'>{' >Image Generation '}</h1>
        <div className='flex-col fc-white content'>
          <form>
            <p className='full-width'>
              <label for="prompt">Prompt</label>
              <textarea name="prompt" cols='20' rows='7' />
            </p>
            
            <p>
              <label>Size</label>
              <input />
            </p>
            
            <p>
              <label>Number</label>
              <input />
            </p>
            
            <p>
              <button className='button fs-200 fc-white extrabold'>Generate</button>
            </p>

            <p>
              <button className='button fs-200 fc-white extrabold'>Get a Variant</button>
            </p>
            
            <p className='full-width'>
              <label>URL</label>
              <input />
            </p>
            
            <p>
              <button className='button fs-200 fc-white extrabold'>Submit</button>
            </p>
            
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

export default GenerateImg