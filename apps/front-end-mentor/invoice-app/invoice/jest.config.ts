module.exports = {
  displayName: 'front-end-mentor-invoice-app-invoice',
  preset: '../../../../jest.preset.ts',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': 'babel-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../coverage/apps/front-end-mentor/invoice-app/invoice'
};
