function getTempCallback(location, callback) {
  if(location.length > 0) {
    callback(undefined, 78);
  } else {
    callback('Location not found');
  }
}

getTempCallback('Colombo', function(err, tmp) {
  if(err) {
    console.log('error', err);
  } else {
    console.log('success', tmp);
  }
});

function getTempPromise(location) {
  return new Promise(function (resolve, reject){
    if(location.length > 0) {
      resolve(79);
    } else {
      reject('City not found');
    }
  });
}

getTempPromise('colombo').then(function(temp) {
  console.log('promise success', temp);
}, function(err) {
  console.log('promise error', err);
});


////////////////////////


function addPromise(a, b) {
  return new Promise(function (resolve, reject){
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('Both should be Numbers');
    }
  });
}

addPromise(7, 8).then(function(reslult) {
  console.log('Success', reslult);
}, function(err) {
  console.log('Error', err);
});
