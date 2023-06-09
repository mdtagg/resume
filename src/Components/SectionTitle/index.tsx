
interface SectionTitleProps {
    title:string
}
const SectionTitle = (props:SectionTitleProps) => {
    const { title } = props
    return ( 
        <div className="flexitems-center justify-center gap-2 ">
            <h2 
                className="text-sm font-semibold h-max w-max whitespace-nowrap wide:text-xs"
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