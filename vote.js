const API_URL = `https://api.thecatapi.com/v1/`;
const API_KEY = "DEMO-API-KEY";

let currentImageToVoteOn;

function showHistoricVotes() {
  
  document.getElementById('vote').style.display = 'none';
  document.getElementById('history').style.display = 'grid';

  const url = `${API_URL}votes?limit=10&order=DESC`;

  fetch(url,{headers: {
    'x-api-key': API_KEY
  }})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
  
    data.map(function(voteImagem) {
    const imageData = voteImagem.image
    const image = document.createElement('img');
     image.src = imageData.url 
     image.classList.add('image')       
    const bordaImagem = document.createElement('div');
    
      if(voteImagem.value<0)
      {
        bordaImagem.classList.add('red') 

      } else {
        bordaImagem.classList.add('green')
      }
      
    bordaImagem.classList.add('imgborda');

    bordaImagem.appendChild(image)
       
    document.getElementById('borda').appendChild(bordaImagem);
       
    });
  
  })
  .catch(function(error) {
     console.log(error);
  });
  
}

function showVoteOptions() {
  document.getElementById("borda").innerHTML = '';
  
  document.getElementById('vote').style.display = 'grid';
  document.getElementById('history').style.display = 'none';
  
  showImageToVoteOn()

}

function showImageToVoteOn() {
  
  const url = `${API_URL}images/search`;

  fetch(url,{headers: {
    'x-api-key': API_KEY
  }})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    currentImageToVoteOn = data[0];
    document.getElementById("image-to-vote").src= currentImageToVoteOn.url;
  });

}

function vote(value)
{
  
  const url = `${API_URL}votes/`;
  const body = {
    image_id:currentImageToVoteOn.id,
    value
  }
  fetch(url,{method:"POST",body:JSON.stringify(body),headers: {
    'content-type':"application/json",
    'x-api-key': API_KEY
  }})
  .then((response) => {
    showVoteOptions()
  })
}

showVoteOptions()