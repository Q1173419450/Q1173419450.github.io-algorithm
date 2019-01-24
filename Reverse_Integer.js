var reverse = function(x) {
  if (x < 0) return -1 * reverse(-x);
  const r = parseInt(`${x}`.split('').reverse().join(''), 10);
  if (r > 2 ** 31 - 1) return 0;
  
  return r;
};

var reverse = function(x) {
  let result = 0;
  
  // 模十法
  while (x) {
    result = result*10 + x%10;
    x = parseInt(x/10)
  }
  if (result > Math.pow(2, 31)- 1 || result < Math.pow(-2, 31)) {
    return 0;
  }
  return r;
};

console.log(reverse('135000'))