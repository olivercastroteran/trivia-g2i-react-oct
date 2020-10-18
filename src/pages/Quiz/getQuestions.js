async function getQuestions(difficulty, nOfQuestions) {
  try {
    const url = `https://opentdb.com/api.php?amount=${nOfQuestions}&difficulty=${difficulty}&type=boolean`;
    const result = await fetch(url);
    const data = await result.json();
    return data;
  } catch (err) {
    return null;
  }
}

export { getQuestions };
