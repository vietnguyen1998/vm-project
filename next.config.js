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
};
