const mapping = (param) => {
  if (param === "TOP") {
    return 0;
  } else if (param === "Showbiz") {
    return 1;
  } else if (param === "News") {
    return 2;
  } else if (param === "Life") {
    return 3;
  } else if (param === "Regional") {
    return 4;
  } else if (param === "Intermezo") {
    return 5;
  } else if (param === "Trending") {
    return 6;
  } else if (param === "Videos") {
    return 7;
  } 
};

export default mapping;