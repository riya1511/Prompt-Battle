import React from 'react'
import Wrapper from '../Wrapper/Wrapper'

function Leaderboard() {
  return (
    <Wrapper>
        <div className='flex-col borders'>
            <h1 className='fc-white title'>{' >Leaderboard '}</h1>

            <div className='flex-col teams'>
                <h2 className='fc-white positions'>Top teams</h2>
            </div>
        </div>
    </Wrapper>
  )
}

export default Leaderboard