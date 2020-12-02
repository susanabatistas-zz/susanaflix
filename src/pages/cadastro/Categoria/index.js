import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: ''
  }
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value
    });
  }

  function handlerChange(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name}</h1>

      <form onSubmit={ e => {
        e.preventDefault();
        setCategories([
          ...categories,
          values
        ]);
        setValues(initialValues);
      }}>
        
        <FormField
          label="Nome da Categoria:"
          type="text" 
          name="name"
          value={values.name}
          onChange={handlerChange}
        />

        <FormField
          label="Descrição:"
          type="textarea" 
          name="description"
          value={values.description}
          onChange={handlerChange}
        />

        <FormField
          label="Cor:"
          type="color" 
          name="color"
          value={values.color}
          onChange={handlerChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categories.map((category, index) => {
          return (
            <li key={`${category.name}${index}`}>
              {category.name}
            </li>
          )
        })}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;