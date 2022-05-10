import { render } from '@testing-library/react';

import DevJobDevjobTypes from './dev-job-devjob-types';

describe('DevJobDevjobTypes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< DevJobDevjobTypes />);
    expect(baseElement).toBeTruthy();
  });
});
