/*
  Bob answers 'Sure.' if you ask him a question.

  He answers 'Whoa, chill out!' if you yell at him.

  He retorts 'Calm down, I know what I'm doing!' if you yell a question at him.

  He says 'Fine. Be that way!' if you address him without actually saying anything.

  He answers 'Whatever.' to anything else.
*/

export const hey = message => {
  message = message.trim();
  if (!message) return 'Fine. Be that way!';
  if (message.endsWith('?')) {
    if (message.match(/^([^A-Z]|\s)*\?$/) || message.match(/[a-z]/)) return 'Sure.';
    return `Calm down, I know what I'm doing!`;
  }
  if ((message.match(/^[^a-z]*$/) || message.match(/^([A-Z]|\s)*$/)) && !message.match(/^([0-9]|\W)*$/)) return 'Whoa, chill out!';
  return 'Whatever.';
};
