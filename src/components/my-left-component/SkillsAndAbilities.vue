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
          src: require('@/assets/html5.svg.png')
        },
        {
          name: 'CSS',
          myValue: 90,
          color: 'light-blue darken-3',
          src: require('@/assets/css3.png')
        },
        {
          name: 'JavaScript',
          myValue: 90,
          color: 'yellow darken-1',
          src: require('@/assets/javascript.png')
        },
        {
          name: 'Sass',
          myValue: 85,
          color: 'pink accent-1',
          src: require('@/assets/sass.png')
        },
        {
          name: 'Stylus',
          myValue: 90,
          color: 'grey darken-1',
          src: require('@/assets/stylus.svg.png')
        },
        {
          name: 'AngularJS',
          myValue: 80,
          color: 'red darken-3',
          src: require('@/assets/angular.png')
        },
        {
          name: 'VueJS',
          myValue: 90,
          color: 'teal lighten-1',
          src: require('@/assets/vuejs.png')
        },
        {
          name: 'PHP',
          myValue: 85,
          color: 'indigo lighten-1',
          src: require('@/assets/php.png')
        },
        {
          name: 'Django',
          myValue: 60,
          color: 'teal darken-4',
          src: require('@/assets/django.png')
        },
        {
          name: 'Git',
          myValue: 80,
          color: 'deep-orange darken-2',
          src: require('@/assets/git.png')
        },
        {
          name: 'Docker',
          myValue: 80,
          color: 'light-blue darken-2',
          src: require('@/assets/docker.png')
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