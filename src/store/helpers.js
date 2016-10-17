export function getRelation(entity, relation, storeState) {
    if (!entity[relation] || !storeState[relation]) return []
    return entity[relation].map(id => storeState[relation][id])
}

export function arrayToMap(arr) {
    return arr.reduce((acc, entity) => ({...acc, [entity.id]: entity}), {})
}

export function circleCheckInArray(arr, val){
    if (!arr.includes(val)){
        console.log('ok')
        return
    } else {
        console.log('oops')
        circleCheckInArray(arr, val)
    }
}