export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const seperator = (array, limit = 20) => {
  let convert = array[0] + " + " + array.length;
  return convert.trim().substring(0, limit) + " " + "more ...".trim();
};
