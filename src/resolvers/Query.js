const Query = {
    async projects(parent, args, { prisma }, info) { },
    
    async companies(parent, args, { prisma }, info) { },
    
    async company(parent, args, { prisma }, info) { },
    
    async me(parent, args, { prisma }, info) { },
    
    async account(parent, args, { prisma }, info) { }
}

export { Query as default }