const linkToInner = `https://www.diariofemenino.com/amor/poemas-de-amor/41-poemas-para-el-dia-de-la-madre-preciosos-versos-para-conmover/`;
const linkElements = document.getElementsByClassName("poem-link");

window.onload = () => {
    console.log(linkElements.length);
    for (let i = 0; i < linkElements.length; i++) {
        linkElements[i].href = linkToInner;
    }
}