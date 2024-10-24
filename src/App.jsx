import React from 'react';
import './App.css';

const products = [
  {
    id: 4,
    title: "Base Líquida",
    price: "R$ 79,90",
    image: "https://casadomaquiador.com.br/painel/assets/upload_produto/p_33/base-liquida-matte-alta-cobertura-hd-boca-rosa-0212a167a85f88da735ef3ad3d929783.jpg"
  },
  {
    id: 5,
    title: "Máscara de Cílios",
    price: "R$ 23,90",
    image: "https://images.tcdn.com.br/img/img_prod/696801/mascara_cilios_bella_femme_2x1_preta_3787_1_20190911211806.jpg"
  },
  {
    id: 6,
    title: "Batom",
    price: "R$ 15,00",
    image: "https://static.cdnlive.com.br/uploads/724/produto/17226254268189_zoom.jpg"
  },
  {
    id: 6,
    title: "Delineador",
    price: "R$ 26,90",
    image: "https://images.tcdn.com.br/img/img_prod/734414/delineador_liquido_preto_vult_5779_2_83ef94b92e5b5d8ffbc3f1a3f67d362c.jpg"
  
  }
];

function App() {
  return (
    <div className="App">
      <h1>Lista de Produtos de Maquiagem</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
