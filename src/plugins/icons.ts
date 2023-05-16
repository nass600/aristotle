import { addIcons } from "oh-vue-icons"
import * as LaIcons from 'oh-vue-icons/icons/la'
import {
    CoTiktok,
    CoAnsible,
    RiStackshareLine,
    BiCircle,
    BiCircleFill,
    FiSquareGb,
    FiSquareEs,
    FiSquareDe,
    FiSquareFr,
    FiSquareIt,
    FiSquareJp,
    FiSquarePt
} from "oh-vue-icons/icons"

export default () => {
    const La = Object.values({ ...LaIcons })
    addIcons(
        ...La,
        CoTiktok,
        CoAnsible,
        RiStackshareLine,
        BiCircle,
        BiCircleFill,
        FiSquareGb,
        FiSquareEs,
        FiSquareDe,
        FiSquareFr,
        FiSquareIt,
        FiSquareJp,
        FiSquarePt
    )
}
