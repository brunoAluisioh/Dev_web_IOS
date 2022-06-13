import Button from './Button';
import PropTypes from 'prop-types';

const NewTasks = ({ title, onClick  }) => {
     return (
        <header className='header'>
            <h1>{title}</h1>
            <Button bgColor="green" text="Adicionar" onClick={onClick} />
        </header>
    );
};

NewTasks.defaultProps = {
    title: 'Afazer',
};

NewTasks.propTypes = {
    title: PropTypes.string.isRequired,
};

export default NewTasks;

