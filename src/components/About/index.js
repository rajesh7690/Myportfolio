import './index.scss';
import { useEffect,useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const About = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
         setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1 aria-label='About me'>
                    <AnimatedLetters
                        letterClass={letterClass}
                        str='About me'
                        idx={15}
                    />
                </h1>
                <p>
                    I'm very ambitious front-end developer looking for a role in
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                </p>
                <p>
                    I'm quietly confident, naturally curious, and perpetually working on
                    improving my chops one design problem at a time.
                </p>
                <p>
                    If I need to define myself in one sentence that would be a creative
                    person, always open to learn new technology, a sports fanatic,
                    photography and videography enthusiast, youtuber and tech-obsessed!!!
                </p>

            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About;