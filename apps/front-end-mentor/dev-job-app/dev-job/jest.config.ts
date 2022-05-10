module.exports = {
  displayName: 'front-end-mentor-dev-job-app-dev-job',
  preset: '../../../../jest.preset.ts',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': 'babel-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/apps/front-end-mentor/dev-job-app/dev-job'
};
