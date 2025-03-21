import { graphql } from "@/shared/graphql";

export const deleteFileMutation = graphql(`
  mutation DeleteFile($id: ID!) {
    deleteFile(id: $id)
  }
`);
