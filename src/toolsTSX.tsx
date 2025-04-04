import { IoMdCode } from "react-icons/io";
import { Icon } from "./Self";
import { CiGlobe } from "react-icons/ci";
import { IconBaseProps } from "react-icons";

export function GetIcon(iconType: Icon, {...props}: IconBaseProps={}) {
    switch (iconType) {
        case 'Code':
            return <IoMdCode {...props} />
        case 'Website':
            return <CiGlobe {...props} />
    }
}