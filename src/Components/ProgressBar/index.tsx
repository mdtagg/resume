
interface ProgressBarProps {
    progress:string
}

const ProgressBar = (props:ProgressBarProps) => {
    const { progress } = props

    const progressVariant = 
    progress === "80%" ? "w-[80%]" :
    progress === "85%" ? "w-[85%]" :
    progress === "90%" ? "w-[90%]" :
    "w-[95%]"

    return ( 
        <div className="h-2 w-full bg-gray-500 wide:h-1">
            <div className={`bg-yellow-300 h-2 ${progressVariant} wide:h-1`}></div>
        </div>
     );
}

export { ProgressBar };