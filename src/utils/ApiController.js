import { AsyncStorage } from 'react-native'

const apiUrl = "https://b79a7eb8.ngrok.io/api";

let ApiController = {

    setAccessToken: (accessToken) => {
        AsyncStorage.setItem("userAccessToken", accessToken);
    },
    getAccessToken: () => {
        return AsyncStorage.getItem("userAccessToken");
    },
    setUser: (user) => {
        AsyncStorage.setItem("user", JSON.stringify(user));
    },
    getUser: () => {
        return JSON.parse(AsyncStorage.getItem("user"));
    },
    setUserLogged: (isLogged) => {
        AsyncStorage.setItem("isLogged", isLogged);
    },
    isUserLogged: () => {
        return AsyncStorage.getItem("isLogged");
    },
    authentication: (firebase_uid, phone_number) => {
        return fetch(apiUrl + '/authenticate', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firebase_uid: firebase_uid,
                phone_number: phone_number
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("response :", JSON.stringify(responseJson));
                return responseJson
            })
            .catch((error) => {
                console.error(error);
            });
    },
    updateProfile: (firstName, lastName, email) => {
        return fetch(apiUrl + '/update-profile', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + ApiController.getAccessToken()
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("response :==========", JSON.stringify(responseJson));
                return responseJson
            })
            .catch((error) => {
                console.error('=-=-=-=-=-=-=-'+error);
            });
    }

};

module.exports = ApiController