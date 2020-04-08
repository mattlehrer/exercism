""" Bob answers 'Sure.' if you ask him a question, such as "How are you?".

He answers 'Whoa, chill out!' if you YELL AT HIM (in all capitals).

He answers 'Calm down, I know what I'm doing!' if you yell a question at him.

He says 'Fine. Be that way!' if you address him without actually saying anything.

He answers 'Whatever.' to anything else. """

def is_yell(string):
    return not any(c.islower() for c in string) and not all(not c.isalpha() for c in string)

def response(hey_bob):
    hey_bob = hey_bob.strip()
    if not hey_bob:
        return 'Fine. Be that way!'
    if hey_bob[-1] == '?':
        if is_yell(hey_bob):
            return 'Calm down, I know what I\'m doing!'
        return 'Sure.'
    if is_yell(hey_bob):
        return 'Whoa, chill out!'
    return 'Whatever.'
