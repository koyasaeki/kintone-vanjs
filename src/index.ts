import van from "vanjs-core";

const { div } = van.tags;
const Hello = () => div("Hello, VanJS!");
van.add(document.querySelector("#kintone-vanjs")!, Hello());
