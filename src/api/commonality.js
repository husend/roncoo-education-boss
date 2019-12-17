import request from '@/utils/request'
//公共接口

// 上传图片
export function uploadPic(data = {}) {
  return request({
    url: `/course/pc/api/upload/pic`,
    method: 'post',
    data: data
  })
}

// 上传文档
export function uploadDoc(data = {}) {
  return request({
    url: `/course/pc/api/upload/doc`,
    method: 'post',
    data: data
  })
}

// 上传视频
export function uploadVideo(data = {}) {
  return request({
    url: `/course/pc/api/upload/video`,
    method: 'post',
    data: data
  })
}

//删除文件
export function deleteFile(data = {}) {
  return request({
    url: `/course/pc/api/upload/delete`,
    method: 'post',
    data: data
  })
}

// 列出用户菜单
export function menuUserList(params) {
  return request({
    url: '/system/pc/menu/user/list',
    method: 'post',
    data: params
  })
}

export function enumList(enumName) {
  return request({
    url: `/system/pc/api/sys/enum/list`,
    method: 'post',
    data: { enumName: enumName }
  })
}

// 列出菜单
export function menuBtnList(data = {}) {
  return request({
    url: `/system/pc/menu/user/button/list`,
    method: 'post',
    data: data
  })
}
