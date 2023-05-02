import { InfoBand } from "../InfoBand";

const ResumeInfo = () => {
    return ( 
        <>
        <div className="flex">
            <img
                className="h-48 w-36"
                src="../../src/assets/portrait.jpg"
            >
            </img>
            <div className="mx-6 mt-3 w-fit flex flex-col  gap-1">
                <div className="flex items-center justify-start gap-2">
                    <h2 
                        className="text-base font-semibold h-max w-max"
                    >
                        PROFILE INFO
                    </h2>
                    <span 
                        className="h-0 w-20 border border-black"
                    >
                    </span>
                </div>
                
                <p className="text-[.5rem] leading-[15px]">
                    Self taught front-end developer with a portfolio 
                    of projects written primarily in react, typescript, javascript, css/sass/tailwind, and html. 
                    I enjoy creating and designing tools that provide value for other people. I am always learning and find
                    great satisfaction in solving problems. 
                </p>
            </div>
            
        </div>
        <div className="flex justify-center bg-yellow-300 h-[3.5rem] relative bottom-[3.5rem] w-full opacity-90 gap-3">
            <div className="flex flex-col justify-center">
                <p className="text-lg font-bold">MICHAEL TAGG</p>
                <p className="font-semibold text-xs">FRONT-END DEVELOPER</p>
            </div>
            <div className="flex flex-col bg-white justify-center gap-1 px-2">
                <InfoBand
                    svg="phone"
                    type="Phone"
                    text="805-630-3833"
                />
                <InfoBand
                    svg="email"
                    type="Email"
                    text="mdtagg91@gmail.com"
                />
                <InfoBand
                    svg="github"
                    type="Github"
                    text="https://github.com/mdtagg"
                />
            </div>
        </div>
        </>
     );
}

export { ResumeInfo };