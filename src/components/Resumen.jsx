import React from 'react';

import '../assets/styles/components/resumen.scss';
import ResumenList from './ResumenList';

const Resumen = (props) => {
  const [error, setError] = React.useState(false);
  const { products, user } = props;
  console.log('resumen products', products);
  if (products.length === 0) {
    setError(true);
  }
  return (
    <section className='Resumen'>

      <h1 className='Resumen-title'>RESUMEN DE PEDIDO</h1>

      {
        error ? <div /> :
          products.map((data) => {
            if (data.product === '') {
              return false;
            }
            return (
              <ResumenList
                key={data.id}
                product={data.product}
                price={data.price - data.discount}
              />
            );
          })
      }

      <div className='Resumen-total'>
        <h2>TOTAL</h2>
        <p>
          $
          {user.PriceDiscount}
        </p>
      </div>

    </section>
  );
};

export default Resumen;
