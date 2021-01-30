import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { ModeloDeProducto } from '../Model/types';

import { ItemProps } from '../Model/types';

const CartaDeProductoStyle = styled.article`
    display: grid;
    border: 1px solid lightblue;
    border-radius: 8px;
    grid-template-rows: 1fr 1fr 30px;

    img {
        max-height: 200px;
        object-fit: cover;
        border-radius: 8px 8px 0 0;
        max-width: 90%;
        place-self: center;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0 1rem;

        header {
            h3 {
            }
        }

        p {
            font-size: 1rem;
        }

        h4 {
            align-self: center;
        }
    }

    button {
        border-radius: 0 0 8px 8px;
    }
`;

const CartaDeProducto: React.FC<ItemProps> = ({
    producto: item,
    agregarAlCarro,
}) => (
    <CartaDeProductoStyle>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h4>${item.price}</h4>
        </div>
        <Button onClick={() => agregarAlCarro(item)}>Agregar</Button>
    </CartaDeProductoStyle>
);

export default CartaDeProducto;
