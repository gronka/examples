
window.addEventListener(eventHandler(event));

function eventHandler(event) {
	if (event.id == "drop-space"){
		// TODO: add highlight effect when text hovers
		parseUrl(event.data.textContent)
	}
}

function parseUrl(url) {
	var doc = ajax.get(url);
	title = doc.getElementByTag("title");
	if ("CNN" is in title) {
		body = doc.getElementByTag("real-news");
		
	}
	if ("Fax" is in title) {
		body = doc.getElementByTag("report");
		
	}

	dataSource = {"title": title,
								"body": body}

	postNewDataSource(dataSource);
}

function postNewDataSource(dataSource) {
	ajax.post(url="mysite.com/createDataSource",
						data=dataSource);
}




