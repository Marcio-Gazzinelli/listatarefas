import { useState } from 'react';
import { Link } from 'react-router-dom';


const TodoForm = ({ addTodo }) => {
    const[value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSumit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        addTodo(value, category)
        setValue("");
        setCategory("");
    }

    return (
    <div className="todo-form">
        <h2>Criar Tarefa:</h2>
        <form onSubmit={handleSumit}>
            <input type="text"
                placeholder="Digite o título"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione a categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type="submit">Adicionar tarefa</button>
        </form>
    </div>
    )
}
export default TodoForm