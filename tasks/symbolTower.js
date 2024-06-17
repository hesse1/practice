const towerBuilder = (floors) =>
  [...Array(floors)].map(
    (_, i) =>
      ' '.repeat(floors - i - 1) +
      '*'.repeat(2 * i + 1) +
      ' '.repeat(floors - i - 1)
  );
