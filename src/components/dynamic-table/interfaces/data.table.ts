interface ItemInfo {
    rating: number
    features: Array<string>
}

interface DataSet {
    brand_id: string
    position: number,
    info: ItemInfo,
    terms_and_conditions: string
    logo: string
    play_url: string
}

interface DataTable {
    data: Array<DataSet>
}

export default DataTable;