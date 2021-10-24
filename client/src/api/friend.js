import request from '@/utils/request'

export function getFriendList() {
  return request({
    url: '/friend',
    method: 'get'
  })
}

export function getFriendDetail(id) {
  return request({
    url: '/friend/' + id,
    method: 'get'
  })
}

export function getNewFriendList() {
  return request({
    url: '/friend/new',
    method: 'get'
  })
}

export function addNewFriend(name) {
  return request({
    url: '/friend/new/add',
    method: 'post',
    data: {
      friendName: name
    }
  })
}