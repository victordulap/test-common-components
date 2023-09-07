export function truncateNumber(number, decimals = 0) {
  if (decimals === 0) {
    return Math.trunc(number);
  }

  const factor = 10 ** decimals;
  return (Math.floor(number * factor) / factor).toFixed(decimals);
}

export function truncateObjProps(obj) {
  return Object.entries(obj).reduce((acc, [k, v]) => ({ ...acc, [k]: truncateNumber(v) }), {});
}
