/*eslint-disable*/
import AxiosUtil from '@/api/AxiosUtil'

/**
 * 管理员登录
 * @param params {adminName,adminPass}
 * @returns {*}
 */
export function login (params) {
  return AxiosUtil({
    url: '/Admin/login',
    method: 'post',
    params
  })
}

/**
 * 注册管理员账号
 * @param params {adminName,adminPass,email }
 * @returns {*}
 */
export function register (params) {
  return AxiosUtil({
    url: '/Admin/register',
    method: 'post',
    params
  })
}

/**
 * 分页获取用户列表
 * @param params {pageSize,currPage}
 * @returns {*}
 */
export function getUserListByPage (params) {
  return AxiosUtil({
    url: '/UserManager/getUserListByPage',
    method: 'get',
    params
  })
}

/**
 * 编辑用户
 * @param params {userName,avatarURL,email,introduction,isBan}
 * @returns {*}
 */
export function editUserInfo (params) {
  return AxiosUtil({
    url: '/UserManager/editUserInfo',
    method: 'post',
    params
  })
}

/**
 * 分页获取歌单
 * @param params {pageSize,currPage}
 * @returns {*}
 */
export function getSongListByPage (params) {
  return AxiosUtil({
    url: '/SongListManager/getSongListByPage',
    method: 'get',
    params
  })
}

/**
 * 分页获取歌曲
 * @param params {pageSize,currPage}
 * @returns {*}
 */
export function getSongByPage (params) {
  return AxiosUtil({
    url: '/SongManager/getSongByPage',
    method: 'get',
    params
  })
}

/**
 * 移除歌单中的歌曲
 * @param params {songListID,songID}
 * @returns {*}
 */
export function removeSongInSongList (params) {
  return AxiosUtil({
    url: '/SongListManager/removeSongInSongList',
    method: 'post',
    params
  })
}

/**
 * 删除歌曲
 * @param params {songID}
 * @returns {*}
 */
export function dropSongBySongID (params) {
  return AxiosUtil({
    url: '/SongManager/dropSongBySongID',
    method: 'post',
    params
  })
}

/**
 * 编辑歌单信息
 * @param params {songListID,songListName,introduction,coverPicURL}
 * @returns {*}
 */
export function editSongListInfo (params) {
  return AxiosUtil({
    url: '/SongListManager/editSongListInfo',
    method: 'post',
    params
  })
}

/**
 * 删除歌单
 * @param params {songListID}
 * @returns {*}
 */
export function dropSongListBySongListID (params) {
  return AxiosUtil({
    url: '/SongListManager/dropSongListBySongListID',
    method: 'post',
    params
  })
}

/**
 * 添加用户
 * @param params {userName,userPass,avatarURL,email,introduction,isBan}
 * @returns {*}
 */
export function addUser (params) {
  return AxiosUtil({
    url: '/UserManager/addUser',
    method: 'post',
    params
  })
}

