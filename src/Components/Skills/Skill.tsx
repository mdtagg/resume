import { ProgressBar } from "../ProgressBar";

interface SkillProps {
    skill:string 
    progress:string
}

const Skill = (props:SkillProps) => {
    const { skill, progress } = props
    return ( 
        <li className="flex flex-col gap-1 wide:gap-[.15rem]">
            <div className="flex justify-between wide:text-[.6rem]">
                <p className="font-semibold">{skill}</p>
                <p>{progress}</p>
            </div>
            <ProgressBar
                progress={progress}
            />
        </li>
     );
}

export {Skill} ;