import React from "react"


// function Story(props){
//     return (
//         <h3>
//         There was a {props.color} {props.noun} who loved a 
//         {props.adjective} {props.noun2}.
//         </h3>
//     )
// }

function Story({template, answers}){
    function makeStory(){
        let story = template;
        for (let key in answers){
            story = story.replace(`[${key}]`, answers[key]);
        }
        return story;
    }
    return (
        <div className = "Story">
            <p>
                {makeStory()}
            </p>
        </div>
    )
}
export default Story;