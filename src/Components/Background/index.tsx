import { Skills } from "../Skills";
import { Experience } from "../Experience/experience";

const Background = () => {
    return ( 
        <div className="h-2/3">
            <Skills/>
            <Experience/>
        </div>
     );
}

export { Background };