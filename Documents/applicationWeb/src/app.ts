import {HttpClient, json} from 'aurelia-fetch-client';

let httpClient = new HttpClient();

export class App {
	usersList;
	
	constructor(){
		this.getUsersList();
	}
	
	getUsersList(){
		httpClient.fetch('https://randomuser.me/api/?results=50')
		.then(response => response.json())
		.then(data => {
			this.usersList = data.results;
		});
	}
}
