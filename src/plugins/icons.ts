import { addIcons } from "oh-vue-icons"
import * as LaIcons from 'oh-vue-icons/icons/la'
import * as FiIcons from 'oh-vue-icons/icons/fi'
import {
    CoTiktok,
    CoAnsible,
    RiStackshareLine,
    BiCircle,
    BiCircleFill
} from "oh-vue-icons/icons"

export default () => {
    const La = Object.values({ ...LaIcons })
    const Fi = Object.values({ ...FiIcons })
    addIcons(
        ...La,
        ...Fi,
        CoTiktok,
        CoAnsible,
        RiStackshareLine,
        BiCircle,
        BiCircleFill
    )
}
