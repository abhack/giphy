var query = ''
var key = 'ecIHIIxXu0erhdpsCv4omv5fmNQn7ixD'
var gif = $.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${key}&limit=5`);
gif.done(function(data) { console.log("success got data", data); });


