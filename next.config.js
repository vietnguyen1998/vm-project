const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  externals: {
    sqlite3: "commonjs sqlite3",
  },
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'en',
  },
  env: {
    MYSQL_HOST: process.env.MYSQL_HOST,
    MYSQL_DATABASE: process.env.MYSQL_DATABASE,
    MYSQL_USERNAME: process.env.MYSQL_USERNAME,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    MYSQL_PORT: process.env.MYSQL_PORT,
    GOOGLE_ANALYTICS_VIEW_ID: process.env.GOOGLE_ANALYTICS_VIEW_ID,
    GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
  },
};
