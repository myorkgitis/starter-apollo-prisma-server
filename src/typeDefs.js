import {gql} from 'apollo-server'

const typeDefs = gql`
type Query {
  
}

type Mutation {
    
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}
`
export default typeDefs