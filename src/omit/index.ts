export const omit =
    <T extends Record<string | number, unknown>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => {
  let newObj: Omit<T, K> = {} as Omit<T, K>;
  let objKeys: string[] = Object.keys(obj);
  let c = objKeys.filter((i) => !keys.includes(i as K));

 return c.reduce((prev, next) => {
    return  {...prev, next: obj[next]}
  }, {} as Omit<T, K>)

  // return newObj;
};
console.log();
