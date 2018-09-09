var query = ''
var key = 'ecIHIIxXu0erhdpsCv4omv5fmNQn7ixD'
var url = ''
// gif.done(function(data) { console.log("success got data", data); });


function searchOnClick() {
    query = $('#query').val()
    console.log(query)
    url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${key}`
    event.preventDefault();
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        for (let i=0; i < data.data.length; i++){
            console.log(data.data[i].embed_url)
            $('#result').append(`<img src="${data.data[i].embed_url}"></img>`)
        }
    })
    .catch(function(error){
        console.log(error)
    })  

}