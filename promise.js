const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve('সফলভাবে ডেটা পাওয়া গেছে!');
    } else {
      reject('error  হয়েছে!');
    }
  }, 2000);
});

myPromise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });

