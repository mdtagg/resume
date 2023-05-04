import { v4 as uuidv4 } from 'uuid';

interface EntryProps {
    dateStart:string 
    dateEnd:string 
    title:string 
    company?:string 
    summary:string[]
}

const Entry = (props:EntryProps) => {

    const { dateStart,dateEnd,title,company,summary } = props

    return (
        <div className="flex  text-[.6rem] ml-5 ">
            <div className="items-start ml-1 flex flex-col font-bold w-1/5">
                <p>{dateStart}</p>
                <p>{dateEnd}</p>
            </div>
            <div className="h-full relative z-10 w-1/5 flex flex-col justify-start items-center">
                <div className="h-3 w-3 rounded-full border border-black"></div>
                <div className="h-full border border-black"></div>
            </div>
            <div className="font-bold w-3/5 flex flex-col gap-1">
                <p className="text-[.5rem]">{title}</p>
                {company &&
                    <p className="text-[.5rem]">
                        {company}
                    </p>
                }
                <ul className="flex flex-col text-[.5rem] font-normal list-disc w-full gap-1">
                    {summary.map((entry) => {
                        return <li key={uuidv4()}>{entry}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export { Entry }