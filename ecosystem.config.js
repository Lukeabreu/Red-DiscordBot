module.exports = {
	apps: [
		{
			name: 'Red DiscordBot',
			exec_mode: 'cluster',
			instances: 2, // Or a number of instances
			interpreter: '/home/forge/redenv/bin/python',
			script: '/home/forge/redenv/bin/redbot nehalem',
			args: 'start',
			watch: true,
		}
	]
}