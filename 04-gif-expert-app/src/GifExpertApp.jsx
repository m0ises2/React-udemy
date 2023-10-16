import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory.toLowerCase())) return;
    
    setCategories([newCategory.toLowerCase(),...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GitExpertApp</h1>

      {/* Input */}
      <AddCategory 
        onNewCategory={ onAddCategory }
      />
      
      {/* Lista de Gif */}
      { 
        categories.map(category => (
          <GifGrid 
            key={ category }
            category={ category }
          />
        ))
      }
        {/* Gif Item */}

    </>
  );
};
