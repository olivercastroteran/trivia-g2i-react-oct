const getCorrects = (answers) => {
  let corrects = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i].isCorrect) {
      corrects++;
    }
  }

  return corrects;
};

export { getCorrects };
