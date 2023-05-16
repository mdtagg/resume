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
        <section className="flex flex-col justify-center items-center bg-zinc-800 text-white px-5 gap-4 wide:w-[40%] wide:gap-[1px] wide:text-[.4rem]">
            <p className="text-xl font-bold wide:text-base">Skills</p>
            <div className="flex flex-col gap-4 justify-center items-center wide:grid wide:grid-cols-2 wide:gap-1 wide:grid-flow-col wide:items-start">
                <p className="text-sm font-semibold">Personal Skills</p>
                <ul className="flex flex-col text-[.5rem] items-start list-disc px-4 wide:text-[.5rem]">
                    <li>Web Design</li>
                    <li>Front-End Libraries</li>
                    <li>Debugging</li>
                    <li>APIs</li>
                    <li>Version Control</li>
                    <li>Working Within Teams</li>
                    <li>Communication</li>
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