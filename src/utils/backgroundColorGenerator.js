const defaultBGColor = "rgb(169, 101, 94), rgb(27, 15, 15)";

const bgVariants = [
  defaultBGColor,
  "rgb(30, 51, 100), rgb(3, 6, 11)",
  "rgb(64, 85, 89), rgb(6, 8, 8)",
  "rgb(51, 79, 102), rgb(5, 7, 10)",
  "rgb(129, 24, 46), rgb(12, 2, 4)",
  "rgb(47, 80, 106), rgb(4, 8, 10)",
  "rgb(148, 105, 80), rgb(8, 8, 8)"
];

const getIndexInRange = (end, start = 0) =>
  Math.floor(Math.random() * (end - start) + start);

const bgVariantsLength = bgVariants.length;

const getBGColor = () =>
  `linear-gradient(${bgVariants[getIndexInRange(bgVariantsLength)]} 95%)`;

export default getBGColor;
