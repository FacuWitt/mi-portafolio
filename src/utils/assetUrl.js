const ABSOLUTE_URL_REGEX = /^(?:[a-z]+:)?\/\//i;

export const toAssetUrl = (path = "") => {
  if (!path) return "";
  if (ABSOLUTE_URL_REGEX.test(path)) return path;

  const normalizedPath = path.replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}${normalizedPath}`;
};
