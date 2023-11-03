import PropTypes from "prop-types";
import { useForm } from "../../hooks";

export const AddTodo = ({ onNewTodo }) => {
  const { description, onInputChange, onReset } = useForm({
    description: ''
  });

  const onSubmit = (event) => {
    event.preventDefault();

    if (description.trim().length <= 1) return;

    onNewTodo({
      id: new Date().getTime(),
      description,
      done: false
    });

    onReset();
  };

  return (
    <form
        onSubmit={ onSubmit }
    >
        <input 
          type="text" 
          placeholder='Qué hay que hacer?' 
          className='form-control'
          name="description"
          value={ description }
          onChange={ onInputChange }
        />  
    <   button type='submit' className='btn btn-outline-primary mt-1'>  Agregar </button>
    </form>
  )
}

AddTodo.propTypes = {
    onNewTodo: PropTypes.func.isRequired
}