const unitCostFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 10,
});

export const formatUnitCost = (value: number) => unitCostFormatter.format(value);
