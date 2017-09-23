function sum(...nums) {
  let total = 0;  
  for(const num of nums) {
    total += num;
  }
  return total;
}

console.log(sum(1,2,3));
console.log(sum(10.5,2,3.45,123,454));