


JEM.includeOnce( '/blog/blog.js', function(){


	blogBranches.process = function( item ){

		item.view()
	}

	//  Months

	new BlogBranch( '11', 'November' )
	//new BlogBranch( '12', 'December' )
})


