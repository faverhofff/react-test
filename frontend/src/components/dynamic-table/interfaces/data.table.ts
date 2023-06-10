export interface DataSet {
    brand_id: string
    position: number
    info: ItemInfo
    terms_and_conditions: string
    logo: string
    play_url: string
}

export interface DataSetStruct {
    [key: string]: DataSet;
}

export interface ItemInfo {
    rating: number
    features: Array<string>
}