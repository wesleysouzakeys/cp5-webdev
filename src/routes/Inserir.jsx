import { useState } from 'react';
import { ListaProdutos } from '../components/ListaProdutos';
/* É através dele que se conseguirá fazer a navegação entre as diferentes rotas de uma aplicação. Declaramos ele atribuindo o hook a uma variável e depois invocando-a, passando a rota do destino como parâmetro obrigatório, conforme exemplo: */
import { useNavigate } from 'react-router-dom';


function Inserir() {
  const navigate = useNavigate();

  let novoId = ListaProdutos[ListaProdutos.length - 1].id + 1;

  const [produto, setProduto] = useState({
    id: novoId,
    nome: '',
    desc: '',
    valor: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    ListaProdutos.push(produto);
    navigate('/produtos');
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  return (
    <>
      <div class="container">
        <div class="content first-content">
          <div class="first-column">
            <h2 class="title title-primary">Cadastre seu produto</h2>
            <p class="description description-primary">Insira todas as informações pertinentes.</p>
          </div>
          <div class="second-column">
            <h2 class="title title-second">Cadastro</h2>
            <p class="description description-second">Insira abaixo as informações:</p>
            <form onSubmit={handleSubmit} class="form">
              <label class="label-input" for="">
                <i class="far fa-user icon-modify"></i>
                <input type="text" placeholder='Nome do Produto: '
                  onChange={handleChange} name="nome" />
              </label>

              <label class="label-input" for="">
                <i class="fas fa-lock icon-modify"></i>
                <input type="text" placeholder='Descrição'
                  onChange={handleChange} name="desc" />
              </label>

              <label class="label-input" for="">
                <i class="fas fa-lock icon-modify"></i>
                <input type="number" placeholder='Valor'
                  onChange={handleChange} name="valor" />
              </label>

              <button class="btn btn-second" type="submit">Cadastrar</button>
            </form>
          </div>
        </div>
        <div class="content second-content">
        </div>
      </div>
    </>
  );
}
export default Inserir;
