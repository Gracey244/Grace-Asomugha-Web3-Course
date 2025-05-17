function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) return resolve([]); // Handle empty input

    let results = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(value => {
        results[index] = value;
        completed++;
        if (completed === promises.length) {
          resolve(results);
        }
      }).catch(reject); // On first error, reject the outer promise
    });
  });
}
