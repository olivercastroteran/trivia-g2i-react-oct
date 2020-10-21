import { decodeEntities } from './decodeHtmlEntities';

describe('Decode HTML entites before render', () => {
  it('Should decode entities', () => {
    const str = 'The Klingon home planet is Qo&#039;noS.';
    const decodeStr = decodeEntities(str);
    expect(decodeStr).toBe("The Klingon home planet is Qo'noS.");
  });
});
