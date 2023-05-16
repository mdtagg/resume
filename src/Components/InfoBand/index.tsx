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
            <div className="flex flex-col gap-[.1rem] text-[.4rem] leading-[.4rem] wide:text-[.7rem] wide:flex wide:flex-col wide:gap-1">
                <p className="font-bold">{type}</p>
                <p>{text}</p>
            </div>
        </div>
     );
}

export { InfoBand } ;