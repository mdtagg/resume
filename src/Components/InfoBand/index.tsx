import { Icon } from '@iconify/react';

interface InfoBandProps {
    svg:string
    type:string
    text:string
}

const InfoBand = (props:InfoBandProps) => {
    const { svg, type, text } = props

    let icon = ""

    switch(svg) {
        case "phone":
            icon="material-symbols:phone-in-talk"
            break
        case "email":
            icon = "ic:twotone-mail" 
            break
        case "github":
            icon = "mdi:github"
            break
    }

    return ( 
        <div className="flex items-center gap-1">
            <Icon
                className="bg-black"
                icon={icon}
                color="#fde047"
            />
            <div className="text-[.5rem] leading-[0.4rem]">
                <p className="font-bold">{type}</p>
                <p>{text}</p>
            </div>
        </div>
     );
}

export { InfoBand } ;