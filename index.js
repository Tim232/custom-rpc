const RPC = require('discord-rpc');
const rpc = new RPC.client({
    transport: "ipc"
});
    
rpc.on("ready", () => {
    rpc.setActivity({
        details: '상세설명',
        state: 'discord.gg/초대링크...?',
        startTimestamp: new Date(),
        largeImageKey: 'bg',
        largeImageText: '큰 이미지 글자...?',
        smallImageKey: 'icon',
        smallImageText: '작은 이미지 글자...?',
        buttons: [
            { label: "서포트 서버", url: "https://discord.gg/초대링크...?" },
            { label: "공식 사이트", url: "https://사이트...?/" }
        ]
    });
    
    console.log("Rich Presence Active");
});

rpc.login({
    clientId: "12312312123121"
});
