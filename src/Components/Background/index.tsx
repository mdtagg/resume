import { Skills } from "../Skills";
import { Experience } from "../Experience";

const Background = () => {
    return ( 
        <div className="flex h-2/3">
            <Skills/>
            <Experience/>
        </div>
     );
}

export { Background };