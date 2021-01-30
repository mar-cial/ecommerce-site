import styled from 'styled-components';

const HeaderStyle = styled.header`
    padding: 1rem;
    border: 1px solid rgb(93, 173, 226);
    border-radius: 8px;
`;

const Header: React.FC = () => {
    return (
        <HeaderStyle>
            <h1>Bienvenido a Tienda Online X.</h1>
            <sub>Por Cesar Marcial.</sub>
            <p>Esta aplicación web fue realizada con:</p>
            <ul>
                <li>
                    Productos falsos proporcionados por
                    https://fakestoreapi.com/products
                </li>
                <li>React con Typescript</li>
                <li>styled-components</li>
                <li>
                    @material-ui para ciertos componentes, como botones y
                    navegación.
                </li>
            </ul>
            <footer>
                <span>
                    Puedes encontrar el código en
                    <br />
                    <a href="https://github.com/mar-cial/ecommerce-site.git">github.com/mar-cial/typescript-fake-store</a>
                </span>
            </footer>
        </HeaderStyle>
    );
};

export default Header;
