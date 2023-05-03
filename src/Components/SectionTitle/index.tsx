
interface SectionTitleProps {
    title:string
}
const SectionTitle = (props:SectionTitleProps) => {
    const { title } = props
    return ( 
        <div className="flex items-center justify-center mx-6 mt-3 gap-2">
            <h2 
                className="text-base font-semibold h-max w-max whitespace-nowrap"
            >
                {title}
            </h2>
            <span 
                className="h-0 flex w-full border border-black"
            >
            </span>
        </div>
     );
}

export { SectionTitle } ;