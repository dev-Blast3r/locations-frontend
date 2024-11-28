module.exports = {
  presets: [
    "@babel/preset-env", // Soporte para ES6+
    ["@babel/preset-react", { runtime: "automatic" }],
    "@babel/preset-typescript", // Soporte para TypeScript
  ],
  plugins: [
    "@babel/plugin-proposal-private-property-in-object", // Resuelve el problema mencionado
  ],
};
