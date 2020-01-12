import Snoowrap from 'snoowrap'

const r = new Snoowrap({
  userAgent: 'winnin-desafio-frontend',
  clientId: 'WikUjYybBABEhQ',
  refreshToken: '135720659019-PfdjvJYLwtP5rIzbdiYC0VfIgFc',
  accessToken: '135720659019-XW0GC0bqaImr261cS6aEsFb2KDY',
})

// const r = new Snoowrap({
//   userAgent: process.env.USER_AGENT,
//   clientId: process.env.CLIENT_ID,
//   refreshToken: process.env.REFRESH_TOKEN,
//   accessToken: process.env.ACCESS_TOKEN,
// })

export default r
