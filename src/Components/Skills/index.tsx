import { ProgressBar } from "../ProgressBar";

const Skills = () => {
    return ( 
        <div className="flex flex-col justify-center items-center h-full w-36 bg-zinc-800 text-white px-5 gap-2">
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
            <ul className="w-full flex flex-col text-xs gap-2">
                <li className="flex flex-col gap-1">
                    <div className="flex justify-between">
                        <p>React</p>
                        <p>90%</p>
                    </div>
                    <ProgressBar
                        progress={"90%"}
                    />
                </li>
                <li>
                    <div className="flex justify-between">
                        <p>Javascript</p>
                        <p>90%</p>
                    </div>
                    <ProgressBar
                        progress={"95%"}
                    />
                </li>
                <li>
                    <div className="flex justify-between">
                        <p>CSS/Tailwind</p>
                        <p>95%</p>
                    </div>
                    <ProgressBar
                        progress={"95%"}
                    />
                </li>
                
                <li>
                    <div className="flex justify-between">
                        <p>Git</p>
                        <p>85%</p>
                    </div>
                    <ProgressBar
                        progress={"80%"}
                    />
                </li>
                <li>
                    <div className="flex justify-between">
                        <p>TypeScript</p>
                        <p>80%</p>
                    </div>
                    <ProgressBar
                        progress={"75%"}
                    />
                </li>
            </ul>
        </div>
     );
}

export { Skills } ;