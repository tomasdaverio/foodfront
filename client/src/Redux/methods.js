
export const quickSort=(array) =>{
 
    if(array.length>1){
      let right = [];
      let left = [];
      let pivote = [array[0]];
    for(let i=1 ; i<array.length ; i++){
      if(array[i].hscore>=array[0].hscore){
            right.push(array[i]);
      } else { left.push(array[i]);
      }
    } array = (quickSort(left).concat(pivote)).concat(quickSort(right))
    } 
    return array;
    }

export const quickSortDESC =(array) =>{
 
    if(array.length>1){
      let right = [];
      let left = [];
      let pivote = [array[0]];
    for(let i=1 ; i<array.length ; i++){
      if(array[i].hscore>array[0].hscore){
            left.push(array[i]);
      } else { right.push(array[i]);
      }
    } array = (quickSortDESC(left).concat(pivote)).concat(quickSortDESC(right))
    } 
    return array;
    }


export const sortAZ = (array) => {
  if(!array.length) return array ;
  let result = array.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
      return 0;
  })
  return result
}

export const sortZA = (array) => {
  if(!array.length) return array ;
 let result = array.sort(function (a, b) {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
      return 0;
  })
  return result
}
