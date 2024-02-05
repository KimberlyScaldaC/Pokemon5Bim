async function sorteiaPkm(){
    console.log("oi")
    var id = Math.floor(Math.random()*151) + 1 // 1 a 151.
  
    var url = "https://pokeapi.co/api/v2/pokemon/" + id
    var response = await fetch(url)
    var data = await response.json()
    
    while(data.name != "pikachu"){
        var id = Math.floor(Math.random()*151) + 1 // 1 a 151.
        var url = "https://pokeapi.co/api/v2/pokemon/" + id
        var response = await fetch(url)
        var data = await response.json()
        console.log("entrou")
        if(data.name == "pikachu"){
            break;
        }
        
    }
    
  
    var name = data.name
    document.getElementById("pokename").innerHTML = name
  
    var sprite = data.sprites.front_default
    document.getElementById("pokeimg").src = sprite
  
    url = "https://pokeapi.co/api/v2/pokemon-species/" + id
    response = await fetch(url)
    data = await response.json()
    var desc = data.flavor_text_entries[0].flavor_text
    document.getElementById("pokesobre").innerHTML = desc
    
  }