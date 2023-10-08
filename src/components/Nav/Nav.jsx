import { } from 'react';
import './Nav.css'
import { Link, useNavigate } from 'react-router-dom';

function Nav() {
  /*Hook- useNavigate */
  const navigate = useNavigate();

  const getUser = sessionStorage.getItem('userData');
  const getSenha = sessionStorage.getItem('senhaData');

  const handleLogout = async () => {
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('senhaData');
    alert("SAINDO DA SESSÃO");
    navigate('/');
  }

  return (

    <>
      <header>
        <div className='header-flex'>
          <h1>El Sabor</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="conteudo">Conteudo</Link>
              </li>
              <li>
                <Link to="sobre">Sobre</Link>
              </li>
              <li>
                <Link to="/cadastrar/produto">Cadastrar Produto</Link>
              </li>
              {getUser && getSenha ?
                <li>
                  <Link onClick={handleLogout}>LOGOUT</Link>
                </li>
                :
                <li>
                  <Link to="/login">LOGIN</Link>
                </li>
              }

            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Nav;
