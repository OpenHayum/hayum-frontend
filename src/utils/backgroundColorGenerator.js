const defaultBGColor = "#aa6962, #4a3242 85%";

const bgVariants = [defaultBGColor, "rgb(30, 51, 100), rgb(3, 6, 11) 85%"];

const getIndexInRange = (end, start = 0) =>
  Math.floor(Math.random(end - start) + start);

const bgVariantsLength = bgVariants.length;

const getBGColor = () =>
  `linear-gradient(${bgVariants[getIndexInRange(bgVariantsLength)]})`;

export default getBGColor;
