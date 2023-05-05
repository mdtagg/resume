import { InfoBand } from "../InfoBand";
import { SectionTitle } from "../SectionTitle";

const ResumeInfo = () => {
    return ( 
        <section className="h-1/3 wide:h-1/2">
            <div className="flex h-3/4">
                <img
                    className="w-40 wide:w-44"
                    src="../../src/assets/portrait.jpg"
                >
                </img>
                <div className=" bg-white w-fit flex flex-col gap-1 justify-center">
                    <SectionTitle
                        title="ABOUT ME"
                    />
                    <p className="text-[.6rem] leading-[15px] text-left mx-6 mt-3  wide:text-xs">
                        Self taught front-end developer with a little over a year of experience and a portfolio 
                        of projects written primarily in react, typescript, javascript, css/sass/tailwind, and html. 
                        I enjoy creating and designing tools that provide value for other people. I am always learning and find
                        great satisfaction in solving problems. 
                    </p>
                </div>
            </div>
            <div className="flex justify-center h-1/4 bg-yellow-300 gap-3 wide:gap-0 wide:justify-around">
                <div className="flex flex-col justify-center wide:justify-start wide:w-2/5 wide:items-center">
                    <p className="text-lg font-bold">MICHAEL TAGG</p>
                    <p className="font-semibold text-xs">FRONT-END DEVELOPER</p>
                </div>
                <div className="flex bg-white sm:flex-col justify-center gap-1 px-2 wide:p-0 wide:gap-3 wide:w-3/5 wide:border">
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

export { ResumeInfo };