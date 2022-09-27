import { metaKeywords } from "../config/config";

export function stringLimit(str, limit = 300) {
  let result = "";
  if (str) {
    result = str.slice(0, limit);
    result.substring(result.indexOf(' ') + 1, result.length);
  } else {
    result = "";
  }
  return result;
}

export function getTextContent(html) {
  // console.log('html', html);
  return html && typeof html === 'string' ? html.replace(/<[^>]*>/g, "").replace(/&nbsp;/gi, "").replace(/\r/gi, "").replace(/\n/gi, "").replace(/&/g, "&amp;") : "";
}

export function getRssContent(html) {
  return html && typeof html === 'string' ? html
    .replace(/<iframe.+?<\/iframe>/gi, "")
    .replace(/<script.+?<\/script>/gi, "")
    .replace(/&/g, "&amp;")
    // .replace(/&nbsp;/gi, "<br/>")
    // .replace(/\r/gi, "<br/>")
    // .replace(/\n/gi, "<br/>")
    .replace(/style="[^"]*"/gi, "") : "";
}

export function slug(str) {
  return str && typeof str === 'string' ? str.trim().toLowerCase().replace(str, str).replace(/[`~!©¯¢£¥€®@#$%^&*()_|+=?;:'",.<>‘’\{\}\[\]\\\/]/gi, '').replace(/\s/g, '-').replace(/\-\-+/g, '-') : '';
}

export function splitParagraph(html) {
  return html ? html.match(/<script.+?>.+?<\/script>/gi) : [];
}

export function getParagraphs(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const arr = [...doc.body.childNodes]
    .map(child => child.outerHTML || child.textContent);
  return arr;
}

export function getArrayTagsHtmlString(html) {
  return html ? html.split(/<\/?(?:div|p)[^>]*>\s*/im) : [];
}

export function getTwitterUrl(html) {
  let links = html && typeof html === 'string' ? html.match(/href="([^"]*")/gi) : [];
  // console.log('links', links);
  if (links && links.length > 0) {
    for (let index = 0; index < links.length; index++) {
      if (links[index].includes('twitter.com') && links[index].includes('/status/') && typeof links[index] === 'string') {
        let link = links[index].replace(/href\=/gi, "").replace(/['"]+/gi, "");
        return link;
      }
    }
  }
  return links;
}

export function getInstagramUrl(html) {
  let links = html && typeof html === 'string' ? html.match(/href="([^"]*")/gi) : [];
  // console.log('links', links);
  if (links && links.length > 0) {
    for (let index = 0; index < links.length; index++) {
      if (links[index].includes('instagram.com') && typeof links[index] === 'string') {
        let link = links[index].replace(/href\=/gi, "").replace(/['"]+/gi, "");
        return link;
      }
    }
  }
  return links;
}

export function getFacebookUrl(html) {
  let links = html && typeof html === 'string' ? html.match(/src="([^"]*")/gi) : [];
  // console.log('links', links);
  if (links && links.length > 0) {
    for (let index = 0; index < links.length; index++) {
      if (links[index].includes('facebook.com') && typeof links[index] === 'string') {
        let link = links[index].replace(/src\=/gi, "").replace(/['"]+/gi, "");
        link = decodeURIComponent(link).replace(/&amp;/gi, "&");
        let linkSplit = link && typeof link === 'string' ? link.split('&') : [];
        if (linkSplit && linkSplit.length > 0) {
          for (let index2 = 0; index2 < linkSplit.length; index2++) {
            if (linkSplit[index2].includes('href')) {
              let fbLink = linkSplit[index2].replace(/href\=/gi, "").replace(/['"]+/gi, "");
              return fbLink;
            }
          }
        }
        return null;
      }
    }
  }
  return links;
}

export function getInstagramUrlShortCode(url) {
  return url && typeof url === 'string' ? url.replace(/\?.*/, '').replace(/\/+$/, "").split("/").pop() : "";
}

export function splitScript(html) {
  return html && typeof html === 'string' ? html.match(/<([A-Z][A-Z0-9]*)\b[^>]*>(.*?)<\/\1>|<([A-Z][A-Z0-9]*).*?\/> | <script.+?>/gi) : [];
}

export function toHttp(url) {
  return url && typeof url === 'string' ? url.replace(/https/gi, 'http') : "";
}

export function toHttpImage(url) {
  return url && typeof url === 'string' ? url.replace(/https/gi, 'http') : "";
}

export function encodeSpace(str) {
  return str && typeof str === 'string' ? str.replace(/\s/gi, "%20") : "";
}

export function toTitleCase(str) {
  return str && typeof str === 'string' ? str.replace(/(^|\s)\S/g, l => l.toUpperCase()) : "";
}

export function toBase64(str) {
  return str && typeof str === 'string' ? typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str) : "";
}

export function shimmer(w, h) {
  return `
        <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <linearGradient id="g">
            <stop stop-color="#999" offset="20%" />
            <stop stop-color="#7b9697" offset="50%" />
            <stop stop-color="#999" offset="70%" />
            </linearGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="#999" />
        <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
        <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
        </svg>
    `;
}

export function getContentArray(content) {
  let contentDummyArray = [];
  if (content) {
    let contentDummy = getParagraphs(content.replace(/\n/gi, " "));
    // console.log("post_content", getParagraphs(content.replace(/\n/gi, " ")));
    contentDummy.map((cDummy) => {
      if (cDummy.trim()) {
        // console.log('cDummy', cDummy);
        if (cDummy.includes('twitter.com')) {
          // if (!content.includes('platform.twitter.com')) {
          // console.log('getHref', getTwitterUrl(content));
          let testContent = getTwitterUrl(cDummy);
          // console.log('testContent', getTextContent(testContent));
          if (testContent && typeof testContent === 'string') {
            let statusSplit = testContent.split('/status/');
            // console.log('statusSplit', statusSplit);
            if (statusSplit && statusSplit.length > 1) {
              contentDummyArray.push({
                twitterID: getTextContent(statusSplit[1]).replace(/\?.*/, '')
              });
            }
          }
          // }
        } else if (cDummy.includes('twitter-tweet')) {

        } else if (cDummy.includes('instagram.com')) {
          // console.log('instagram', cDummy);
          let instagramLink = getInstagramUrl(cDummy);
          // console.log('instagramLink', getInstagramUrlShortCode(instagramLink));
          if (instagramLink) {
            contentDummyArray.push({
              instagramLink: getTextContent(instagramLink).replace(/\?.*/, '')
            });
          }
        } else {
          contentDummyArray.push(cDummy);
        }
      }
    });
  }

  return contentDummyArray;
}

export function getContentArrayFromServer(content) {
  let contentDummyArray = [];
  if (content) {
    let contentDummy = getArrayTagsHtmlString(content.replace(/\n/gi, " ").replace(/!important/gi, "").replace(/<img/gi, "<amp-img width='500' height='300' layout='responsive' class='image-contain' "));
    // console.log("contentDummy", contentDummy);
    contentDummy.map((cDummy) => {
      if (cDummy.trim()) {
        if (cDummy.includes('twitter.com')) {
          // if (!content.includes('platform.twitter.com')) {
          // console.log('getHref', getTwitterUrl(content));
          let testContent = getTwitterUrl(cDummy);
          // console.log('testContent', getTextContent(testContent));
          if (testContent && typeof testContent === 'string') {
            // console.log('testContent', testContent);
            let statusSplit = testContent.split('/status/');
            // console.log('statusSplit', statusSplit);
            if (statusSplit && statusSplit.length > 1) {
              contentDummyArray.push({
                twitterID: getTextContent(statusSplit[1]).replace(/\?.*/, '')
              });
            }
          }
          // }
        } else if (cDummy.includes('twitter-tweet')) {

        } else if (cDummy.includes('instagram.com')) {
          // console.log('instagram', cDummy);
          let instagramLink = getInstagramUrl(cDummy);
          // console.log('instagramLink', getInstagramUrlShortCode(instagramLink));
          if (instagramLink) {
            contentDummyArray.push({
              instagramLink: getInstagramUrlShortCode(instagramLink)
            });
          }
        } else if (cDummy.includes('facebook.com')) {
          // console.log('instagram', cDummy);
          let facebookLink = getFacebookUrl(cDummy);
          // console.log('facebookLink', facebookLink);
          if (facebookLink) {
            contentDummyArray.push({
              facebookLink: facebookLink
            });
          }
        } else {
          contentDummyArray.push(cDummy);
        }
      }
    });
  }

  return contentDummyArray;
}

export function getTagKeywords(tagList) {
  let tagDummyArray = [];
  if (tagList && tagList.length > 0) {
    tagList.map((tag) => {
      tagDummyArray.push(tag.name);
    });
    if (tagDummyArray.length > 0) {
      let joinTags = tagDummyArray.join(",");
      return joinTags;
    } else {
      return metaKeywords;
    }
  }

  return metaKeywords;
}
