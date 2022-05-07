module.exports = {
  displayName: "feedback-ui",
  preset: "../../jest.preset.ts",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../coverage/libs/feedback-ui",
};
