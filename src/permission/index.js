import router from '../router'

router.beforeEach(function (to, from, next) {
  if (to.path.startsWith('/home')) {
    let token = window.localStorage.getItem('userID')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
