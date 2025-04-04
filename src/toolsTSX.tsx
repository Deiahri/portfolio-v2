import { IoMdCode } from "react-icons/io";
import { Icon } from "./Self";
import { CiGlobe } from "react-icons/ci";
import { IconBaseProps } from "react-icons";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoImageOutline } from "react-icons/io5";

export function GetIcon(iconType: Icon, {...props}: IconBaseProps={}) {
    switch (iconType) {
        case 'Code':
            return <IoMdCode {...props} />
        case 'Website':
            return <CiGlobe {...props} />
        case 'YouTube':
            return <AiOutlineYoutube {...props}/>
        case 'Image':
            return <IoImageOutline {...props} />
    }
}