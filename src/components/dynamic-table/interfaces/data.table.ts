export interface ItemInfo {
    rating: number
    features: Array<string>
}

export default interface DataSet {
    brand_id: string
    position: number
    info: ItemInfo
    terms_and_conditions: string
    logo: string
    play_url: string
}
