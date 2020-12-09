const isNameValid = (name) => {
  if (name.length < 1) {
    return false;
  }
  return true;
};

export default isNameValid;