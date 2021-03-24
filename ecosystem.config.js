module.exports = {
	apps: [
		{
			name: 'Red DiscordBot',
			exec_mode: 'cluster',
			instances: 2, // Or a number of instances
			script: 'redbot nehalem',
			args: 'start',
			watch: true,
			env: {
				NODE_ENV: "development"
			},
			env_production: {
				NODE_ENV: "production"
			}
		}
	]
}