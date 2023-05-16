import { SectionTitle } from "../SectionTitle";
import { Entry } from "../Entry";

const Experience =  () => {

    const summaries = {
        "weatherApp":
        [
            "Built with React and Tailwind and Typescript",
            "Uses a variety of React hooks, both built in and custom",
            "Dynamically renders layouts based on user input",
            "Styled responsively",
            "Processes data from APIs, gives users rock type and the weather info of any given area",
        ],
        "REI": 
        [
            "Consistently in top sales ranks",
            "Taught rock climbing skills and tactics to members"
        ],
        "EDUCATION":
        [
            "Wrote shipping route optimization modeling programs with LINGO",
            "Frequently worked within multi-cultural teams to present research",
            "Consulted with a local business owner to help develop new operational strategies"
        ]
    }

    return ( 
        <div className="bg-white flex flex-col px-5 justify-center gap-1 wide:gap-0 wide:pt-1">
            <SectionTitle
                title="RECENT PROJECTS"
            />
            <Entry
                dateStart="FEB 2023"
                dateEnd="APR 2023"
                title="Rock Climbing Weather App"
                summary={summaries.weatherApp}
            />
            <SectionTitle
                title="WORK EXPERIENCE"
            />
            <Entry
                dateStart="JAN 2019"
                dateEnd="JAN 2022"
                title="Sales Associate"
                company="REI"
                summary={summaries.REI}
            />
            <SectionTitle
                title="EDUCATION"
            />
            <Entry
                dateStart="SEP 2016"
                dateEnd="AUG 2018"
                title="MBA (Masters of Business Administration)"
                company="California Lutheran University"
                summary={summaries.EDUCATION}
            />
        </div>
     );
}

export { Experience } ;