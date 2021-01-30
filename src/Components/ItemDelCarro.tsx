import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { CartItemProps } from '../Model/types';

const ItemDelCarroStyle = styled.article`
    display: grid;
    text-align: center;

    img {
        width: 100px;
        height: auto;
        align-self: center;
        justify-self: center;
    }
`;

const DetailsSection = styled.section``;

const ButtonSection = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const ItemDelCarro: React.FC<CartItemProps> = ({
    item,
    agregarAlCarro,
    eliminarDelCarro,
}) => {
    return (
        <ItemDelCarroStyle>
            <DetailsSection>
                <h3>{item.title}</h3>
                <h3>Details</h3>
                <p>Price: ${item.price}</p>
                <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
            </DetailsSection>
            <ButtonSection>
                <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => eliminarDelCarro(item.id)}
                >
                    -
                </Button>
                <p>{item.amount}</p>
                <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => agregarAlCarro(item)}
                >
                    +
                </Button>
            </ButtonSection>
            <img src={item.image} alt={item.title} />
        </ItemDelCarroStyle>
    );
};

export default ItemDelCarro;
