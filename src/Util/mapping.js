const mapping = (param) => {
  if (param === "TOP") {
    return 0;
  } else if (param === "Showbiz") {
    return 1;
  } else if (param === "News") {
    return 1;
  } else if (param === "Life") {
    return 3;
  } else if (param === "Regional") {
    return 4;
  } else if (param === "Intermezzo") {
    return 5;
  } else if (param === "Trending") {
    return 6;
  } else if (param === "Videos") {
    return 7;
  } else if (param === "Sci-Tech") {
    return 1;
  } else if (param === "Sports") {
    return 1;
  } else if (param === "Biz") {
    return 1;
  } else if (param === "Movie") {
    return 11;
  } else if (param === "Story") {
    return 12;
  } else if (param === "Hobbies") {
    return 13;
  } else if (param === "Otomotif") {
    return 14;
  } else if (param === "Parenting") {
    return 1;
  } else if (param === "Corona di RI") {
    return 16;
  } else if (param === "Games") {
    return 1;
  } else if (param === "Kata Gaul") {
    return 18;
  } else if (param === "English") {
    return 1;
  } else if (param === "Music") {
    return 20;
  } else if (param === "Campus") {
    return 21;
  }
};

export default mapping;