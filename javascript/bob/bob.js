/*
  Bob answers 'Sure.' if you ask him a question.

  He answers 'Whoa, chill out!' if you yell at him.

  He retorts 'Calm down, I know what I'm doing!' if you yell a question at him.

  He says 'Fine. Be that way!' if you address him without actually saying anything.

  He answers 'Whatever.' to anything else.
*/

export const hey = message => {
  const isSilence = m => !m;
  const isQuestion = m => m.endsWith('?');
  const isYelling = m => (m.match(/^[^a-z]*$/) || m.match(/^([A-Z]|\s)*$/)) && !m.match(/^([0-9]|\W)*$/);

  message = message.trim();
  if (isSilence(message)) return 'Fine. Be that way!';
  if (isQuestion(message)) return isYelling(message) ? `Calm down, I know what I'm doing!` : 'Sure.';
  if (isYelling(message)) return 'Whoa, chill out!';
  return 'Whatever.';
};
