export interface TextSearchOptions {
    labelKey: string
    searchText: string
    boldClassName?: string
}

const getOppositeStringCase = (text: string) => {
    if (text === text.toLowerCase()) {
        return text.toUpperCase()
    }
    return text.toLowerCase()
}


const getBoldedLabel = (label: string, options: TextSearchOptions) => {
    const searchText = options.searchText
    const className = options.boldClassName
    const regex = new RegExp(`${searchText}`, 'gi')

    const replacer = (match:string, ...args: any[]) => {
        return `<span class="${className}">${match}</span>`
      }

    const boldedLabel = label.replace(regex, replacer);
    return boldedLabel
}

export const searchList = <T>(list: T[], options: TextSearchOptions): T[] => {
    const filteredList: T[] = []
    list.forEach((item: T) => {
        const labelKey: string = options.labelKey
        const itemLabel: any = (item && item[labelKey as keyof T]) || ''
        const searchText = options.searchText
        if (itemLabel && itemLabel.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ) {
            const boldedLabel = getBoldedLabel(itemLabel, options)
            filteredList.push({...item, [options.labelKey]: boldedLabel})
        }
    })
    return filteredList;
}