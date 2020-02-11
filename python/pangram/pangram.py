def is_pangram(sentence):
  return ''.join(filter(lambda x:x.isalpha(), sorted(set(sentence.lower()),key=lambda x:x.lower()))) == 'abcdefghijklmnopqrstuvwxyz'
