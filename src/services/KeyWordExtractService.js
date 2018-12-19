import axios from 'axios'

var getData = function() {
  // var data = [
  //   { word: 'visualMap', count: 2 }, 
  //   { word: 'continuous', count: 2 }, 
  //   { word: 'contoller', count: 2 },
  //   { word: 'contoller', count: 3 },
  //   { word: 'contoller', count: 2 }
  // ];
  // return data;
  axios.post('http://localhost:5000/key_word_extract_service')
  .then(function(response) {
    console.log(response);
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
}

const name = 'KeyWordExtractService';

export default { name, getData }