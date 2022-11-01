import data from './data.json'

export const shirtService = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return data
}
