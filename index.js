module.exports = function BrokerAnywhere(mod) {
	const { command } = mod.require

	command.add('broker', () => { mod.send('S_NPC_MENU_SELECT', 1, { type: 28 }) })
}