const arraydiv = document.getElementById("array-test");

let objWithArray = {
  name: 'Emerson',
  age: '23',
  address: ['teste 1', 'Address 2'],
  children: [
    'mais difícil',
    [
      'mais ainda',
      'hehe'
    ],
    'não sei'
  ],
  objProperty: {
    newNAME1: 'quem sabe',
    newArray: ['quem sabe 1', {
      objProperty2: {
        newNAMEDOIS: 'PFPFPFPF',
        newArray2: ['DOIS', 'DOIDODISO']
      }
    } ,'quem sabe 2']
  }
}

function start(object) {
  transformObj(object);
}

function transformObj(object) {
  for (const property in object) {
    verifiIfIsArray(property, object[property]);
  }
}

function verifiIfIsArray(property, value) {
  let newProps = {};
  if (!Array.isArray(value) && typeof value != 'string'){
    transformObj(value);
    delete objWithArray[property];

  } else if (Array.isArray(value)){
    newProps = transformArrayInProperty(property, value);
    delete objWithArray[property];

  } else {
    newProps = setObjectCommonProperties(property, value);
  }

  objWithArray = {...objWithArray, ...newProps}
  
  transformObj(newProps);
}

function transformArrayInProperty(property, array) {
  newProps = {};
  count = 1;

  array.forEach(element => {
    newProps[property+'_'+count+'_sub'] = element;
    count ++;
  });
  
  return newProps;
}

function setObjectCommonProperties(property, value){
  let newProps = {}
  if (!objWithArray.hasOwnProperty(property)) {
    newProps[property] = value; 
    
    return newProps;
  }
}

start(objWithArray);

console.log('RESULTADO  ', objWithArray)

arraydiv.innerHTML = `<ul>${

  Object.keys(objWithArray).map(function (key) {
    return "<li>" + objWithArray[key] + "</li>"           
  }).join("")
      

}<ul>`
