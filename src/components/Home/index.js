import LogoTitle from '../../assets/images/logo-r.svg'
import { Link } from 'react-router-dom'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react';
import Logo from './Logo';
import Loader from 'react-loaders';
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1 aria-label='Hi, I am Rajesh, web developer.'>
            <AnimatedLetters
              letterClass={letterClass}
              str='Hi,'
              idx={11}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              str="I'm"
              idx={14}
            />
            <img className='header-logo' src={LogoTitle} alt="" aria-hidden="true"/>
            <AnimatedLetters
              letterClass={letterClass}
              str='ajesh'
              idx={17}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              str='web developer.'
              idx={22}
            />
          </h1>
          <h2>Web Developer / JavaScripts Skill / YouTuber</h2>
          <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
        <Logo />
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Home