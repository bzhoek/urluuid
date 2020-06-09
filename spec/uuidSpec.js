let random = require('seedrandom');
let chunk = require('../index')

describe('Group Sort', () => {

  beforeEach(() => {
    random('aydabtu', {global: true})
  })

  it(`Generates a quartet`, () => {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!+"
    expect(characters.length).toBe(64)

    let bytes = []
    let number = 0
    for (let i = 0; i < 3; i++) {
      let rnd = Math.trunc(Math.random() * 256);
      number = number << 8 | rnd
      bytes.push(rnd)
    }
    expect(bytes).toEqual([84, 155, 126])
    expect(number).toEqual(5544830)
    let sexes = [62, 45, 9, 21]
    let string = ''
    for (let i = 0; i < 4; i++) {
      let index = number & 63;
      expect(sexes[i]).toBe(index)
      string += characters[index]
      number = number >> 6
    }

    expect(string).toBe('!Tjv')
  })

  it(`Generates a sequence`, () => {
    let result = `${chunk()}${chunk()}-${chunk()}-${chunk()}${chunk()}`
    expect(result).toBe('!j0LKodl-QwZ7-j6+p0kvt')
  })

  it(`Generates a 4-bit encoded sequence`, () => {
    expect(chunk(3, 4)).toBe('E8B056')
  })

  it(`Generates a 5-bit encoded sequence`, () => {
    expect(chunk(5, 5)).toBe('SJFTNDUV')
    expect(chunk(5, 5)).toBe('FM7T4D11')
  })

})