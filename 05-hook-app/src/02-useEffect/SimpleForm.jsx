import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    // Hooks:
    const [formState, setFormState] = useState({
        username: "ricky",
        email: "email@domain.com"
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    // Efectos secundarios    
    useEffect(() => {
        console.log('Called useEffect - formState Changed')
    }, [formState]);

    useEffect(() => {
        console.log('Called useEffect - email Changed')
    }, [email]);
    
    return (
        <>
            <h1> Formulario Simple </h1>

            <hr />

            <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange}/>
            <input type="email" className="form-control mt-2" placeholder="email@domain.com" name="email" value={email} onChange={onInputChange}/>
            {
                username === 'ricky' && <Message />
            }
        </>
    )
}
