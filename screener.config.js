module.exports = {
  projectRepo: 'luis/github-actions-tests',
  apiKey: process.env.SCREENER_API_KEY,
  states: [
    {
      url: 'https://screener.io',
      name: 'Home'
    },
  ]
};