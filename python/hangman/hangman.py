# Game status categories
# Change the values as you see fit
STATUS_WIN = "win"
STATUS_LOSE = "lose"
STATUS_ONGOING = "ongoing"


class Hangman:
    def __init__(self, word):
        self.remaining_guesses = 9
        self.status = STATUS_ONGOING
        self.word = word
        self.masked = ['_' for i in range(len(word))]

    def guess(self, char):
        if self.status == STATUS_WIN:
            raise ValueError('Already won')
        if self.status == STATUS_ONGOING:
            if char in self.word and not char in self.masked:
                indices = [i for i, x in enumerate(self.word) if x == char]
                for i in indices:
                    self.masked[i] = char
                if not '_' in self.masked:
                    self.status = STATUS_WIN
            else:
                if self.remaining_guesses == 0:
                    self.status = STATUS_LOSE
                else:
                    self.remaining_guesses = self.remaining_guesses - 1
        else:
            raise ValueError('Already lost')

    def get_masked_word(self):
        return ''.join(self.masked)

    def get_status(self):
        return str(self.status)
