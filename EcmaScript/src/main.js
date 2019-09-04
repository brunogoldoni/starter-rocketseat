const myPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('OK') }, 2000);
});

async function executePromisse() {

  console.log(await myPromise());
  console.log(await myPromise());
  console.log(await myPromise());
}

executePromisse();