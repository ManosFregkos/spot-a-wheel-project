const dotInThousands = /\B(?=(\d{3})+(?!\d))/g;

export const formatNumber = (val) => {
  return val.toString().replace(dotInThousands, ".");
};

export const finalPrice = (rangeVal, rangeValMonths) => {
  return (20000 - rangeVal) / rangeValMonths;
};
