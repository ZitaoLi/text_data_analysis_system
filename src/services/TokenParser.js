var parseToken = function(token) {
  if (!token) return '';
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

export default {
  parseToken
}