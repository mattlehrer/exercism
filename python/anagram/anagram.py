def find_anagrams(word, candidates):
    alphabetically = ''.join(sorted(word.lower()))
    anagrams = []
    for candidate in candidates:
        if alphabetically == ''.join(sorted(candidate.lower())) and word.lower() != candidate.lower():
            anagrams.append(candidate)
    return anagrams