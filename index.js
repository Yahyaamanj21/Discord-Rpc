var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "System Bot",
assets : {
large_image : "image1",
large_text : "System Bot" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Add bot" , url : "https://discord.com/api/oauth2/authorize?client_id=826190816900808774&permissions=8&scope=bot"},{label : "Join My Server",url : "https://discord.gg/zq5KMfYEUa"}]
}
})
})
client.login({ clientId : "826190816900808774" }).catch(console.error);
