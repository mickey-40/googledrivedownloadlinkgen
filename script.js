// create variables
const gLink = document.getElementById("glink");
const btn = document.getElementById("btn");
const downloadLink = document.getElementById("download-link");

btn.addEventListener("click", generateLink);

function generateLink(e){
  //so page does not reload
  e.preventDefault();
  // console.log(gLink.value);

  const gLinkValue = gLink.value;
  //confirms link is a google file link
  const confirmLink = gLink.value.includes('https://docs.google.com/file/d/');
  // console.log(confirmLink);

  if (confirmLink){
    const getDownloadLink = gLink.value
    .replace("https://docs.google.com/file/d/","https://drive.google.com/us?export=download&id=")
    .replace("/view?usp=sharing","").replace("/edit?usp=sharing","");

    // console.log(getDownloadLink);
    downloadLink.value = getDownloadLink;

    function copyText (target){
        // console.log(target.value)
        if (target.value == ""){
          alert("Please generate a download link")
        } else {
          navigator.clipboard.writeText(target.value).then(()=>{
            alert("Link has been copied to clipboard")
          })
        }
    }
    const copy = document.querySelector(".copy");
    // console.log(copy)
    copy.addEventListener("click", ()=>{
      return copyText(downloadLink);
    })

    //embed audio function
    const audio1 = '<audio width="300" height="32" controls="controls" src="';
    const audio2 = '" type="audio/mp3"></audio>';
    const embedAudio = document.getElementById('embed-audio');
    embedAudio.value =`${audio1}${downloadLink.value}${audio2}`;
    // console.log(embedAudio.value)
    const copyAudio = document.querySelector(".copy-audio");
    copyAudio.addEventListener("click", ()=>{
      return  copyText(embedAudio);
    });

    // embed video
    
    const video1 = '<iframe src="';
    const video2 = '/preview" width="560" height="315"></iframe>';
    const embedVideo = document.getElementById("embed-video");
    embedVideo.value = `${video1}${downloadLink.value}${video2}`;
    // console.log(embedVideo.value);
    const copyVideo = document.querySelector(".copy-video");
    copyVideo.addEventListener("click", ()=>{
      return  copyText(embedVideo);
    });
  } else {
    alert("Please enter a Google Drive File link.")
  }
}

