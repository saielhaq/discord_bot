module.exports = {
    name: 'ready',
    once: true,
    async execute(client){
        console.log(`${client.user.tag} successfully logged in.`)
        const channel = client.channels.cache.get('1176080045064867940');
        channel.send('**Status: On! 🦈**');
        
    }
}   