var quicksortRecursive = function(leftIndex, rightIndex, array){

  console.log("Entrei", array, leftIndex, rightIndex);

  var lowIndex = leftIndex;
  var highIndex = rightIndex;
  var pivotIndex = rightIndex;

  if(lowIndex >= highIndex){
    return;
  }

  var pivotValue = array[pivotIndex];
  while(lowIndex < highIndex){
    console.log(array);
    //andar pra direita até achar um maior que o pivo
    var lowValue = array[lowIndex];
    while(lowValue < pivotValue && lowIndex < highIndex){
      lowIndex++;
      lowValue = array[lowIndex];
    }

    //andar pra esquerda até achar um menor que o pivo
    var highValue = array[highIndex];
    while((highValue > pivotValue || highValue === lowValue) && lowIndex < highIndex){
      highIndex--;
      highValue = array[highIndex];
    }
    swap(lowIndex, highIndex, array);

  }

  //lowIndex == highIndex
  if(array[highIndex] > pivotValue){
    swap(highIndex, pivotIndex, array);
  }
  
  pivotIndex = highIndex;
  quicksortRecursive(leftIndex, pivotIndex - 1, array);
  quicksortRecursive(pivotIndex + 1, rightIndex, array);
  
};

var quicksort = function(array){
  quicksortRecursive(0, array.length - 1, array);
};

var swap = function(i, j, array){
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  console.log("Swap (" + i + "," + j + ")", array);
}

var array = [6,3,8,6,0,2,2,6,4,13];
quicksort(array);
console.log(array);