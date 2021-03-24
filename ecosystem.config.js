module.exports = {
	apps: [
		{
			name: 'Red DiscordBot',
			exec_mode: 'cluster',
			instances: 2, // Or a number of instances
			script: 'redbot --name “Nehalem" --interpreter "/home/forge/redenv/bin/python" --interpreter-args "-O" -- nehalem --no-prompt',
			args: 'start',
			watch: true,
		}
	]
}