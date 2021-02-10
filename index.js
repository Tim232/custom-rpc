const rpc = require('discord-rpc')

const clientID = '674813875291422720'

rpc.register(clientID)

const client = new rpc.Client({transport: 'ipc'})

const update = () => client.setActivity({
    details: '상세설명',
    largeImageKey: '큰 이미지 키...?',
    largeImageText: '큰 이미지 글자...?',
    state: 'discord.gg/초대링크...?',
    buttons: [
        { label: "서포트 서버", url: "https://discord.gg/초대링크...?" },
        { label: "공식 사이트", url: "https://사이트...?/" }
    ],
})

client.on('ready', async () => {
    await update()
    setInterval(update, 15000)
})

client.login({clientId: clientID}).catch(console.error)
