function createMultiplyTable(start, end) {
  if(isValid(start , end)){
    return getPrintStrOfMultiplyTable(start , end);
  }
  return null;
}

function isValid(start , end){
  if(start > end){
    return false;
  }
  if((start < 1 || start > 1000) || (end < 1 || end > 1000)){
    return false;
  }
  return true;
}

function getPrintStrOfMultiplyTable(start , end){
  let resultStr = "";
  for(let i = start; i <= end; i++){
    for(let j= start; j <= i; j++){
      resultStr += j + "*" + i + "=" + i * j;
      if(j < i){
        resultStr += "\t";
      }
    }
    if(i != end){
      resultStr += "\n";
    }
  }
  return resultStr;
}

module.exports = {
  createMultiplyTable,
};
