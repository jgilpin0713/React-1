import React, {useState} from "react";
import Story from "./Story"

function WordsForm(template) {
    const INITIAL_STATE = {
        noun: "",
        noun2: "",
        adjective: "",
        color: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]:value
        }));
    };

   

    const handleSubmit = evt =>{
        evt.preventDefault();
        Story(formData)
        setFormData(INITIAL_STATE)
    }

    return (
      <div> 
        <form onSubmit={handleSubmit}>
            <label htmlFor = "noun"></label>
            <input name = "noun" 
            placeholder = "noun" 
            onChange = {handleChange}
            value = {formData.noun}
            type = "text"/>
            <label htmlFor = "noun2"></label>
            <input name = "noun2" 
            placeholder = "noun" 
            onChange = {handleChange}
            value = {formData.noun2}
            type = "text"/>
            <label htmlFor = "adjective"></label>
            <input name = "adjective" 
            placeholder = "adjective" 
            onChange = {handleChange}
            value = {formData.adjective}
            type = "text"/>
            <label htmlFor = "color"></label>
            <input name = "color" 
            placeholder = "color" 
            onChange = {handleChange}
            value = {formData.color}
            type = "text"/>
            <button>Get Story!</button>
        </form>
        <Story answers={formData} template={template}/> 
      </div>

    )
}

export default WordsForm