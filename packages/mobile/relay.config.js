module.exports = {
  // ...
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  src: "./src",
  schema: "./graphql/schema.gql",
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
  extensions: ["ts", "tsx"],
  language: "typescript"
}
