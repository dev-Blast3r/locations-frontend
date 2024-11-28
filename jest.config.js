module.exports = {
  preset: "ts-jest",
  setupFiles: ["<rootDir>/__mocks__/axios.js"],
  testEnvironment: "jsdom", // Necesario para pruebas en React
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Transforma archivos JS, JSX, TS y TSX
  },
  transformIgnorePatterns: [
    "node_modules/(?!(axios)/)", // Excluye Axios de las transformaciones ignoradas
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock de estilos
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
