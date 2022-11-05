export function getRandomNumber(max,min){
    return Math.floor(Math.random() * (max-min)) + min
}
export function searchSinglePlain(plain, searchParams){
    let searchKeys = Object.keys(searchParams)
    let searchValues = Object.values(searchParams) 
    for (let i = 0; i < searchKeys.length; i++){
        let test = Object.getOwnPropertyDescriptor(plain,searchKeys[i]).value
        if (searchValues[i] !== test){
            return false
        }else{
            return true
        }
    }

}
export function searchPlainsInCompanyByParams(companyName,searchParams){
    let listOfPlanes = companyName.listOfPlanes
    let sortedListOfPlains = [];
    for (let i = 0; i < listOfPlanes.length; i++){
        if (searchSinglePlain(listOfPlanes[i], searchParams)){
            sortedListOfPlains.push(listOfPlanes[i])
        }
    }return sortedListOfPlains
}
