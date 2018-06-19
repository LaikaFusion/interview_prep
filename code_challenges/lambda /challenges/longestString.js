function longestString(arr) {
    var result = '';
    for (var i = 0; i<arr.length; i++){
      if (arr[i].length > result.length){
        result = arr[i];
      }
    }
    return result;
  }