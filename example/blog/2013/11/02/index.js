








JEM.includeOnce( '/blog/blog.js', function(){


	blogBranches.process = function( item ){

		item.view()
	}


	
	//  Articles

	new BlogBranch( 'javascript', 'Today I learned JavaScript' )
})









