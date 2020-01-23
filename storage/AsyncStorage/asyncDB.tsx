/**
 * Keys: (Move to documentation later)
 * 
 * uKEY: Root key
 * isLogged: Boolean value indicating if a user is logged into the app
 * logTime: datetime that the user logged in ( // ? Not really necessary)
 * 
 * ? ideas
 * uID: returns json with user info
 */

import React from "react";
import { AsyncStorage } from "react-native";

const uKEY = "ROOT";

type UserID = string | null;

type LocalStorage = {
  uID: UserID
};

// Attempts to retrieve a uID that is locally stored
const getUID = async (): Promise<UserID> => {
	let uID: UserID = null;
  try {
    uID = await AsyncStorage.getItem(uKEY);
    if (uID !== null) {
      console.log('getUID: ', JSON.parse(uID));
    }
  } catch (error) {
    // Error retrieving data
  }
  return JSON.parse(uID);
};

// Sets a new uID
const setUID = async (uID: UserID): Promise<void> => {
	try {
		await AsyncStorage.setItem(uKEY, JSON.stringify(uID));
	}
	catch (err) {
		console.log(err);
	}
}

const deleteUID = async (): Promise<void> => {
	try 
	{
		await AsyncStorage.removeItem(uKEY);
	}
	catch (err)
	{
		console.log(err);
	}
}

const isLoggedIn = async (): Promise<boolean> => {
	try {
		console.log("isLoggedIn");
		status = await AsyncStorage.getItem('isLogged');
		console.log(status);
		let parse: boolean = JSON.parse(status);
		console.log(parse);
		return parse;
	}
	catch(err) {
		console.log(err);
	}
	return false;
}

const logIn = async (user: LocalStorage): Promise<void> => 
{
	try 
	{
		await AsyncStorage.setItem('isLogged', JSON.stringify(true));
		await setUID(user.uID);
	}
	catch(err) 
	{
		console.log(err);
	}
}

const logOut = async (): Promise<void> => {
	try {
		console.log('logging out');
		await AsyncStorage.setItem('isLogged', JSON.stringify(false));
		await deleteUID();
	}
	catch(err) {
		console.log(err);
	}
}

export {
	getUID,
	setUID,
	deleteUID,
	isLoggedIn,
	logIn,
	logOut
};
