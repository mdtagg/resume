import { InfoBand } from "../InfoBand";
import { SectionTitle } from "../SectionTitle";
import portrait from '../../assets/portrait.jpg'

const PersonalInfo = () => {
    return ( 
        <section className="h-1/3 wide:h-1/2">
            <div className="flex h-3/4">
                <img
                    className="w-36"
                    src={portrait}
                >
                </img>
                <div className="bg-white flex flex-col justify-center px-6 gap-4">
                    <SectionTitle
                        title="ABOUT ME"
                    />
                    <p className="text-[.6rem] line-clamp-[7] leading-[15px] text-left wide:text-xs">
                        Self taught front-end developer with a portfolio 
                        of projects written in react, typescript, javascript, css/tailwind, and html.
                        I am always learning and find
                        great satisfaction in creating solutions to complex problems. 
                    </p>
                </div>
            </div>
            <div className="flex justify-center h-1/4 bg-yellow-300 gap-3 wide:gap-0 wide:justify-around">
                <div className="flex flex-col justify-center wide:justify-start wide:w-2/5 wide:items-center">
                    <p className="text-lg font-bold">MICHAEL TAGG</p>
                    <p className="font-semibold text-xs">FRONT-END DEVELOPER</p>
                </div>
                <div className="flex bg-white border sm:flex-col justify-center gap-1 px-2 wide:p-0 wide:gap-3 wide:w-3/5">
                    <InfoBand
                        icon="phone"
                        type="Phone"
                        text="805-630-3833"
                    />
                    <InfoBand
                        icon="email"
                        type="Email"
                        text="mdtagg91@gmail.com"
                    />
                    <InfoBand
                        icon="github"
                        type="Github"
                        text="https://github.com/mdtagg"
                    />
                </div>
            </div>
        </section>
     );
}

export { PersonalInfo };