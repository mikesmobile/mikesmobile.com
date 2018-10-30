export class ServiceItem{
    title:string
    slug:string
    category?:string
    subcategory?:string
    type:string
    tileImage?:string
    tileText?:string
    images?: string[]
    recentInstallImages?: string[]
    video?:string
    colorSet?: string[]
    // For Products Only
    bullets?: string[]
    thumbImages?: string[]
    productOverview?:string
    technicalSpecs?:string
    options?:string
    relatedProducts?:string
    warranty?:string
    line?:string
    details?:string[]
    // For Services Only
    serviceImgCaption?:string
    textList?:string[]
    extraImages?:string[]
    extraImagesTitle?:string
    // For Grid Only
    description?:string
    //Regional Pages only
    region?:string
    
    
}
