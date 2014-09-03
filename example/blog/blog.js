



function BlogBranch( slug, title ){

	if( title === undefined ) title = slug.toString()
	this.slug   = slug
	this.title  = title
	blogBranches.add( this )
	//var t = this.constructor.name
	//console.log( t )
}
BlogBranch.prototype.view = function(){

	JEM.addContent(

		{ type: 'link', address: this.slug +'/', children: [ { type: 'textnode', text: this.title }, { type: 'br' }]}
	)
}
var blogBranches = new JEM.Pool( 'blogBranches' )




function BlogPost( post ){

	this.title = post.title
	this.body  = post.body
	blogPosts.add( this )
}
BlogPost.prototype.view = function(){

	document.title = this.title
	JEM.addContent(

		{ type: 'div', children: [

			{ type: 'h1', text: this.title },
			{ type: 'p', text: this.body }
		]}
	)
}
var blogPosts = new JEM.Pool( 'blogPosts' )



