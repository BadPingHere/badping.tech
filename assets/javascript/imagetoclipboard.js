function copy() {
    var copyText = document.getElementById("myInput");
    copyText.hidden = false;
    copyText.select();
    document.execCommand("copy");
    copyText.hidden = true;
    alert("Copied the text: " + copyText.value);
  }