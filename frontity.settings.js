const settings = {
	name: 'avoblog',
	state: {
		frontity: {
			//url: 'http://avoblog.test',
			url: 'https://blog3.avoskinbeauty.com',
			title: 'Avoskin Blog Theme',
			description:
				'Avoskin Blog Theme'
		}
	},
	packages: [
		{
			name: 'avoblog-theme'
		},
		{
			name: '@frontity/wp-source',
			state: {
				source: {
					url: 'https://blog3.avoskinbeauty.com'
					//url: 'http://avoblog.test'
				}
			}
		},
		{
			name: "@frontity/google-analytics",
			state: {
				googleAnalytics: {
			    		trackingId: "UA-60015399-4",
			  	},
			},
		},
		'@frontity/tiny-router',
		'@frontity/html2react'
	]
};

export default settings;
