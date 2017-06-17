export const scrollMixin = {
  data () {
    return {
      courseContainers: false,
      scrollHandler: false
    }
  },
  mounted () {
    this.courseContainers = document.querySelectorAll('.course-container')
    this.bindEvents()
  },
  methods: {
    bindEvents () {
      this.scrollHandler = () => {
        for (var i = 0; i < this.courseContainers.length; i++) {
          var course = this.courseContainers[i]

          if (this.isOffScreen(course)) {
            course.classList.remove('text-in')
          } else {
            course.classList.add('text-in')
          }
        }
      }

      window.addEventListener('scroll', this.scrollHandler)
    },
    unbindEvents () {
      window.removeEventListener('scroll', this.scrollHandler)
    },
    posY (elm) {
      var test = elm
      var top = 0

      while (!!test && test.tagName.toLowerCase() !== 'body') {
        top += test.offsetTop
        test = test.offsetParent
      }

      return top
    },
    viewPortHeight () {
      var de = document.documentElement

      if (window.innerWidth) {
        return window.innerHeight
      } else if (de && !isNaN(de.clientHeight)) {
        return de.clientHeight
      }

      return 0
    },
    scrollY () {
      if (window.pageYOffset) { return window.pageYOffset }
      return Math.max(document.documentElement.scrollTop, document.body.scrollTop)
    },
    isOffScreen (elm) {
      var vpH = this.viewPortHeight() // Viewport Height
      var st = this.scrollY() // Scroll Top
      var y = this.posY(elm)

      return (y > (vpH + st))
    }
  }
}
