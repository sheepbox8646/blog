import { graphql } from "@octokit/graphql"

const query = () => `
query($searchQuery: String!, $first: Int!) {
  search(query: $searchQuery, type: DISCUSSION, first: $first) {
    nodes {
      ... on Discussion {
        id
        number
        title
        url
        createdAt
        author {
          login
          avatarUrl
        }
        body
      }
    }
  }
}
`.trim()

interface PassageByGithubDiscussion {
  id: string
  number: number
  title: string
  url: string
  createdAt: string
  author: {
    login: string
    avatarUrl: string
  }
  body: string
}

export default defineEventHandler(async (event) => {
  const authors = process.env.AUTH_ID!.split(",");
  const { limit = 20 } = getQuery(event)
  const ql = graphql.defaults({
    headers: {
      authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    }
  })
  const { search } = await ql<{ search: { nodes: PassageByGithubDiscussion[] } }>(query(), {
    first: Number(limit),
    searchQuery: `repo:${process.env.REPO_OWNER}/${process.env.REPO_NAME} is:discussion`
  })
  return {
    success: true,
    data: search.nodes.filter(node => authors.includes(node.author.login)),
  }
})