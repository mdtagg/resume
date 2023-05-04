import { Skill } from "./Skill";

const Skills = () => {

    const skills = [
        {skill:"React",progress:"90%"},
        {skill:"Javascript",progress:"90%"},
        {skill:"CSS/Tailwind",progress:"95%"},
        {skill:"Git",progress:"85%"},
        {skill:"Typescript",progress:"80%"}
    ]

    return ( 
        <div className="flex flex-col pt-5 items-center h-full w-36 bg-zinc-800 text-white px-5 gap-4">
            <p className="text-xl font-bold">Skills</p>
            <p className="text-sm font-semibold">Personal Skills</p>
            <ul className="flex flex-col text-[.5rem] items-start list-disc px-4">
                <li>Web Design</li>
                <li>Front-End Libraries</li>
                <li>Debugging</li>
                <li>APIs</li>
                <li>Version Control</li>
                <li>Working Within Teams</li>
                <li>Communication</li>
                <li>Public Speaking/Presentation</li>
            </ul>
            <p className="text-sm font-semibold">Technical Skills</p>
            <ul className="w-full flex flex-col text-xs gap-3">
                {skills.map(entry => {
                    return (
                        <Skill
                            skill={entry.skill}
                            progress={entry.progress}
                        />
                    )
                })}
            </ul>
        </div>
     );
}

export { Skills } ;