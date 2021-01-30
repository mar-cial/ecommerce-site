import { Badge, Drawer, LinearProgress } from '@material-ui/core';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { useState } from 'react';

// types
import { ModeloDeProducto } from './Model/types';

// components
import CartaDeProducto from './Components/CartaDeProducto';
import Header from './Components/Header';
import Carro from './Components/Carro';

import { Boton } from './Components/Generales';
import { AddShoppingCart } from '@material-ui/icons';

// Fetching Data
const conseguirProductos = async (): Promise<ModeloDeProducto[]> => {
  return await (await fetch('https://fakestoreapi.com/products')).json();
};

// Style
const AppStyle = styled.main`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
  grid-template-rows: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
  font-family: --apple-system, BlinkMacSystemFont, 'Helvetica', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

// App start
const App = () => {
  const [carroAbierto, setCarroAbierto] = useState(false);
  const [listaCarro, setListaCarro] = useState([] as ModeloDeProducto[]);

  const { data, isLoading, isError } = useQuery<ModeloDeProducto[]>(
    'productos',
    conseguirProductos
  );

  const conseguirItemsTotales = (items: ModeloDeProducto[]) =>
    items.reduce((acc: number, item) => acc + item.amount, 0);

  const handleAgregarAlCarro = (productoSeleccionado: ModeloDeProducto) => {
    setListaCarro((ant) => {
      // 1. Is the item already added in the cart?
      const isItemInCart = ant.find(
        (item) => item.id === productoSeleccionado.id
      );

      if (isItemInCart) {
        return ant.map((item) =>
          item.id === productoSeleccionado.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // First time the item is added
      return [...ant, { ...productoSeleccionado, amount: 1 }];
    });
  };

  const handleEliminarDelCarro = (id: number) => {
    setListaCarro((ant) =>
      ant.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as ModeloDeProducto[])
    );
  };

  if (isLoading) return <LinearProgress />;
  if (isError) return <h2>Something went wrong.</h2>;

  return (
    <AppStyle>
      <Drawer
        anchor="right"
        open={carroAbierto}
        onClose={() => setCarroAbierto(false)}
      >
        <Carro
          itemsCarro={listaCarro}
          agregarAlCarro={handleAgregarAlCarro}
          eliminarDelCarro={handleEliminarDelCarro}
        />
      </Drawer>
      <Boton onClick={() => setCarroAbierto(true)}>
        <Badge badgeContent={conseguirItemsTotales(listaCarro)} color="error">
          <AddShoppingCart />
        </Badge>
      </Boton>
      <Header />
      {data?.map((item) => (
        <CartaDeProducto
          key={item.id}
          producto={item}
          agregarAlCarro={handleAgregarAlCarro}
        />
      ))}
    </AppStyle>
  );
};

export default App;
