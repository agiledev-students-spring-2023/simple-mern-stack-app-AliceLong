import { useState, useEffect } from 'react';
import axios from 'axios';
import './AboutUs.css'


const AboutUs = () => {
  const [aboutUs, setAboutUs] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
      .then(response => {
        //if get success, resolve to a callback function 
        const aboutUsData = response.data
        setAboutUs(aboutUsData)
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(true);
      });
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {
        <>
          <img className="goldfish" src={aboutUs.image} alt="..." />
          <h1 className='Title'>About Me</h1>
          <p className='Intro'> {aboutUs.description}.</p>
        </>
      }
    </div>
  );
};

export default AboutUs;