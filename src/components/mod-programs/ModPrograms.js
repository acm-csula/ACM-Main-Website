import React from "react";
import "./ModPrograms.scss"
import ModProjects from "./projects/ModProjects";

//This this page displays each element imported from "mod-programs". 
//For now it should just be "prodev" and "projects"
const ModPrograms = () => {

    return (
        <>
            <div className="ModContainer">
                    <ModProjects />
                 
            </div>
        </>
    )

}

export default ModPrograms