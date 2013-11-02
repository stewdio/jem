new function(){

	var context = JEM.getContext( new Error )



	JEM.includeOnce( 'blog.js' )
	JEM.includeOnce( 'data.js', function(){


		//@@@@  TRICK HERE IS TO ORGANIZE INTO A TREE... RECURSION... 
		//      AND ONLY ALLOW SO MUCH DEPTH.
		console.log('loaded the index')
		blogBranches.process = function( item ){

			item.view()
			//console.log( 'Should try to load this also: '+ item.slug +'/index.js' )
			//JEM.require( item.slug +'/index.js' )
		}


		//JEM.includeOnce( '2013/index.js' )



		/*
		var context = JEM.getContext()	
		console.log( 'no-cache code:', context.nocache )
		console.log( 'doc scripts length:', document.scripts.length )


		if( context.leftToGo !== undefined
			&& +context.leftToGo > 0 ){

			JEM.includeOnce( 'test.js', {

				leftToGo: +context.leftToGo - 1
			})
		}
		*/

	})




}