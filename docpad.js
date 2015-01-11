docpadConfig = {
	templateData: {

		site: {
			url: "http://ivorypenguin.github.com/moraine",
			title: "moraine",
			description: "a witty description, need to write it",
			keywords: "",
			author: "Aaron T. Maturen",
			email: "aaron@ivorypenguin.com",
			color: "red",
			styles: [
				"/semantic.min.css",
				"/style.css",
				"http://fonts.googleapis.com/css?family=Ubuntu+Mono:400,700,400italic,700italic"
			],
			scripts: [
				"/bower_components/jquery/dist/jquery.min.js",
				"/semantic.min.js"
			],
			sections: [
				{
					name: 'about',
					link: 'about.html'
				},{
					name: 'docs',
					link: 'docs.html'
				},{
					name: 'contribute',
					link: 'contribute.html'
				}
			]
		},

		getSiteTitle: function() {
			return this.site.title === void 0 ? this.site.title : this.document.title;
		},

		plugins: {
			ghpages: {
				deployRemote: "origin",
				deployBranch: "master"
			}
		}
	}
	
};

module.exports = docpadConfig;