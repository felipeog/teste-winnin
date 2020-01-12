import Snoowrap from 'snoowrap'

const r = new Snoowrap({
  userAgent: process.env.REACT_APP_USER_AGENT,
  clientId: process.env.REACT_APP_CLIENT_ID,
  refreshToken: process.env.REACT_APP_REFRESH_TOKEN,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
})

export default r
