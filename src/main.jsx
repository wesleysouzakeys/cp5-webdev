import {} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Error from './routes/Error.jsx';
import Home from './routes/Home.jsx';
import Produtos from './routes/Produtos/Produtos.jsx';
import Inserir from './routes/Inserir.jsx';
import Editar from './routes/Editar/Editar.jsx';
import Excluir from './routes/Excluir/Excluir.jsx';
import Conteudo from './routes/Conteudo/Conteudo.jsx';
import Login from './routes/Login/Login.jsx';
import Sobre from './routes/Sobre/Sobre.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login/> },
      { path: '/produtos', element: <Produtos /> },
      { path: '/conteudo', element: <Conteudo /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/cadastrar/produto', element: <Inserir /> },
      { path: '/editar/produtos/:id', element: <Editar /> },
      { path: '/excluir/produtos/:id', element: <Excluir /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
