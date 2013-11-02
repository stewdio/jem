






JEM.includeOnce( '/blog/blog.js', function(){


	blogBranches.process = function( item ){

		item.view()
	}


	
	new BlogPost({

		title: 'Today I learned JavaScript.',
		body: 'Yup. And I stopped there. No HTML. No CSS. No CMS. No SASS, Rails, Python, PHP, SQL, MySQL, SQLite, etc. Forget it.',
		media: [

			'cat-look.gif'
		]
	})


	console.log('ok....')
})



