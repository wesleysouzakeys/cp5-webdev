import { useRef } from 'react';
import Produtos from '../Produtos/Produtos';
import '../../card.css'

function Login() {
  /*hook useref ele retorna uma referencia a um elemento ou componente sem ter que ser renderizado novamente e também permite acesso ao DOM */
  const user = useRef();
  const password = useRef();
  /* pegando o usuario e adcionando ao sessionStorage */
  const getUser = sessionStorage.getItem('userData');
  /* pegando o senha e adcionando ao sessionStorage */
  const getSenha = sessionStorage.getItem('senhaData');

  /*função que verifica se o usuario e senha são validos e grava na sessão */
  const handleSubmit = () => {
    if (user.current.value === 'admin' && password.current.value === '12345') {
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);
      sessionStorage.setItem('userData', 'admin');
      sessionStorage.setItem('senhaData', token);
    } else {
      alert('usuário e senha inválidos !!!');
    }
  };

  return (
    <>
      {getUser && getSenha ? (
        <Produtos />
      ) :
        <div class="container">
          <div class="content first-content">
            <div class="first-column">
              <h2 class="title title-primary">Bem vindo de volta!</h2>
              <p class="description description-primary">Estamos muito felizes em te-lo de volta</p>
              <p class="description description-primary">Aproveite todos os conteúdos oferecidos por nós.</p>
              {/* <button id="signin" class="btn btn-primary">sign in</button> */}
            </div>
            <div class="second-column">
              <h2 class="title title-second">Login</h2>
              <p class="description description-second">Use sua credencial para se logar:</p>
              <form onSubmit={handleSubmit} class="form">
                <label class="label-input" for="">
                  <i class="far fa-user icon-modify"></i>
                  <input type="text" placeholder='Usuário' ref={user} />
                </label>

                <label class="label-input" for="">
                  <i class="fas fa-lock icon-modify"></i>
                  <input type="password" placeholder='Senha' ref={password} />
                </label>

                <button class="btn btn-second">Logar</button>
              </form>
            </div>
          </div>
          <div class="content second-content">
          </div>
        </div>
      }
    </>
  );
}

export default Login;
