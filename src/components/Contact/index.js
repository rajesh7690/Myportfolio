import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () =>{
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  const sendEmail=(e)=>{
    e.preventDefault()
    emailjs.sendForm(
        'service_q8b6d67', 
        'template_yc22ah2', 
        refForm.current,
        'sknzlnX6K72yb6D9H'
    )
    .then(
        ()=>{
            alert('Message successfully sent!!')
            window.location.reload(false)
        },
        (error)=>{
            alert('Faild to send the message,please try again')
        }
    ) 
  }
    return(
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters strArray={['C','o','n','t','a','c','t',' ','m','e']}
                    letterClass={letterClass}
                    idx={15}
                    />
                </h1>
                <p>
                    I am interested in freelance opportunities - especially ambitious or
                    small projects. However, if you have other request or question,
                    don't hesitate to contact me using below form either.
                </p>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                            <input placeholder="Name" type="text" name="name" required />
                            </li>
                            <li className="half">
                            <input
                                placeholder="Email"
                                type="email"
                                name="email"
                                required
                            />
                            </li>
                            <li>
                            <input
                                placeholder="Subject"
                                type="text"
                                name="subject"
                                required
                            />
                            </li>
                            <li>
                            <textarea
                                placeholder="Message"
                                name="message"
                                required
                            ></textarea>
                            </li>
                            <li>
                            <input type="submit" className="flat-button" value="Send" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Rajesh Sahu,
                <br />
                Odisha,India
                <br />
                Remuna,Balasore <br />
                <span>rajeshsahu7683995090@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[21.525664, 86.868740]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[21.525664, 86.868740]}>
                    <Popup>
                        Rajesh lives here, come over for a talk.
                    </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="pacman"/>
    </>
    )
}

export default Contact;