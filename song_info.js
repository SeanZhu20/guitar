function encodeSongName(obj){
        id = obj.getAttribute("id");
        var s = document.getElementById(id);
        location.href="song.html?"+ id +"="+encodeURI(s.innerHTML);
}

var songs = {"莉莉安-宋东野": ["http://data.17jita.com/attachment/forum/201505/09/224634xw0659659c66ocxc.gif", "http://data.17jita.com/attachment/forum/201505/09/224636niv30wvmt0h3rmta.gif"],
               "南山南-马頔": ["http://img.yuesir.com/201407/2457_gallery_14048927052286.gif", "http://img.yuesir.com/201407/2457_gallery_14048927079503.gif",
               "http://img.yuesir.com/201407/2457_gallery_14048927090816.gif"],
               "我要你-任素汐": ["http://data.17jita.com/attachment/portal/201611/12/184821rapnwennq5z88awp.png", "http://data.17jita.com/attachment/portal/201611/12/184822vlufxqqsrnussziz.png", "http://data.17jita.com/attachment/portal/201611/12/184823rtvinxd4gviernnf.png"],
               };
  songs_str = JSON.stringify(songs); 
  localStorage.setItem("songs", songs_str);

  var links_card = document.getElementById("links_card");
  var index = 0;
  for(var key in songs){
    var current_link = document.createElement("a");
    current_link.className = "links";
    current_link.id = "song" + index;
    current_link.innerHTML = key;
    current_link.setAttribute("href", "song.html");
    current_link.setAttribute("target", "_blank");
    current_link.setAttribute("onclick", "encodeSongName(this)");
    links_card.appendChild(current_link);
    var br = document.createElement("br");
    links_card.appendChild(br);
    index+=1;
  }