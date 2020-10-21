import { getQuestions } from './getQuestions';

describe('Get Questions', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('Should get questions with correct settings setup', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        category: 'Entertainment: Video Games',
        type: 'boolean',
        difficulty: 'hard',
        question:
          'In &quot;The Sims&quot; series, the most members in a household you can have is 8.',
        correct_answer: 'True',
        incorrect_answers: ['False'],
      })
    );

    const data = await getQuestions('hard', '1');

    expect(data).toEqual({
      category: 'Entertainment: Video Games',
      type: 'boolean',
      difficulty: 'hard',
      question:
        'In &quot;The Sims&quot; series, the most members in a household you can have is 8.',
      correct_answer: 'True',
      incorrect_answers: ['False'],
    });

    expect(fetch).toHaveBeenCalledTimes(1);

    expect(fetch).toHaveBeenCalledWith(
      'https://opentdb.com/api.php?amount=1&difficulty=hard&type=boolean'
    );
  });

  it('Catches errors and returns null', async () => {
    fetch.mockReject(() => 'API failure');

    const data = await getQuestions('hard', '10');

    expect(data).toEqual(null);
    expect(fetch).toHaveBeenCalledTimes(1);

    expect(fetch).toHaveBeenCalledWith(
      'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
    );
  });
});
