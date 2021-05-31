import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

	constructor() { }

	/**
	 * Crea un elemento en el localstorage
	 */
	create(name, value): void {
		window.localStorage.setItem(name, JSON.stringify(value));
	}

	/**
	 * Obtiene un elemento mediante el name de localstorage
	 */
	getItem(name): object {
		return JSON.parse(window.localStorage.getItem(name));
	}

	/**
	 * Elimina un elemento por name de localstorage
	 */
	removeItem(name): void {
		return window.localStorage.removeItem(name);
	}

	/**
	 * Elimina todos los elementos de localstorage
	 */
	clear(): void {
		return window.localStorage.clear();
	}

	getToken() {
		let value = JSON.parse(window.localStorage.getItem('USER_DATA'));
		return (value) ? value.token : false;
	}

}
