export const NumberFormat = value =>{
    return Intl.NumberFormat('tr',{
        notation:'compact',
        maximumFractionDigits: 1
    }).format(value)
}