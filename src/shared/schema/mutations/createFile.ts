import { graphql } from "@/shared/graphql";

export const createFileMutation = graphql(`
  mutation CreateFile($input: CreateFile!) {
    createFile(input: $input) {
      ...FileFragment
    }
  }
`);
