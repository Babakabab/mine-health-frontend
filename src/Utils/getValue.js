const getValue = (object, address) => {
  let value;
  address.forEach((property, index) => {
    if (index === 0) {
      value = object[address[0]];
    } else {
      value = value[address[index]];
    }
  });
  return value;
};