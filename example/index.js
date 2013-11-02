

function test(){

	'this is a test function!'
	'strings sort of operate as comments in JS'
	var s ='what about \
	multiline?'// Naw dawg, interp’d as whitespace sans newline!
	return s
}




new function(){

	var context = JEM.getContext( new Error )
	console.log( 'context:', context )


	JEM.addStyle(

		{
			selector: 'body',
			backgroundColor: 'rgb( 230, 235, 234 )',
			fontFamily: 'Geneva, Helvetica, sans-serif',
			fontSize: '1em',
			lineHeight: '1.5em'
		},
		{
			selector: 'nav',
			fontWeight: 'bold'
		},
		{
			selector: 'pre',
			border: '1px solid #ddd',
			borderRadius: '4px',
			backgroundColor: '#f8f8f8',
			padding: '6px 10px',
			fontFamily: 'Menlo, Monaco, "Courier New", monospace',
			fontSize: '11px',
			lineHeight: '16px',
			tabSize: '4'
		}
	)

	JEM.includeOnce( '/navigation.js' )


	JEM.addContent({

		type: 'pre',
		text: test.toString()//'new function(){}'
	})


	/*

	(jem require /navigation.scm)

	*/
}



