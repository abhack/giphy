var query = ''
var key = 'ecIHIIxXu0erhdpsCv4omv5fmNQn7ixD'
var url = ''
// gif.done(function(data) { console.log("success got data", data); });


function searchOnClick() {
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
}

//attempted to create a function to retrieve the animation url from the HTML element, then replace the <img> tag src attribute value
function animateImage(){   
    $(document).ready(function () {
    $('#results img').click(function () {  // seems to sort of work, but requires x2 clicks
    var gifUrl = $(this).attr('class')
    console.log(gifUrl)
    this.setAttribute('src', gifUrl)  //boom! a little buggy, but functional after a couple clicks

    /*  keeping all of this as evidence that I tried just about everything 
        var animationUrl = $('img').data('url')  //unfortunately appears to only be retrieving the first img tag values, not the unique element
        var gifId = this.key
        console.log(gifId)
        console.log(document.querySelector(`#${gifId}`).target.dataset.class)
        var test = document.getElementById(`#${gifId}`)
        $(`#${gifId}`).setAttribute('src','class')
        console.log(test)
        gifId.getAttribute('class')
        document.querySelector('.animate').setAttribute('src',animationUrl)
    */
})
    })
}

function addTopicOnClick() {
    event.preventDefault();
    var topic = $('#topic').val()
    $('#add-topic').append(`<button a="${topic}" style="margin:10px;">${topic}</button>`)
    $('#topic').empty()
}