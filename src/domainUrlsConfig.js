let config, baseUrl;
if (process.env.REACT_APP_STAGE === "test") {
  baseUrl =
    "http://138.68.87.253:8888";

} else if (process.env.REACT_APP_STAGE === "prod") {
  baseUrl =
    "http://138.68.87.253:8888";
} else{
  baseUrl =
    "http://138.68.87.253:8888";
}
config = {
  baseUrl,
};

export default config;
