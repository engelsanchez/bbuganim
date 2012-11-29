$(function() {
	var pDiv = $("#people-list");
	var pList = $("<ul>");
	for (var name in buganimData.people) {
		var person = buganimData.people[name];
		pList.append($("<li>").text(person.name));
	}
	pDiv.append(pList);
});
