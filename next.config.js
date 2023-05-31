module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
      secret: "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING"
  },
  publicRuntimeConfig: {
      apiUrl: process.env.NODE_ENV === "development"
          ? "http://localhost:3000/api" // development api
          : "http://vercel.com/aqilaaaaaaa-s-team/cashless-shop/api" // production api
  }
}
