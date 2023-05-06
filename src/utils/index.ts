

export const getPageHeight = (element: HTMLElement, print: boolean = false) => {
    let actualHeight = element.clientHeight
    let pageHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--c-page-height').replace('px', ''))

    if (!print) {
        pageHeight = pageHeight * 1.5
    } else {
        actualHeight = actualHeight * 0.66
    }

    if (actualHeight / pageHeight === 0) {
        return actualHeight
    }

    const numPages = Math.ceil(actualHeight/pageHeight)
    const newHeight = numPages * pageHeight

    return (newHeight/pageHeight) * pageHeight
}
