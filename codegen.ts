import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:9000/query",
  documents: ["src/entities/**/**/schema/**/*.ts", "src/shared/schema/**/*.ts"],
  generates: {
    "src/shared/graphql/": {
      preset: "client",
      plugins: [],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
