import '@babel/polyfill/noConflict'
import server from './server'

server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
})