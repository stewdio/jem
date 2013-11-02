

JEM.addContent({

	type:   'nav',
	parent: 'body',
	styles: 'stylename1 stuff wot',
	children: [

		{ type: 'link', address: '/', text: 'Home', classList: 'ok wot', style: 'margin-right: 5px;' },
		{ type: 'link', address: '/blog/', text: 'Blog' },
		{ type: 'link', address: 'http://wikipedia.org', text: 'Wikipedia', target: '_blank', style: 'margin-left: 5px;', onmouseover: function(){

			console.log( 'Hovered over Wikipedia!' )
		}}
	]
})
JEM.addContent({

	type:   'div',
	style:  'padding-bottom: 40px;',
	text:   'You should totally, like... try JEM.inspect() in the console.'
})




/*


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



