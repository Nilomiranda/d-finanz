import * as Chance from 'chance'

const chance = new Chance()

export const generateRandomCode = (length: number = 6) => {
  return chance.string({ length, pool: 'ABCDEFGHIJKLMNOPQRSTUVXWYZ123456789' })
}
