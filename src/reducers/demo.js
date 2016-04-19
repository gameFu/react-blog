// 定义初始状态
const initState = {
  color: 'red',
  time: '7',
}

export default function light(state = initState, action){
  switch (action.type) {
    case 'CHANGE_GREEN':
      return {
        color: 'yellow',
        time: '5'
      }

    case 'CHANGE_YELLOW':
      return {
        color: 'yellow',
        time: '2'
      }

    case 'CHANGE_RED':
      return Object.assign({}, initState);

    default:
      return state

  }
}
