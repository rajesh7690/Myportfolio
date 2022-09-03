import './index.scss';
import LogoR from '../../../assets/images/logo-r.svg'

const Logo = () => {
    return(
        <div className='logo-container' aria-hidden="true">
            <img className="solid-logo" src={LogoR} alt="logo" />

        </div>
    )
}
export default Logo;