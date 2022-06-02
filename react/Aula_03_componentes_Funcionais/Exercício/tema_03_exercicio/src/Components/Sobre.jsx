const estilo = { color: 'red'};
const estilo_2 = { color: 'white', backgroundColor: 'black'};

const Sobre = () => { 
    return (
        <article>
            <h2 style={estilo}>Sobre o React</h2>
            <p style={estilo_2}>ReactJs é uma biblioteca JavaScript para a criação de interfaces de usuário - ou UI (user interface).</p>
        </article>
    );
};

export default Sobre;
