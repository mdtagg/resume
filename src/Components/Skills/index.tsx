import { Skill } from "./Skill";
import { v4 as uuidv4 } from "uuid"

const Skills = () => {

    const skills = [
        {skill:"React",progress:"90%"},
        {skill:"Javascript",progress:"90%"},
        {skill:"CSS",progress:"90%"},
        {skill:"Git",progress:"85%"},
        {skill:"Typescript",progress:"80%"}
    ]

    return ( 
        <section className="flex flex-col justify-center items-center w-36 bg-zinc-800 text-white px-5 gap-4 wide:w-[60%] wide:h-[75%] wide:pt-1 wide:gap-[.07rem]">
            <p className="text-xl font-bold wide:text-lg">Skills</p>
            <div className="flex flex-col gap-4 items-center wide:grid wide:grid-cols-2 wide:gap-0 wide:grid-flow-col wide:h-[85%] wide:items-start">
                <p className="text-sm font-semibold">Personal Skills</p>
                <ul className="flex flex-col text-[.5rem] items-start list-disc px-4 wide:text-[.6rem]">
                    <li>Web Design</li>
                    <li>Front-End Libraries</li>
                    <li>Debugging</li>
                    <li>APIs</li>
                    <li>Version Control</li>
                    <li>Working Within Teams</li>
                    <li>Communication</li>
                    <li>Public Speaking/Presentation</li>
                </ul>
                <p className="text-sm font-semibold wide:col-start-2 wide:col-end-3">Technical Skills</p>
                <ul className=" flex flex-col text-xs gap-2 w-[90%] wide:col-start-2 wide:col-end-3 wide:gap-0">
                    {skills.map(entry => {
                        return (
                            <Skill
                                key={uuidv4()}
                                skill={entry.skill}
                                progress={entry.progress}
                            />
                        )
                    })}
                </ul>
            </div>
        </section>
     );
}

export { Skills } ;