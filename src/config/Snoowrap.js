import Snoowrap from "snoowrap";

const r = new Snoowrap({
  userAgent: process.env.REACT_APP_USER_AGENT,
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET,
  username: process.env.REACT_APP_REDDIT_USER,
  password: process.env.REACT_APP_REDDIT_PASS
});

export default r;
