import { useForm } from '../hooks/useForm';

export const SimpleFormWithCustomHook = () => {
    // Hooks:
    const initialValues = {
        username: '',
        email: '',
        password: ''
    };

    const {
        email,
        onInputChange,
        onReset,
        password,
        username,
    } = useForm(initialValues);

    return (
        <>
            <h1> Formulario Simple </h1>

            <hr />

            <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange}/>
            <input type="email" className="form-control mt-2" placeholder="email@domain.com" name="email" value={email} onChange={onInputChange}/>
            <input type="password" className="form-control mt-2" placeholder="1234567890" name="password" value={password} onChange={onInputChange}/>

            <button className="btn btn-primary mt-2" onClick={ onReset }> Borrar </button>
        </>
    );
};
