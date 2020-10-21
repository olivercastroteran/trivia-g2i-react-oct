import { answers } from '../../../Utils/Tests/mockAnswers';
import { getCorrects } from './getCorrects';

describe('Results page', () => {
  it('Should render correct score', () => {
    const corrects = getCorrects(answers);
    expect(corrects).toBe(9);
  });
});
