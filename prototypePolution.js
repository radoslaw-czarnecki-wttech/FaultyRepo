function extend(target, source) {
  for (let key in source) {
    if (source[key] instanceof Object) {
      target[key] = extend(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}
