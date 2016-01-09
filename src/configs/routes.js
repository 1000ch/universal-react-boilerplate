export default {
  index : {
    path    : '/',
    method  : 'get',
    page    : 'index',
    title   : 'Index',
    handler : require('../pages/Index')
  },
  profile : {
    path    : '/profile',
    method  : 'get',
    page    : 'profile',
    title   : 'Profile',
    handler : require('../pages/Profile')
  }
};
