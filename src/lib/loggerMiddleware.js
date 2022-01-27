const loggerMiddleware = store => next => action => {

    // 액션 타입으로 log를 그룹화함
    console.group(action && action.type);
    console.log('이전 상태', store.getState());

    console.log('액션', action);

    // 다음 미들웨어나 리듀서에게 액션을 전달함
    next(action); 

    // 업데이트된 상태
    console.log('다음 상태', store.getState());

    // 그룹 끝
};
    console.groupEnd();

export default loggerMiddleware;