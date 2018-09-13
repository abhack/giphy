var query = ''
var key = 'ecIHIIxXu0erhdpsCv4omv5fmNQn7ixD'
var url = ''
var giphys = {}  //store the JSON object to recall without re-running the API


function searchOnClick() {
    event.preventDefault()
    $('#results').empty()
    query = $('#query').val()
    // console.log(query)
    url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${key}&limit=10`
    event.preventDefault();
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        giphys = data
        console.log(giphys)
        for (let i=0; i < data.data.length; i++){
            // console.log(data.data[i].images.original.url)
            $('#results').append(`<img style= "margin:5px;height:22%;width:22%" onclick="animateImage()" src="${data.data[i].images.original_still.url}" class="${data.data[i].images.original.url}" id="${i}"></img>`)
            // $(`#${data.data[i].id}`).setAttributeNode('animate', `${data.data[i].images.original.url}`)
            // $(`'#${data.data[i].id}'`).setAttributeNode('still', `${data.data[i].images.original_still.url}`) 
        }
    })
    .catch(function(error){
        console.log(error)
    })  
}

//attempted to create a function to retrieve the animation url from the HTML element, then replace the <img> tag src attribute value
function animateImage(){   
    event.preventDefault();
    $('#results img').click(function () {  // seems to sort of work, but requires a couple of initial clicks, likely because it's a callback click function within a click function
    var gifUrl = $(this).attr('class')
    this.setAttribute('src', gifUrl)  //boom! a little buggy, but functional after a couple clicks

    /*  keeping all of this as evidence that I tried just about everything 
        var animationUrl = $('img').data('url')  //unfortunately appears to only be retrieving the first img tag values, not the unique element
        var gifId = this.key
        console.log(gifId)
        console.log(document.querySelector(`#${gifId}`).target.dataset.class)
        var test = document.getElementById(`#${gifId}`)
        $(`#${gifId}`).setAttribute('src','class')
        gifId.getAttribute('class')
        document.querySelector('.animate').setAttribute('src',animationUrl)
    */
    })
}

function addTopicOnClick() {
    event.preventDefault();
    var topic = $('#topic').val()
    $('#add-topic').append(`<button id="${topic}" style="margin:10px;" onclick="topicOnClick()">${topic}</button>`)
    $('#topic').empty()
}

//make the dynamically created buttons re-run the API for the button topic
function topicOnClick() {
    $('#add-topic button').click(function () {  //doesn't seem to work as a stand-alone function, perhaps because the button is dynamically created
        $('#results').empty()
    query = $(this).attr('id')
    console.log(query)
    url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${key}&limit=10`
    event.preventDefault();
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        // console.log(data)
        for (let i=0; i < data.data.length; i++){
            // console.log(data.data[i].images.original.url)
            $('#results').append(`<img style= "margin:5px;height:22%;width:22%" onclick="animateImage()" src="${data.data[i].images.original_still.url}" class="${data.data[i].images.original.url}" id="${data.data[i].id}"></img>`)
            // $(`#${data.data[i].id}`).setAttributeNode('animate', `${data.data[i].images.original.url}`)
            // $(`'#${data.data[i].id}'`).setAttributeNode('still', `${data.data[i].images.original_still.url}`) 
        }
    })
    .catch(function(error){
        console.log(error)
    })  
    })
}

//reset page when Reset button is clicked
function reset(){
    $('#add-topic').empty()
    $('#results').empty()
}