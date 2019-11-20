import {takeEvery, call, put} from 'redux-saga/effects';
import axios from 'axios';
import Cookie from 'js-cookie';
import {message} from 'antd';
import actions from './Action';

//worker saga
function* userLogin({type,payload}) {
//hit the api to check user exist or not 
    const result = yield call(axios.get,`https://jsonplaceholder.typicode.com/users?email=${payload}`);
    
    if(result.data.length) {
        //store this data in to the store by dispatching action, set cookies and show the message
        Cookie.set('token',result.data[0].email);
        message.info("User authenticated");
        yield put(actions.storeUser(result.data[0]));
    } else {
        //store the empty object into the store, remove the cookie, show the message
        Cookie.remove('token');
        message.info("User does not exist");
        yield put(actions.storeUser({}));
    }
}

//watcher saga
export default function* watcherSaga() {
    yield takeEvery(actions.USER_LOGIN,userLogin);
}
