/* useParams -Ele serve para receber parâmetros pela rota. Quando vamos criar uma rota, é possível fazer que ela receba parâmetros */
import { useNavigate, useParams } from 'react-router-dom';
import { ListaProdutos } from '../../components/ListaProdutos';
import { useState } from 'react';
import './Editar.css'

function Editar() {
  const { id } = useParams();
  const navigate = useNavigate();

  const recProdutoListaById = ListaProdutos.filter((item) => item.id == id);

  const [produto, setProduto] = useState({
    id: recProdutoListaById[0].id,
    nome: recProdutoListaById[0].nome,
    desc: recProdutoListaById[0].desc,
    valor: recProdutoListaById[0].valor,
  });


  const handleSubmit = (event) => {
    event.preventDefault();
    let indice;
    ListaProdutos.forEach((item, index) => {
      if (item.id == produto.id) {
        indice = index;
      }
    });
    ListaProdutos.splice(indice, 1, produto);
    navigate('/produtos');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduto({ ...produto, [name]: value });
  };

  return (
    <section className='grid-container'>
      <h1 className='h1-editar'>EDITAR PRODUTOS</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>PRODUTO SELECIONADO</legend>
          <div>
            <input
              type="hidden"
              name="id"
              value={produto.id}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="idNome">Nome do Produto:</label>
            <input
              className='input-editar'
              type="text"
              name="nome"
              id="idNome"
              value={produto.nome}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="idDesc">Descrição do Produto:</label>
            <input
              className='input-editar'
              type="text"
              name="desc"
              id="idDesc"
              value={produto.desc}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="idValor">Valor do Produto:</label>
            <input
              className='input-editar'
              type="text"
              name="valor"
              id="idValor"
              value={produto.valor}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="subtmit" >EDITAR</button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}
export default Editar;
