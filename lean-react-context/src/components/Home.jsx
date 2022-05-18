import React, { useContext } from 'react'
import { DataContext } from '../App'


function Home() {
  
    const data = useContext(DataContext);
    console.log(data);

  return (
  <div>
      <h1>Home</h1>
      <div>
          <img src={data.basics?.picture}></img>
          <ul>
              <li><strong>Name</strong> : {data.basics?.name}</li>
              <li><strong>Headline</strong> : {data.basics?.headline}</li>

          </ul>
      </div>
  </div>
  )
}

export default Home