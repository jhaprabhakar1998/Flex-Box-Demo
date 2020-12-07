function hideAllFlexElements() {
    document.getElementsByClassName("flex")[0].style.display = "block";
    const items = document.getElementsByClassName("flex")[0].children;
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = "none";
    }
    document.getElementsByClassName("home")[0].style.display = "none";
}

function home() {
    document.getElementsByClassName("home")[0].style.display = "block";
    document.getElementsByClassName("flex")[0].style.display = "none";
}

function flexDirection() {
    hideAllFlexElements();
    document.getElementsByClassName("flex-direction")[0].style.display = "flex";
}

function flexOrder() {
    hideAllFlexElements();
    document.getElementsByClassName("flex-order")[0].style.display = "flex";
}

function flexWrap() {
    hideAllFlexElements();
    document.getElementsByClassName("flex-wrap")[0].style.display = "flex";
}

function flexGrow() {
    hideAllFlexElements();
    document.getElementsByClassName("flex-grow")[0].style.display = "flex";
}

function flexShrink() {
    hideAllFlexElements();
    document.getElementsByClassName("flex-shrink")[0].style.display = "flex";
}

function flexJustifyContent() {
    hideAllFlexElements();
    document.getElementsByClassName("flex-justify-content")[0].style.display = "flex";
}

function flexAlignItems() {
    hideAllFlexElements();
    document.getElementsByClassName("flex-align-items")[0].style.display = "flex";
}

function flexAlignContent() {
    hideAllFlexElements();
    document.getElementsByClassName("flex-align-content")[0].style.display = "flex";
}

function flexAlignSelf() {
    hideAllFlexElements();
    document.getElementsByClassName("flex-align-self")[0].style.display = "flex";
}

function flexBasis() {
    hideAllFlexElements();
    document.getElementsByClassName("flex-basis")[0].style.display = "flex";
}