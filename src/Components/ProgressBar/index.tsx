
interface ProgressBarProps {
    progress:string
}

const ProgressBar = (props:ProgressBarProps) => {
    const { progress } = props
    return ( 
        <div className="h-2 w-full bg-gray-500">
            <div className={`bg-yellow-300 h-2 w-[${progress}]`}></div>
        </div>
     );
}

export { ProgressBar };