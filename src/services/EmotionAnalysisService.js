var getData = function() {
  var data = [ 
    { id: '1', content: 'this is fuker', type: 1 },
    { id: '2', content: 'this is shiter', type: 0 },
    { id: '3', content: 'this is damner', type: 1 }, 
    { id: '4', content: 'this is dogger', type: 1 }, 
  ];
  return data;
}

const name = 'EmotionAnalysisService';

export default { name, getData }