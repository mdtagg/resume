import { ProgressBar } from "../ProgressBar";

interface SkillProps {
    skill:string 
    progress:string
}

const Skill = (props:SkillProps) => {
    const { skill, progress } = props
    return ( 
        <li className="flex flex-col gap-1">
            <div className="flex justify-between">
                <p>{skill}</p>
                <p>{progress}</p>
            </div>
            <ProgressBar
                progress={progress}
            />
        </li>
     );
}

export {Skill} ;