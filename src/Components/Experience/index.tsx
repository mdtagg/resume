import { SectionTitle } from "../SectionTitle";
import { Entry } from "../Entry";

const Experience =  () => {

    const summaries = {
        "weatherApp":
        [
            "Built with React and Tailwind, later converted to Typescript",
            "Processes data from APIs, gives users information relating to rock types and the weather",
            "Uses a variety of React hooks, both built in and custom",
            "Dynamically renders layouts based on user input"
        ],
        "REI": 
        [
            "Consistently in top sales ranks",
            "Trained most areas of the store within 2 months"
        ],
        "EDUCATION":
        [
            "Wrote shipping route optimization modeling programs in LINGO",
            "Frequently worked within multi-cultural teams to present research",
            "Consulted with a local business owner to help develop operational strategies"
        ]
    }

    return ( 
        <div className="w-full h-full flex flex-col gap-1 mt-2">
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