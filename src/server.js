import { ApolloServer } from 'apollo-server'
import resolvers from './resolvers'
import typeDefs from './typeDefs'
import { prisma } from '../prisma/generated/prisma-client/index'

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => {

        // TODO Take the approach where all access must 
        // be authenticated, and only let certain routes pass through

        return {
            prisma,
            req
        }
    }
})

export default server