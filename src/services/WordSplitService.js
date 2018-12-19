var getData = function() {
  var data = [
    { word: 'visualMap', count: 2 }, 
    { word: 'continuous', count: 2 }, 
    { word: 'contoller', count: 2 },
    { word: 'contoller', count: 2 },
    { word: 'contoller', count: 2 }
  ];
  return data;
}

const name = 'WordSplitService';

export default { name, getData }