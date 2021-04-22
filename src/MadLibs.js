import React, { useState } from "react";
import WordsForm from "./WordsForm"


const MadLibs = () => {
    const [story, setStory] = useState(null);

    const loadStory = (formData) => {
       setStory(`There was a ${formData.color} ${formData.noun} who loved a ${formData.adjective} ${formData.noun2}.`)
    }

    return (
        <div>
            {story ? story: <h2>Generating story...</h2>}
            <WordsForm loadStory={loadStory} />
        </div>
    )
}

export default MadLibs;