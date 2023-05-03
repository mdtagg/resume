

const Entry = () => {
    return (
        <div className="flex text-[.6rem] gap-1 mx-6 ">
            <div className="flex flex-col font-bold">
                <p>JAN 2018</p>
                <p>JAN 2021</p>
            </div>
            <div className="h-full relative z-10 w-1/3 flex flex-col justify-start items-center">
                <div className="h-4 w-4 rounded-full border border-black"></div>
                <div className="h-full border border-black"></div>
            </div>
            <div className="font-bold w-1/3 flex flex-col gap-2">
                <p>SALES ASSOCIATE</p>
                <p>REI</p>
                <ul className="text-[.5rem] font-normal list-disc">
                    <li>Leveraged rock climbing skills to inform customers on gear and technique</li>
                    <li>Top in Sales</li>
                </ul>
            </div>
        </div>
    )
}

export { Entry }