function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    }else{
      reject('Data entered not valid');
    }
  });
}

addPromise ('n',6).then(function (sum){
  console.log(sum);
}, function (err) {
  console.log(err);
});

 