// 630eb68f-e0fa-5ecc-887a-7c7a62614681 = 8-4-4-4-12 = 32 char, 128 bits
// !TjvuYNV-A7Jg-Tf+ZjU64 = 8-4-8 = 20 char, 120 bits
// 26 + 26 + 10 + 2 = 64 = 6 bits

const characters = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!+"

function chunk(bytes = 3, bits = 6) {
  if (bytes * 8 % bits !== 0) {
    return
  }

  let number = 0
  for (let i = 0; i < bytes; i++) {
    let rnd = Math.trunc(Math.random() * 256);
    number = number << 8 | rnd
  }

  let result = ''
  for (let i = 0; i < (bytes * 8 / bits); i++) {
    let index = number & Math.pow(2, bits) - 1;
    result += characters[index]
    number = number >> bits
  }
  return result
}

module.exports = chunk

