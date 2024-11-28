import { useState } from "react";

export const AddCategory= ({onNewCategory})=> {
    const [inputValue , setInputValue] = useState('One Punch');

    const onAddCat=(event)=> {
       //console.log(event.target.value);
       setInputValue(event.target.value);
    }

    const whenSubmit=(event)=> {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim());
        setInputValue('');
        //setCategories(categories => [intputValue,...categories]);
    }

    return (
        <form onSubmit={(event) => whenSubmit(event)}>
            <input type="text" placegholder='Buscar Gif' value={inputValue} onChange={(event) => onAddCat(event)}></input>
        </form>    
    )
}