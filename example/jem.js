var hologram = function(){
/*≈≈=====≈§§§§§§§§§§§§§§§§§§&§§§§§§§§§§§$§&&§§§§§§§§§§§§§§§%&&&§§§&&&&&&&&&&&&
≈≈≈≈====%%§§§§§§§§§§§§§§&&§§§§§§§§§§§§§§$§%#§§§&%§§§&§%§§&&##&%&§§&&&&&&&&&&&&
≈≈≈==≈≈=≈%§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§#≠≡#§§&##§§§&§%§§§§=≡%&%§&§&&&&&&&&&&
≈≈≈≈====≡≡%§§§§§§§§§§§§&§§§§§§§§§§§§§§§§≡≈≈≈≠≡&§&≡≡&&§§&&&§§≠≈##&#§§&&&&&&&&&&
≈≈≈≈≈====≠&§§§§§§§§§§§§§§§§§§§§§§§$§§§&≠≈=≈=≈≈≈§§≡≠#§§&§&&%§§≈≡≡%##&&&&&&&&&&&
≈≈≈≈≈===≈≠§§§§§§§§§§§§§§§§§§§§§$§§§§§#≠≈≈======≠§&≠≠%§§&§%≡&§#≠≡%#≈§§&&&&&&&&&
≈≈≈≈≈==≈&§&§§§§§§§§§§§§§§§§§§§§$§$§§&%%%%§&§&≡≈≈&&%≠≡&&&&&%~§%==≡≡≈%&&&&&&&&&&
≈≈≈≈≈≈%%≠≡§§§§§§§§§&&§§§§§§§§§§§$§§#≠=~~~-~~≈#&§§§§%≡≡&&%§%≈≡§≡=≠&#≡§§&&&&&&&&
≈≈≈≈≈≈≈≈≈§§§§§§§§§§&§§§§§&§&%&&§&&§&§§§§§§§&#&&&&§&&#≡≠≡&%%≈≈§§§§%≠~§%%&&&&&&%
≈≈≈≈≈≈≈≈&§§§§§§§§§§§§§§§&§##≡≡≡≡≠≡&&§§≠≠&§§≡=~§%&&&%≡≠≈=≈#≈≡%&&&%#≠§&§%&&&&&#≡
≈≈≈≈≈≈≈≈&§§§§§§§§§§§§§§§&§#≠≈==~~~==≠#&%&&#≈≈≠##%%%≡≠=~--~≡§%&≡&==-&§&&§&&&%=~
≈≈≈≈≈≈≈≠&&§§§§§§§§&§§§§§§&≡≠≈=~~-----~~~≈≠≈====≈≠≡≠≠=--··-=≈#%%≠~=%%≠=#&&&&=~~
≈≈≈≈≈≈≈#&§§§§§§§§§&§§§§§&&#≠≈==~~------······--~===~-····----~~~=~----#&&&≈~~~
≈≈≈≈≈≈≡&§§§§§§§&§§&§§§§§&&#≡≠≈==~~----·······-~~~~~~-·····-----------~&&&&=~~~
≈≈≈≈≈≈#§§§§§§§§§§§§§§§§§&%#≡≠≠≈≈==~~---·····-~≈≈==~--·····--···-----~=&&&≈=-~~
≈≈≈==≠&&§§§§§§&§§§§§§§&&%##≡≡≠≠≈≈≈==~----··-~≡#===~~--····~--·----~~=&&&%-----
≈====#%%§§§§§&#&§§§§§&§&%#≡≡≡≠≠≠≈≈≈==~~----~=≡#≠≠≡≡≠=-····-~----~~~≈&&&#≈-----
====≈%=≡&§§&%≠≈&§§§§§§&&&#≡≡≡≡≡≠≠≠≈≈≈=~--------=≠≠≠=~-·-···-~~~~~-&=%#&≠~-----
=====≠=≈#&§%#≠≡§§§§§§§§§§&%#≡≠≠≠≠≠≠≠≈≈=~-----······ ········--~-·-≡#&&%~------
=====~==≈&&≡&§$§§§§§§§§§$$&%≡≡≠≠≠≠≠≠≠≠≈≈≈≠≈=~~············------··≡%&%≡-------
≈≈≈≈≈===~~~~-------~~≠$§§§$§&#≡≠≠≈≈≈≈≈≈≈≈≈≠%%&§§§&&&%%#≠~~---·=~-·&≈≡~≈-------
≠≠≠≈≈≈=~~---···········--&$$$§&#≡≠≈≈≈==≈≈≈≈≠≠≠≈≈~~-·--=~-~--·····-%-≈≈--------
≠≠≠≈≈==~~---·····        ··§$$$$&#≠≠≈≈=======≈≠##%##≠----········-=-#---------
≠≠≈≈≈==~~---····          ··&$$§$§§%≡≠≈==~----··········-·········-~~---------
≠≠≈≈≈==~~---····           ··$$§§§$$§&#≡≠≈==~~~----·--   · ·······-%----------
≠≠≈≈≈==~~~---····          ··§$$§§§§$§§%≡≠≈%&%%≡≠≠≠§§§·  ·-·······----------~~
≠≠≈≈≈===~~~--·····         ··~$$$§§§§§§%≈≈=~---§§$§§§§§§§=········---------~~~
≠≠≈≈≈≈==~~~---······       ···$§$$§§§·&§≠-§&§§&·~≈≡§§§§§§§§&·······--------~~~
≠≠≈≈≈≈==~~~----······    ·····-$$$$§§§-≈··~≈§·≈&·-··=§§§§§&§§-······------~~~~
≠≠≈≈≈≈==~~~---·······   ·· ····$$$$§§§§≠≠~-§§· =&····=§§§§§&&§·······-----~~~~

                         ♫  JEM IS TRULY OUTRAGEOUS  ♫                        

----------------------------------------------------------------------------*/
}







JEM = new function JEM(){

	this.VERSION   = 20131102.1553
	this.verbosity = 0.5




	    //////////////
	   //          //
	  //   Boot   //
	 //          //
	//////////////


	var
	JEM = this,
	protocol = document.location.protocol === 'file:' ? 'Desktop' : 'Server'

	this.addressOfSiteRoot = getAddressOfSiteRoot()
	this.relativePathToSiteRoot = getRelativePathTo( this.addressOfSiteRoot )	
	console.log(

		'\n\n%c★%c%cJ%c%cE%c%cM%c', 
		'padding: 4px 6px 4px 4px; background-color: #FE0; color: #000; font-family: Helvetica, Arial, san-serif; font-style: italic; font-weight: bold; margin-right: 1px;', '',
		'padding: 4px 6px 4px 6px; background-color: #F96; color: #000; font-family: Helvetica, Arial, san-serif; font-style: italic; font-weight: bold; margin-right: 1px;', '',
		'padding: 4px 6px 4px 4px; background-color: #F6C; color: #000; font-family: Helvetica, Arial, san-serif; font-style: italic; font-weight: bold; margin-right: 1px;', '',
		'padding: 4px 6px 4px 4px; background-color: #C0F; color: #000; font-family: Helvetica, Arial, san-serif; font-style: italic; font-weight: bold;', '',
		JEM.VERSION, protocol, '\n\n'
	)

	
	//  Load up our GLOBAL script. You probably want to edit this ;)

	includeOnce( '/index.js' )


	//  Now load up our LOCAL script.
	//  The require() function will eleminate redundancy if this happens to === GLOBAL.

	includeOnce( 'index.js' )
	

	//  Jem is a looper. We can use events for some bits,
	//  but this ensures we always have something to hook into.
	//  New data in your Data Pool? The loop will catch it.

	function loop(){

		if( document.readyState === 'complete' ){

			JEM.Pool.all.forEach( function( pool ){ pool.listen() })
		}
	}
	setInterval( loop, 1 )


	//  Want to see what scripts are loaded and what Data Pools
	//  are pooling? Open up your JavaScript console and type:
	//  JEM.inspect()

	this.inspect = function(){

		var 
		scriptsLoaded = '\n', 
		i, 
		poolsLoaded = '\n'

		for( i = 0; i < document.scripts.length; i ++ ){

			if( document.scripts[ i ].src ) scriptsLoaded += '\n  '+ document.scripts[ i ].src
		}
		JEM.Pool.all.forEach( function( pool ){

			poolsLoaded += '\n  '+ pool.name +' ('+ pool.length +')'
		})
		console.log( 

			'\nAbsolute root address: ', this.addressOfSiteRoot,
			'\nRelative path to root: ', this.relativePathToSiteRoot,
			'\nScripts loaded: ', scriptsLoaded, '\n',
			'\nData pools: ', poolsLoaded,
			'\n'
		)
	}








	    //////////////////
	   //              //
	  //   Location   //
	 //              //
	//////////////////


	function getAddressOfSiteRoot(){

		var parser, address = ''

		if( document.querySelectorAll( 'script[src*="jem.js"]' ).length ){

			parser = document.createElement( 'a' )
			parser.href = document.querySelectorAll( 'script[src*="jem.js"]' )[ 0 ].src
			//parser.href      => 'http://example.com:8080/pathname/with/slashes/index.html#hash?search=kittens'
			//parser.origin    => 'http://'
			//parser.protocol  => 'http:'
			//parser.host      => 'example.com:8080'
			//parser.hostname  => 'example.com'
			//parser.port      => '8080'
			//parser.pathname  => '/pathname/with/slashes/'
			//parser.search    => '?search=kittens'
			//parser.hash      => '#hash'			
			address = parser.protocol + '//'
			if( parser.hostname ) address += parser.hostname
			if( parser.port     ) address += ':'+ parser.port
			if( parser.pathname ) address += parser.pathname.substr( 0, parser.pathname.indexOf( 'jem.js' ) - 1 )
			if( address.substr( -1 ) !== '/' ) address += '/'
			return address
		}
		return ''//  Will evaluate to “falsey“ which is convenient, and won’t type coerce into 'undefined' as a String!
	}
	function getRelativePathTo( otherAddress ){

		var 
		parser, otherPath, thisPath,
		i = 0,
		ascendTree  = '',
		descendTree = ''

		parser      = document.createElement( 'a' )
		parser.href = getAbsolutePathTo( otherAddress )
		otherPath   = parser.pathname.split( '/' ).slice( 1 )
		thisPath    = document.location.pathname.split( '/' ).slice( 1, -1 )

		while( otherPath[ i ] && otherPath[ i ] === thisPath[ i ]){ i ++ }
		ascendTree = otherPath.slice( i ).join( '/' )
		while( i < thisPath.length ){ i ++; descendTree += '../' }

		return descendTree + ascendTree
	}
	function getAbsolutePathTo( address ){

		var parser, absoluteAddress = ''
		

		//  This address should be relative to the site’s “root”
		//  ie. wherever jem.js is stored.
		//  Remember, we’ve already figured out the location of jem.js
		//  by scanning document.scripts for it and parsing the URL.

		if( address.substr( 0, 1 ) === '/' ){

			return JEM.addressOfSiteRoot + address.substr( 1 )
		}


		//  This address is absolute -- is a http, https, file, or mailto.
		//  Might be internal. Probably external.
		//  Doesn’t matter. We’re going to leave it as-is.

		else if( address.indexOf( 'http://'  ) === 0 
			|| address.indexOf(   'https://' ) === 0 
			|| address.indexOf(   'file://'  ) === 0
			|| address.indexOf(   'mailto:'  ) === 0 ){

			return address
		}


		//  If the address is not absolute then we’ll assume it’s relative --
		//  and that means relative to whatever the doc’s current URL is.
		//  We’ll use this parser method instead of the document.location object
		//  to ensure we’re getting a path to a directory rather than a path to
		//  a file which we’d have to then parse ourselves. That’d be boring!

		else {

			parser = document.createElement( 'a' )
			parser.href = '.'
			absoluteAddress = parser.origin
			if( parser.host ) absoluteAddress += parser.host
			if( parser.pathname ) absoluteAddress += parser.pathname
			if( absoluteAddress.substr( -1 ) !== '/' ) absoluteAddress += '/'
			return absoluteAddress += address
		}
	}
	this.getAbsolutePathTo = getAbsolutePathTo








	    /////////////////
	   //             //
	  //   Scripts   //
	 //             //
	/////////////////


	//  JEM.include() requires a 1st argument for the address (URI) of the script.
	//  Two additional arguments are optional and their order interchangeable:
	//  1. Params to send via URL to the callee script.
	//  2. Callback function to execute once the script is loaded.

	function include(){

		var 
		args = Array.prototype.slice.call( arguments ),
		address = args[ 0 ],
		callback,
		param, params, paramsString = ''


		//  Did we receive optional arguments for either 
		//  a callback function or URL parameters?

		function assign( arg ){

			if( typeof arg === 'function' ) callback = arg
			else if( typeof arg === 'object' ) params = arg
		}
		assign( args[ 1 ])
		assign( args[ 2 ])


		//  If we received arguments for URL parameters
		//  then we should build a useful string for that.

		if( params !== undefined ){

			for( param in params ) paramsString += '&' + param +'='+ params[ param ]
		}


		//  Load up that script, send URL params if we’ve got them
		//  and assign a callback if we have one.

		document.scripts.item().parentElement.appendChild( function(){

			var scriptElement     = document.createElement( 'script' )
			scriptElement.charset = 'UTF-8'
			scriptElement.id      = getAbsolutePathTo( address )//  Allows us to check for duplicate loads via JEM.require(). @@@@@@@@  NEED TO USE "DATA-SEOMYTHING" instead of id!!
			scriptElement.src     = getRelativePathTo( address ) + '?nocache=' + Date.now() +'-'+ Math.floor( Math.random() * Math.pow( 10, 13 )) + paramsString
			scriptElement.onload  = callback
			if( address.indexOf( 'jquery' ) > -1 ) console.log( 'COWARD!' )
			return scriptElement
		
		}())
	}
	this.include = include


	function unload( scriptURI ){

		for( var i = document.scripts.length - 1; i >= 0; i -- ){

			if( document.scripts[ i ].name === scriptURI ) document.scripts[ i ].remove()// DOES NOT REMOVE REFS FROM GLOBAL SCOPE!!
		}
	}
	function includeOnce( address ){

		if( document.querySelectorAll( 'script[id="'+ getAbsolutePathTo( address ) +'"]' ).length === 0 ) include.apply( this, arguments )
	}
	this.includeOnce = includeOnce
	


	
	//  When the browser catches an error it creates an “Error Stack”
	//  which contains within it the location where the error ocurred
	//  right down to the file’s URL and line number. 
	//  This means a script can know its source code’s URL
	//  and it can therefore be passed arguments through the URL!
	//  Hold on to your hats because this is JSONP without the server!!

	this.getContext = function( err ){

		var
		lastLine,//  Last line of the browser’s error message.
		url,     //  URL of the JavaScript file that created the error.
		parser,
		search, pairs,
		context = {}


		//  Get the location where the error ocurred.

		lastLine = err.stack.split( '\n' ).pop().trim()
		//console.log( '##  Raw last line:', lastLine )


		//@@  NOTE: THIS HANDLING IS ONLY CHROME COMPATIBLE.
		//@@  SEE STACKTRACE.JS FOR FIREFOX, SAFARI, OPERA, IE.


		//  Strip out the 'at' description and line number.
		//  (Is this 'at' localized; would it not be in English elsewhere?)

		url = lastLine.substring( lastLine.indexOf( 'at ' ) + 3, lastLine.lastIndexOf( ':' ))
		url = url.substring( 0, url.lastIndexOf( ':' ))
		//console.log( '##  URL only:', url )




		//  We need to extract the search params from 
		//  the URL used to load this particular JS file.
		//  But might also be nice to just hold on to
		//  all of that location data, eh?

		parser = document.createElement( 'a' )
		parser.href = url
		context.location = {

			href:     parser.href,      //  'http://example.com:8080/pathname/with/slashes/index.html#hash?search=kittens'
			origin:   parser.origin,    //  'http://'
			protocol: parser.protocol,  //  'http:'
			host:     parser.host,      //  'example.com:8080'
			hostname: parser.hostname,  //  'example.com'
			port:     parser.port,      //  '8080'
			pathname: parser.pathname,  //  '/pathname/with/slashes/'
			search:   parser.search,    //  '?search=kittens'
			hash:     parser.hash       //  '#hash'	
		}


		//  We’ve possibly placed arguments in the search string
		//  which we need to extract and attach to an object to return.

		search = parser.search
		if( search.substr( 0, 1 ) === '?' ) search = search.substr( 1 )
		search.replace( /\?/g, '&' )
		pairs = search.split( '&' )
		pairs.forEach( function( pair ){

			pair = pair.split( '=' )
			context[ pair[ 0 ]] = pair[ 1 ]
		})


		return context
	}










	//  JavaScript does not natively support multiline String literals.
	//  Sure, you can construct a string and include a “\n” or “\r” and
	//  ok, I admit you can do the “\” + actual line return trick in some cases
	//  but the most reliable (and fuck Internet Explorer) way is to create
	//  a function which includes multiline *comments* (OMFG!), 
	//  then parse the Function literal itself as a String!

	this.parseMultilineString = function( f ){

		f = f.toString()
		
		var 
		begin = f.indexOf( '/*' ) + 2,
		end   = f.indexOf( '*/', begin )
		
		return f.substring( begin, end )
	}
	//JEM.parseMultilineString(hologram)







	    /////////////////
	   //             //
	  //   Markups   //
	 //             //
	/////////////////


	//  We want the flexibility to change Jem’s vocabulary in the future
	//  so let’s build a vocabulary translater that we can modify and
	//  ammend in future versions. This isn’t perfect (the renderer still
	//  does some translation) but it reduces redunancy between HTML
	//  rendering and Style rendering.

	function jemTypeToDomTag( jemType ){

		return ({

			b:    'strong',
			i:    'em',
			link: 'a'

		}[ jemType ] || jemType )
	}
	function jemKeyToDomKey( jemProperty ){

		return ({

			address: 'href',
			html:    'innerHTML',
			text:    'innerText',
			type:    'tag',
			styles:  'classList'

		}[ jemProperty ] || jemProperty )
	}


	//  Take a Jem Document Object and build a DOM Object from it
	//  then attach it to the current document.
	//  @@@ MAKE 'PARENT' A PROPERTY OF THE OBJECT INSTEAD OF AN ARGUMENT!
	//  THEN INSTEAD OF TAKING A FIXED AMOUNT OF ARGS(1)
	//  WE CAN DO ARGS=ARRAY.APPLY... AND TAKE INFINITE ARGS OF JEM OBJECTS!

	this.addContent = function( jemObject, parent ){

		var domElement, domKey, value


		//  Does this object have a key for ‘type’ (AKA ‘tag‘)?
		//  If so then we should create a new DOM element. 

		if( typeof jemObject.type === 'string' ){

			domElement = document.createElement( jemTypeToDomTag( jemObject.type ))
			if( parent !== undefined ) parent.appendChild( domElement )
			else if( parent !== null ){

				if( document.body ) document.body.appendChild( domElement )
				else setTimeout( function(){//@@  INSTEAD OF THIS WE SHOULD ATTACH AN ONLOAD EVENT!

					document.body.appendChild( domElement )
				
				}, 1 )
			}
			Object.keys( jemObject ).forEach( function( jemKey ){

				domKey = jemKeyToDomKey( jemKey )
				if( domKey !== 'tag' ){

					if( domKey === 'href' || domKey === 'src' ){

						value = getAbsolutePathTo( jemObject[ jemKey ])
						if( protocol === 'Desktop' && value.substr( -1 ) === '/' ) value += 'index.html'
						if( domElement.tagName === 'A' ) domElement.href = value
						else if( domElement.tagName === 'IMG' ) domElement.src = value
					}
					else if( domKey === 'classList' ){

						if( typeof jemObject[ jemKey ] === 'string' ) value = jemObject[ jemKey ].split( ' ' )
						if( jemObject[ jemKey ] instanceof Array ) value = jemObject[ jemKey ].slice()
						if( value instanceof Array ){
	
							value.forEach( function( className ){

								domElement.classList.add( className )
							})
						}
					}
					else if( domKey === 'style' ){

						domElement.style.cssText = jemObject[ jemKey ]
					}
					else if( domKey === 'children' && jemObject[ jemKey ] instanceof Array ){

						jemObject[ jemKey ].forEach( function( child ){

							JEM.addContent( child, domElement )
						})
					}


					//  Seems like there’s no special translation necessary.
					//  Let’s just copy over the key’s value and call it a day.

					else domElement[ domKey ] = jemObject[ jemKey ]
				}
			})
		}
		return domElement
	}
	this.removeContent = function(){}
	this.link = function( uri, title ){

		history.pushState( null, title, uri )
	}
	this.setTitle = function( title ){

		var el = document.getElementsByTagName( 'title' )[ 0 ]

		if( el === undefined ){

			el = document.createElement( 'title' )
			document.head.appendChild( el )
		}

		//  So... Why not use document.title = 'something'?
		//  Because this method is more robust.
		//  And why not use el.innerText?
		//  Because we might wish to use special HTML Entities.

		el.innerHTML = title
	}
	this.setDescription = function( description ){

		//  meta description tag.
		//  best if this is unique to page rather than site-wide.
	}
	



	this.createBreadcrumb = function(){

		//  jeeeezz... helpful navigation tool, eh?
	}

	//  TOOLS section?
	this.generateSiteMap = function(){

		//  HTML sitemap for humans.
		//  XML sitemap for search engines.
		//  XML sitemap of IMAGES for search engines! https://support.google.com/webmasters/answer/178636
		//  robots.txt ?
	}








	    ////////////////
	   //            //
	  //   Styles   //
	 //            //
	////////////////


	this.addStyle = function(){


		//  Send as many style objects as you’d like, separated by commas of course!
		//  addStyle() will parse each one like a kitten playing with a ball of string.

		var args = Array.prototype.slice.call( arguments )
		args.forEach( function( style ){

			var 
			selector = style.selector || '*',
			media,// = style.media || 'all',
			styleSheet, i, styleSheetElement

		
			//  Do we have StyleSheets handy that we can modify?

			if( document.styleSheets.length > 0 ){
				
				for( i = 0; i < document.styleSheets.length; i ++ ){
					
					if( document.styleSheets[ i ].disabled ) continue//@@ WTF WHY?!?!?!?!??!?! LOOK INTO DISABLING
					media = document.styleSheets[ i ].media
					if( typeof media === 'string' ){
						
						if( media === '' || media.indexOf( 'screen' ) > -1 ) styleSheet = document.styleSheets[ i ]
					}
					else if( typeof media === 'object' ){
						
						if( media.mediaText === '' || media.mediaText.indexOf( 'screen' ) > -1 ) styleSheet = document.styleSheets[ i ]
					}
					if( styleSheet === undefined ) break
				}
			}


			//  F. There weren’t any existing StyleSheets so 
			//  we need to create one first.
			//  @@  IS THIS THE BEST WAY TO DO THIS? OR CAN WE DIRECTLY MODIFY DOC.STYLESHEETS WITHOUT FUCKING WITH DOM?!?
			//  @@  IF WE CAN GET RID OF THE HEAD.APPEND THEN WE CAN LOSE THE STYLE TAG IN THE REAL HTML!

			if( styleSheet === undefined ){
				
				styleSheetElement = document.createElement( 'style' )			
				styleSheetElement.type = 'text/css'
				document.head.appendChild( styleSheetElement )
				for( i = 0; i < document.styleSheets.length; i ++ ){
					
					if( document.styleSheets[ i ].disabled ) continue
					styleSheet = document.styleSheets[ i ]
				}
				media = styleSheet.media
			}


			//  Ok. We’ve got a StyleSheet to modify now. 
			//  Question is, do we need to add a rule or insert one?

			if( typeof media === 'string' ){
				
				/*for( i = 0; i < styleSheet.rules.length; i ++ ){
					
					if( styleSheet.rules[ i ].selectorText 
						&& styleSheet.rules[ i ].selectorText.toLowerCase() === this.selector.toLowerCase()){
						
						styleSheet.rules[ i ].style.cssText = this.rules//@@ THESE NEED TO BE TRANSLATED!!!!!!!!!!! AND TEXT, NOT OBKECT!
						return
					}
				}
				styleSheet.addRule( selector, style )*/
			} 
			else if( typeof media === 'object' ){

				/*for( i = 0; i < styleSheet.cssRules.length; i ++ ){
					
					if( styleSheet.cssRules[ i ].selectorText 
						&& styleSheet.cssRules[ i ].selectorText.toLowerCase() === selector.toLowerCase()){
												
						styleSheet.cssRules[ i ].style.cssText = style
						return
					}
				}*/


				var rulesString = ''
				Object.keys( style ).forEach( function( key ){

					if( key !== 'selector' 
						&& key !== 'media' 
						&& key !== 'children' ){

						rulesString += key.replace( /([a-z][A-Z])/g, function( g ){ return g[ 0 ] +'-'+ g[ 1 ].toLowerCase() }) +':'+ style[ key ] +';'
					}
				})
				styleSheet.insertRule( selector +'{'+ rulesString +'}', styleSheet.cssRules.length )
			}
		})
	}
	this.removeStyle = function(){}








	    ////////////////////
	   //                //
	  //   Data Pools   //
	 //                //
	////////////////////


	//  A Data Pool is a glorified Array Class that holds—suprise—your data.
	//  You can sort, filter, export, and otherwise tend to your data just 
	//  as you would a database. So... No MySQL required.

	function Pool( name ){

		this.name = name
		this.queued = []
		JEM.Pool.all.push( this )
	}

	//  We actually want Pool to be an Array itself,
	//  just with added pizazz. Yea, “pizazz.”

	Pool.prototype = Object.create( Array.prototype )
	Pool.constructor = Pool
	

	//  We also want the Pool class itself to maintain a list
	//  of *all* the Pools that have been created.
	//  This makes it easy for JEM to check all the Pools for
	//  newly queued objects that require processing.

	Pool.all = []
	Pool.all.overview = function(){

		this.forEach( function( pool ){

			console.log( pool.name, pool.length )
		})
	}


	//  Each Pool needs to listen for incoming queded up data.
	//  JEM.loop() calls each Pool’s listen() function automatically.
	//  Any new queued data will be processed and moved over
	//  from the queue Array to the native Array.

	Pool.prototype.listen = function(){

		if( this.queued.length ){

			if( JEM.verbosity >= 0.8 ) console.log( 'Welcome to the Pool:', this.queued[ this.queued.length - 1 ])
			var item = this.queued.shift()
			if( this.process && this.process instanceof Function ) this.process( item )
			this.push( item )
		}
	}


	//  Models are added to the queue rather than the Pool’s native Array.
	//  This allows us to asynchronously queue up data for processing. 
	//  Removing, however, is something to perform on the native Array itself.
	//  Both add() and remove() make actual changes to Pool,
	//  whereas the sorting and filtering methods return altered clones.
	//  I’ve separated these functions into “singular” and “many” methods
	//  so that models can be simple Arrays and not fuck things up...

	Pool.prototype.add = function( model ){

		this.queued.push( model )
	}
	Pool.prototype.addMany = function(){

		var 
		that   = this,
		models = Array.prototype.slice.call( arguments )
		models.forEach( function( model ){

			that.add( model )
		})
	}
	Pool.prototype.remove = function( model ){

		var i = this.indexOf( model )
		if( i > -1 ) this.splice( i, 1 )
	}
	Pool.prototype.removeMany = function(){

		var 
		that   = this,
		models = Array.prototype.slice.call( arguments )
		models.forEach( function( model ){

			that.remove( model )
		})
	}


	//  You can sort your Pool data just like you would a database table.
	//  Operates on and returns a copy of Pool’s data for chainability.
	//  Because Pool is an Array you can sort descending with Pool.reverse().

	Pool.prototype.sortBy = function( property ){

		return this.slice().sort( function( a, b ){

			if( a[ property ] < b[ property ] ) return -1
			if( a[ property ] > b[ property ] ) return  1
			return 0
		})
	}


	//  You can filter your Pool data just like you would a database table.
	//  Operates on and returns a copy of Pool’s data for chainability.
	//  Example: Who in our database is older enough to vote in the US?
	//  Pool.filterBy( function( citizen ){ if( citizen.age > 18 ) return citizen })

	Pool.prototype.filterBy = function( condition ){

		return this.slice().filter( condition )
	}


	//  It puts one at ease to know if you decide to bail on Jem
	//  in favor of another system you can take your data with you.
	//  CSV and SQL seem rational formats to employ for this.
	//  The Array middleman is just that -- a convenient middleman. 

	Pool.prototype.exportAsArray = function(){

		var
		array = [],
		entry

		this.forEach( function( model ){

			Object.keys( model ).forEach( function( key ){

				if( array.indexOf( key ) === -1 ) array.push( key )
			})
		})
		array = [ array ]
		this.forEach( function( model ){

			entry = []
			Object.keys( model ).forEach( function( key ){

				entry[ array[ 0 ].indexOf( key )] = model[ key ]
			})
			array.push( entry )
		})
		return array
	}
	Pool.prototype.exportAsSQL = function( tableName ){

		var
		array = this.exportAsArray(),
		column, row, columnNames = '',
		sql = '',
		cell

		if( tableName === undefined ) tableName = this.name
		if( tableName === undefined ) tableName = 'Pool'
		for( column = 0; column < array[ 0 ].length; column ++ ){

			fields += array[ 0 ][ column ]
			if( column < array[ 0 ].length - 1 ) columnNames += ', '
		}
		for( row = 1; row < array.length; row ++ ){

			sql += 'INSERT INTO `'+ tableName +'` ('+ columnNames + ') VALUES ('
			for( column = 0; column < array[ row ].length; column ++ ){

				cell = array[ row ][ column ]
					.replace( /(\n|\r\n)/g, '\\n' )//  Fake-escape newlines.
					.replace( /(")/g, '\\"' )//  Fake-escape doube quotes.
				sql += '`'+ cell +'`'
				if( column < array[ 0 ].length - 1 ) sql += ', '
			}
			sql += ');'
			if( row < array.length - 1 ) sql += '\n'
		}
		return sql
	}
	Pool.prototype.exportAsCSV = function(){

		var
		array = this.exportAsArray(),
		csv = ''

		array.forEach( function( row ){

			row.forEach( function( cell, i ){

				cell = cell
					.replace( /(\n|\r\n)/g, '\\n' )//  Fake-escape newlines.
					.replace( /(")/g, '\\"' )//  Fake-escape doube quotes.
				csv += '"' + cell + '"'
				if( i < row.length - 1 ) csv += ','
			})
			csv += '\n'
		})
		return csv
	}

	
	//  You know, this just might be useful outside of JEM, eh?
	//  All we have to do to export our work above is attached
	//  it to *this* instance.

	this.Pool = Pool



}












//  Copyright © 2013, Stewart Smith.
//  
//  Permission is hereby granted, free of charge, to any person obtaining a	
//  copy of this software and associated documentation files (the “Software”),
//  to deal in the Software without restriction, including without limitation 
//  the rights to use, copy, modify, merge, publish, distribute, sublicense, 
//  and/or sell copies of the Software, and to permit persons to whom
//  the Software is furnished to do so, subject to the following conditions:
//  
//  The above copyright notice and this permission notice shall be included 
//  in all copies or substantial portions of the Software.
//  
//  THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS 
//  OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
//  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
//  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR 
//  ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
//  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
//  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


//  Author:  Stewart Smith.
//  Website: http://stewd.io
//  GitHub:  http://github.com/stewdio
//  Twitter: http://twitter.com/stewd_io



