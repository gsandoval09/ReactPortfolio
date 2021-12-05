import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar';
import Title from './Title';
import Quote from './Quote';
import Goals from './Goals';
import ImageButton from './ImageButton';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Title />
    <Quote />
    <ImageButton link="https://github.com/gsandoval09/ReactPortfolio" 
    imgSrc={process.env.PUBLIC_URL+"ReactPortfolio.png"} width = "450" height = "350"/>
    <Goals />
    <div id="contact">

    <ImageButton link="https://github.com/gsandoval09" imgSrc={process.env.PUBLIC_URL+"githubIcon.png"} width="32" height="32" />
    <ImageButton link="https://www.linkedin.com/in/george-sandoval-4467641b3" imgSrc={process.env.PUBLIC_URL+"linkedinIcon.jpg"} width="32" height="32" />
    </div>
    <section>
      
    </section>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
