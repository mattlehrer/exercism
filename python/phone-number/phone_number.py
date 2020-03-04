import re

class PhoneNumber:
    def __init__(self, number):
        regex = r"\d+"
        matches = re.findall(regex, number)
        num = ''
        for match in matches:
            num += str(match)
        if num[0] == '1':
            num = num[1:]
        if len(num) != 10 or num[0] == '1' or num[0] == '0' or num[3] == '1' or num[3] == '0':
            raise ValueError('Invalid number')
        self.__num = num
        self.__area_code = num[:3]
        self.__exchange = num[3:6]
        self.__last_four = num[6:]

    @property
    def number(self):
        return self.__num

    @property
    def area_code(self):
        return self.__num[:3]

    def pretty(self):
        return "({}) {}-{}".format(self.__area_code, self.__exchange, self.__last_four)
