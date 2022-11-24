export interface TextSearchOptions {
    labelKey: string
    searchText: string
    boldClassName?: string
}

const getBoldedLabel = (label: string, options: TextSearchOptions) => {
    const searchText = options.searchText
    const className = options.boldClassName
    const boldedSearchText = `<span class="${className}">${searchText}</span>`
    const regex = new RegExp(`${searchText}`, 'g')
    const boldedLabel = label.replace(regex, boldedSearchText);
    return boldedLabel
}

export const searchList = <T>(list: T[], options: TextSearchOptions): T[] => {
    const filteredList: T[] = []
    list.forEach((item: T) => {
        const labelKey: string = options.labelKey
        const itemLabel: any = (item && item[labelKey as keyof T]) || ''
        const searchText = options.searchText
        if (itemLabel && itemLabel.indexOf(searchText) > -1 ) {
            const boldedLabel = getBoldedLabel(itemLabel, options)
            filteredList.push({...item, [options.labelKey]: boldedLabel})
        }
    })
    return filteredList;
}