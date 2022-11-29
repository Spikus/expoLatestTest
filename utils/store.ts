export const saveToStore = async (key: string, value: string) =>
  await sessionStorage.setItem(key, value);

export const getValueFromStore = async (key: string) =>
  await sessionStorage.getItem(key);

export const clearValueFromStore = async (key: string) =>
  await sessionStorage.removeItem(key);