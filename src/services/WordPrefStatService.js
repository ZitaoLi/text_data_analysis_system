
var getData = function() {
  var data = [
    { word: 'hello', count: 4 }, 
    { word: 'word', count: 21 }, 
    { word: '!', count: 11 },
    { word: '66', count: 56 },
    { word: 'h', count: 12 },
    { word: 'gg', count: 23 },
  ];
  return data;
}

const name = 'WordPrefStatService';

export default { name, getData }