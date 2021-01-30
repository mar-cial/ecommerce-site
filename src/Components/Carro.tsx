import styled from 'styled-components';

import { CartProps } from '../Model/types';
import ItemDelCarro from './ItemDelCarro';

const CarroStyle = styled.aside`
    font-family: --apple-system, BlinkMacSystemFont, 'Helvetica', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 1rem;
    width: 50vw;
`;

const Carro: React.FC<CartProps> = ({
    itemsCarro,
    agregarAlCarro,
    eliminarDelCarro,
}) => {
    return (
        <CarroStyle>
            <h2>Tu carrito de compras</h2>
            {itemsCarro.length === 0 ? 'No has agregado nada todavia.' : null}
            {itemsCarro.map((item) => (
                <ItemDelCarro
                    key={item.id}
                    item={item}
                    agregarAlCarro={agregarAlCarro}
                    eliminarDelCarro={eliminarDelCarro}
                />
            ))}
        </CarroStyle>
    );
};

export default Carro;
