import Prismic from "@prismicio/client";

export const apiEndpoint = "https://portfoliokrindges.cdn.prismic.io/api/v2";

export const Client = (req = null) => {
  const options = req ? { req } : null;
  return Prismic.client(apiEndpoint, options);
};
