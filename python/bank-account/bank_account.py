import threading

class BankAccount:
    def __init__(self):
        self.status = 'closed'
        self.balance = 0
        self._lock = threading.Lock()

    def get_balance(self):
        with self._lock:
            if self.status == 'open':
                return self.balance
            raise ValueError('Account not open')

    def open(self):
        with self._lock:
            if self.status == 'closed':
                self.status = 'open'
                self.balance = 0
            else:
                raise ValueError('Account already open')

    def deposit(self, amount):
        with self._lock:
            if self.status == 'open':
                if amount > 0:
                    self.balance = self.balance + amount
                else:
                    raise ValueError('Invalid deposit')
            else:
                raise ValueError('Account not open')

    def withdraw(self, amount):
        with self._lock:
            if self.status == 'open':
                if 0 < amount <= self.balance:
                    self.balance = self.balance - amount
                else:
                    raise ValueError('Invalid withdrawal')
            else:
                raise ValueError('Account not open')

    def close(self):
        with self._lock:
            if self.status == 'open':
                self.status = 'closed'
                self.balance = 0
            else:
                raise ValueError('Account already closed')
