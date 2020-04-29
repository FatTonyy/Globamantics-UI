import getSessions from "./sessionRepository.js";
import * as template from "./template.js";

/*
!NOTE
? import getSessions, {sessionTemplate} from './sessionRepository.js' // same as above since we importing sessionTemplate in sessionRepository
?Another way of import when youre are not importing as default is use below
* import {sessionTemplate as template, errormessage} from './template.js'
* import getSessions, * as template from './template.js'
*/

function render() {
	var list = document.querySelector("#sessions");
	if (!list) return;
	list.innerHTML = template.sessionTemplate(data.listItems);
}

var data = {
	listItems: [],
};

getSessions().then((sessions) => {
	data.listItems = sessions;
	render();
});
