import { Icon } from '@iconify/react';

interface InfoBandProps {
    icon:string
    type:string
    text:string
}

const InfoBand = (props:InfoBandProps) => {
    const { icon, type, text } = props

    let iconType = ""
    let linkType = ""

    switch(icon) {
        case "phone":
            iconType="material-symbols:phone-in-talk"
            linkType="tel:805-630-3833"
            break
        case "email":
            iconType = "ic:twotone-mail" 
            linkType = "mailto:mdtagg91@gmail.com"
            break
        case "github":
            iconType = "mdi:github"
            linkType = "https://github.com/mdtagg"
            break
    }

    return ( 
        <a 
            className="flex items-center gap-1 wide:justify-center wide:border"
            href={linkType}
        >
            <Icon
                className="bg-black"
                icon={iconType}
                color="#fde047"
            />
            <div className="flex flex-col gap-[.1rem] text-[.4rem] leading-[.4rem] wide:text-[.5rem] wide:gap-1">
                <p className="font-bold">{type}</p>
                <p>{text}</p>
            </div>
        </a>
     );
}

export { InfoBand } ;