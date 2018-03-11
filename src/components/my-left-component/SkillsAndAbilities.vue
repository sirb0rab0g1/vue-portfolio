<template>
  <v-layout class="bypass-particle">
    <v-flex xs12 sm12 lg12>
      <v-card dark class="card-opacity">
        <v-container>
          <v-layout row wrap>
            <v-flex xs12 md12 lg12>
              <span class="caption">
                <i class="material-icons" style="font-size: 10px;">code</i> 
                <strong>Skills</strong>
              </span>
            </v-flex>
            <v-flex xs12 md12 lg12 class="name-margin">
              <v-layout row wrap>
                <v-flex xs6 sm2 md2 lg4 v-for="(item, index) in skills" :key="index">
                  <center>
                    <v-tooltip bottom>
                      <v-progress-circular
                        :size="100"
                        :width="15"
                        :rotate="360"
                        :value="item.myValue"
                        :color="item.color"
                        slot="activator"
                      >
                        <!-- img -->
                        <v-avatar
                          size="30px"
                        >
                          <img :src="item.src" alt="avatar">
                        </v-avatar>
                      </v-progress-circular>
                      <span> {{ item.name }}</span>
                    </v-tooltip>
                  </center>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      skills: [
        {
          name: 'HTML 5',
          myValue: 90,
          color: 'deep-orange darken-2',
          // src: require('@/assets/html5.svg.png')
          src: 'http://res.cloudinary.com/infosoft/image/upload/q_100/v1519884103/vuejs%20portfolio/html5.svg.png'
        },
        {
          name: 'CSS',
          myValue: 90,
          color: 'light-blue darken-3',
          src: 'https://s-media-cache-ak0.pinimg.com/originals/a3/2f/83/a32f83aa2c675058e4a05a0fd4da05eb.png'
        },
        {
          name: 'JavaScript',
          myValue: 90,
          color: 'yellow darken-1',
          src: 'https://codercamps.co/Img/javascript-logo.png'
        },
        {
          name: 'Sass',
          myValue: 85,
          color: 'pink accent-1',
          src: 'https://cdn.worldvectorlogo.com/logos/sass-1.svg'
        },
        {
          name: 'Stylus',
          myValue: 90,
          color: 'grey darken-1',
          src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Stylus.svg/2000px-Stylus.svg.png'
        },
        {
          name: 'AngularJS',
          myValue: 80,
          color: 'red darken-3',
          src: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg'
        },
        {
          name: 'VueJS',
          myValue: 90,
          color: 'teal lighten-1',
          src: 'https://cdn.auth0.com/blog/vuejs/vue-logo.png'
        },
        {
          name: 'PHP',
          myValue: 85,
          color: 'indigo lighten-1',
          src: 'https://seeklogo.com/images/P/php-logo-ADE513E748-seeklogo.com.png'
        },
        {
          name: 'Django',
          myValue: 60,
          color: 'teal darken-4',
          src: 'http://res.cloudinary.com/dprcqjbst/image/upload/q_100/v1520481118/portfolio/django.png'
        },
        {
          name: 'Git',
          myValue: 80,
          color: 'deep-orange darken-2',
          src: 'http://uxdream.com/assets/img/technologies/git.svg'
        },
        {
          name: 'Docker',
          myValue: 80,
          color: 'light-blue darken-2',
          src: 'https://wpcdn.kentik.com/wp-content/uploads/2016/02/Docker_logo-320w.png'
        }
      ]
    })
  }
</script>

<style lang="stylus">
.name-margin
  margin-top: 10px
  margin-bottom: 10px
  
.progress-circular
    margin: 0.5rem
</style>