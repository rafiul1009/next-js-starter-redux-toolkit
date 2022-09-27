export function getImageDimension(url, callback) {
  const img = new Image();
  img.src = url;
  img.onload = function () {
    callback(this.width, this.height);
  }
}

export function getImageSize(url, callback) {
  var blob = null;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "blob";
  xhr.onload = function () {
    blob = xhr.response;
    // console.log(blob, formatBytes(blob.size));
    callback(formatBytes(blob.size));
  }
  xhr.send();
}

export function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}