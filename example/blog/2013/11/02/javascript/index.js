






JEM.includeOnce( '/blog/blog.js', function(){


	blogPosts.process = function( item ){

		if( JEM.verbosity >= 0.5 ) console.log( 'Trying to view this item:', item )
		item.view()
	}

	
	new BlogPost({

		title: 'Today I learned JavaScript.',
		body: 'Yup. And I stopped there. No HTML. No CSS. No CMS. No SASS, Rails, Python, PHP, SQL, MySQL, SQLite, etc. Forget it.',
		media: [

			'cat-look.gif'
		]
	})
})



