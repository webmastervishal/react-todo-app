import {takeEvery, call, put} from 'redux-saga/effects';
import axios from 'axios';
import {message} from 'antd';
import actions from './Action';

//worker saga
function* fetchTodos(action) {
    const {payload} = action;

    const result = yield call(axios.get,`https://jsonplaceholder.typicode.com/todos?userId=${payload}`);
    yield put(actions.storeTodos(result.data));
}

function* addTodo(action) {
    const {id, title} = action.payload;

    const result = yield call(axios.post,`https://jsonplaceholder.typicode.com/todos`,{
        userId: id,
        title,
        completed: false
    });

    yield put(actions.storeTodo(result.data));
}

function* markCompleted(action) {
    const {payload} = action;

    const result = yield call(axios.patch,`https://jsonplaceholder.typicode.com/todos/${payload}`, {
        completed: true
    });

    message.info('Todo marked as completed');

    yield put(actions.updateTodo(payload));
}


//watcher saga
export default function* watcherSaga() {
    yield takeEvery(actions.FETCH_TODOS, fetchTodos);
    yield takeEvery(actions.ADD_TODO, addTodo);
    yield takeEvery(actions.MARK_COMPLETED, markCompleted);
}