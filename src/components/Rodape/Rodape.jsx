import { } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Rodape.css'

function Rodape() {
  return (
    <footer >
      <h3>El Sabor © <br /> 2023-todos os direitos reservados</h3>
      <div className='div-icons'>
        <a href="URL_DO_SEU_FACEBOOK" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} />
        </a>
        <a href="URL_DO_SEU_INSTAGRAM" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
        <a href="URL_DO_SEU_LINKEDIN" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="mailto:SEU_EMAIL">
          <FaEnvelope size={30} />
        </a>
      </div>

    </footer>
  )
}
export default Rodape