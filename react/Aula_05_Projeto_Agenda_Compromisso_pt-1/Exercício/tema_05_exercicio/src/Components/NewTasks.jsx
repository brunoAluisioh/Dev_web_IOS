import Button from './Button';
import PropTypes from './propTypes';

const NewTasks = ({ title }) => {
    return (
        <header className='header'>
            <h1>Agenda de {title}</h1>
            <Button bgColor="green" text="Adicionar" onClick={onClick} />
        </header>
    );
};

export default NewTasks;
Header.defaultProps = {
    title: 'compromissos',
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};
