import PropTypes from "prop-types";

export const FirstApp = ( { title, subtitle, age } ) => {
    return (
        <>
            <h1 data-testid='test title'> { title } </h1>
            <p data-testid='test subtitle'> { subtitle } </p>
            <p> { age } years old </p>
        </>
    ) // Esto es un fragmento
}

FirstApp.propTypes = {
    age: PropTypes.number.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

FirstApp.defaultProps = {
    age: 35,
    subtitle: 'Subtitulo por defecto'
};
