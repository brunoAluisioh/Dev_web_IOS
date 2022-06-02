import PropTypes from 'prop-types';
//const estilo = { color: 'red' }; //outro jeito de adicionar cor

const Header = (props) => {
    return (
        <div>
            <h1 style={{ color: 'red' }}>Olá, {props.nome}, seja bem-vindo!</h1>
        </div>
    );
};

Header.defaultProps = {
    nome: 'Nome padrão',
};

Header.propTypes = {
    nome: PropTypes.string,
};

export default Header;
