
const ResumeInfo = () => {
    return ( 
        <div className="flex">
            <img 
                className="h-48 w-36"
                src="../../src/assets/portrait.jpg"
            >
            </img>
            <div className="mx-6 w-fit flex flex-col justify-center gap-2">
                <div className="flex items-center justify-center gap-2">
                    <h2 
                        className="text-lg font-semibold h-max w-max"
                    >
                        PROFILE INFO
                    </h2>
                    <span 
                        className="h-0 w-20 border border-black"
                    >
                    </span>
                </div>
                
                <p className="text-[.6rem] leading-[18px]">
                    Self taught front-end developer with a portfolio 
                    of projects written primarily in react, typescript, javascript, css/sass/tailwind, and html. 
                    I enjoy creating and designing tools that provide value for other people. I am always learning and find
                    great satisfaction in solving problems. 
                </p>
            </div>
            
        </div>
     );
}

export { ResumeInfo };