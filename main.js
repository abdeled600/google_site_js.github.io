function AFFICHER(bouton, id) {
  var div = document.getElementById(id);
  var button = document.getElementById("button");

  if(div.style.display=="none") {
    div.style.display = "block";
    button.style.display = "none";
  }

}

function recherche()
{

var recher= document.getElementById("A").value;
window.location.href="https://www.google.fr/#q="+recher+"";

}
