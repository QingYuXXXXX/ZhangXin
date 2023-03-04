import Mock from 'mockjs'

const time = new Date(new Date().toLocaleDateString()).getTime() + 86400000

Mock.mock('/api/date', {
  time: time
})
