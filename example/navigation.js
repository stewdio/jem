

JEM.addContent({

	type:   'nav',
	parent: 'body',
	classes: 'stylename1 stuff wot',
	children: [

		{ type: 'link', address: '/', text: 'Home', classes: 'ok wot', styles: 'margin-right: 5px;' },
		{ type: 'link', address: '/blog/', text: 'Blog' },
		{ type: 'link', address: 'http://wikipedia.org', text: 'Wikipedia', target: '_blank', styles: 'margin-left: 5px;', onmouseover: function(){

			console.log( 'Hovered over Wikipedia!' )
		}}
	]
})
JEM.addContent({

	type:   'div',
	styles: 'padding-bottom: 40px;',
	text:   'You should totally, like... try JEM.inspect() in the console.'
})




/*


type
id
classes
styles





[ 'nav', { 
	
	id: 'bigNav',
	classes: 'stylename1 stuff wot',
	styles:  'margin-right: 5px',
	content: []

}, 'parentNode' ]






h1: {
	
	styles: 'stylename1 stuff wot',
	content: [

		nav: {}
	]
}




JEM.addStyle({

	selector: 'h1 em',
	media: 'all',
	marginRight: '20px',
	padding: '12px 2px',
	textSize:    '12pt',
	textLeading: '14pt',
	textColor:   'gray',
	overflow: 'hidden'
})


JEM.addStyle({
	
	selector: 'h1 em',
	media: 'screen',
	marginRight: '20px',
	padding: '12px 2px',
	text: {
	
		size: '12pt',
		leading: '14pt',
		color: 'gray'
	},
	overflow: 'hidden'
})

*/



