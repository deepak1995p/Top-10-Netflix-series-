import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import NetflixCard from './Components/NetflixCard'
import Sdata from './Components/Sdata'

ReactDOM.render(
    <>   
        <h1 className= "heading">Top 10 Netflix series</h1>
        <NetflixCard 
            img = {Sdata[0].img}
            title = {Sdata[0].title}
            mname = {Sdata[0].mname}
            target = {Sdata[0].target}

          />
          <NetflixCard
           img = {Sdata[1].img}
            title = {Sdata[1].title}
            mname = {Sdata[1].mname}
            target = {Sdata[1].target}

          />
          <NetflixCard 
            img = {Sdata[2].img}
            title = {Sdata[2].title}
            mname = {Sdata[2].mname}
            target = {Sdata[2].target}

          />
          <NetflixCard 
            img = {Sdata[3].img}
            title = {Sdata[3].title}
            mname = {Sdata[3].mname}
            target = {Sdata[3].target}

          />
          <NetflixCard 
            img = {Sdata[4].img}
            title = {Sdata[4].title}
            mname = {Sdata[4].mname}
            target = {Sdata[4].target}

          />
          <NetflixCard 
            img = {Sdata[5].img}
            title = {Sdata[5].title}
            mname = {Sdata[5].mname}
            target = {Sdata[5].target}

          />
    </> ,document.getElementById('root')
);

