class TwoFer {
  public static twoFer(person?: string): string {
    return `One for ${person ? person : 'you'}, one for me.`
  }
}

export default TwoFer
