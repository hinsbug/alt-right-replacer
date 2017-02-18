walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	//v = v.replace(/\balt-right's\b/g, "ACTUAL NEO-NAZIS'");
	v = v.replace(/\balt-right\b/g, "ACTUAL NEO-NAZIS");
	v = v.replace(/\bAlt-right\b/g, "ACTUAL NEO-NAZIS");
	//v = v.replace(/\bmillennials\b/g, "pesky whipper-snappers");
	//v = v.replace(/\bMILLENNIAL\b/g, "PESKY WHIPPER-SNAPPER");
	//v = v.replace(/\bMILLENNIALS\b/g, "PESKY WHIPPER-SNAPPERS");
	
	textNode.nodeValue = v;
}


