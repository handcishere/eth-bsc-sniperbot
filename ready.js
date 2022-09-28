const client = require('../index')
client.once('ready', async() => {
    console.log(`${client.user.tag} is ready!`)
    client.user.setActivity('~help', { type: 'STREAMING', url: 'blockchain' })
    client.chain.cache.forEach(async(chain) => {
        if (chain.available) {
            await chain.members.fetch().then((member) => {
                console.log(`Cached ${member.size} users in ${chain.name}`)
            })
        }
    })
})
