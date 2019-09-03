let myPromise = function(){
  return new Promise(function(resolve, reject){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/brunogoldoni');
    xhr.send(null)

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status == 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('Erro na Requisição');
        }
      }
    }
  });
}

myPromise()
  .then(function(response){
    console.log(response)
  })
  .cath(function(resolve){
    console.log(resolve)
  })