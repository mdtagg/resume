import { Icon } from '@iconify/react';

interface InfoBandProps {
    icon:string
    type:string
    text:string
}

const InfoBand = (props:InfoBandProps) => {
    const { icon, type, text } = props

    let iconType = ""

    switch(icon) {
        case "phone":
            iconType="material-symbols:phone-in-talk"
            break
        case "email":
            iconType = "ic:twotone-mail" 
            break
        case "github":
            iconType = "mdi:github"
            break
    }

    return ( 
        <div className="flex items-center gap-1">
            <Icon
                className="bg-black"
                icon={iconType}
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