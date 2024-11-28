import { useState } from "react";
import { AddCategory, GifGrid } from './';  // lo esta tomando del archivo index.js que esta dentro de este mismo folder.

export const GifExpertApp= () => {    
    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

    const onAddCategory=(newCategory) => {
        //categories.push('Hola1');
        setCategories([newCategory, ...categories]);
        //console.log(event.target.value);
    }

    return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory onNewCategory = {(event => onAddCategory(event))}> </AddCategory>                

        {categories.map((category) => (                
            <GifGrid key={category} category={category}></GifGrid>                                   
            ))            
        }        

    </>
    )
}