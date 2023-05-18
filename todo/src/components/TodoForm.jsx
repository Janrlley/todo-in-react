import { useState } from 'react';

const TodoForm = ({ addTodo }) => { 
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;  // caso não tenha valor ou categoria não siga com a função
        // adicionar todo
        addTodo(value, category);
        //Limpar campos
        setValue("");
        setCategory("");

    }

  return (
    <div className="todo-form">
        <h2>Criar tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Digite o título" 
                value = {value} // atribuindo o state para o atributo de valor do input
                onChange={(e) => setValue(e.target.value)} // onChange == ao mudar um valor, sendo assim,
                                                          // e == evento, target == input, value == o valor que está no input
            />
            <select value = {category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select> 
            <button type='submit'>Criar tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm