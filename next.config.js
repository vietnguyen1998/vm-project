const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack5: false,
  externals: {
    sqlite3: "commonjs sqlite3",
  },
};
