function bowdlerize (input, dictionary) {
  if (typeof input !== 'string') {
    throw new Error('Input should be a string')
  }

  if (
    !Array.isArray(dictionary) ||
    dictionary.filter(item => typeof item !== 'string').length > 0
  ) {
    throw new Error('Invalid dictionary format')
  } else {
    let myWords = input.split(' ')
    let result = []

    myWords.forEach(word => {
      if (dictionary.includes(word.toLowerCase())) {
        //test => t**t
        let resultString = word[0]
        for (var i = 1; i < word.length - 1; i++) {
          resultString += '*'
        }
        resultString += word[word.length - 1]
        result.push(resultString)
      } else {
        result.push(word)
      }
    })

    return result.join(' ')
  }
}

const app = {
  bowdlerize
}

module.exports = app
