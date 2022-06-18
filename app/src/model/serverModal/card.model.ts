interface SlideImage {
    desktop: string,
    tablet: string
    mobile: string
}

interface PriceDetail{
    fromPrice: number,
    fromPriceBeautify: string
    discountSaved: number
    oldPriceBeautify: string
    pricingPercentage: number
    pricePerNight:string
}

export interface Card {
    id: number,
    title: string,
    destination:string
    images: SlideImage[]
    days: number,
    url: string,
    map: null,
    highlights: null,
    includes: null,
    priceDetail: PriceDetail
    tags: null,
    crafterDetail: null,
    hasPrivateTour: boolean,
    hasSoloTraveller: boolean,
    headLine: null,
    tagHeadLine: [],
    isLandOnly: boolean,
    isValid: boolean,
    extraNights: number
}
