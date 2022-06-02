import PropTypes from 'prop-types';

const BoasVindas = (props) => { //parâmentro props.
    return (
        <section>
            <h1 style={{ color: 'yellow' }}>Seja Bem_vindo(a) {props.nome}!</h1>
            <p style={{ color: 'white', background: 'black',  }}>A certificação de metodologias que nos auxiliam a lidar com o comprometimento entre as equipes cumpre um papel essencial na formulação das formas de ação.</p>
        </section>
    );
};

BoasVindas.defaultProps = {
    nome: 'Nome padrão',
};

BoasVindas.propTypes = {
    nome: PropTypes.string,
};

export default BoasVindas;