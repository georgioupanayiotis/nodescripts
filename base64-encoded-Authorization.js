var username = 'Test';
var password = '123';
var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');

var header = {'Host': 'www.example.com', 'Authorization': auth};
var request = client.request('GET', '/', header);
