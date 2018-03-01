<template>
  <v-layout row wrap class="bypass-particle">
    <v-flex xs12 sm12 md6 lg6 v-for="(item, index) in self_project" :keys="index">
      <a class="href" :href="item.link" target="_blank">
      <v-card dark class="card-margin card-opacity">
        <v-card-media
          class="white--text"
          height="130px"
          :src="item.src"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <strong>
                  <span class="headline project-name">
                    <small>
                      {{ item.name }}
                    </small>
                  </span> 
                </strong>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <v-layout row wrap>
            <div v-for="(item, index) in item.languages" :keys="index">
              <v-chip :color="item.color" text-color="white">
                <small>
                  {{ item.name }}
                </small>
              </v-chip>
            </div>
            </v-layout>
          </div>
        </v-card-title>
      </v-card>
      </a>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      self_project: [
        {
          name: 'Material Admin',
          link: 'http://kentoyfueconcillo.000webhostapp.com/#/',
          src: 'https://github.com/sirb0rab0g1/vue-portfolio/blob/master/src/assets/material_admin.png',
          languages: [
            {
              name: 'Angular 1',
              color: 'red darken-3'
            },
            {
              name: 'Angular Material',
              color: 'indigo darken-2'
            }
          ]
        },
        {
          name: 'Angular Material Portfolio (old)',
          link: 'https://fueconcillo-old-portfolio.000webhostapp.com/',
          src: 'https://github.com/sirb0rab0g1/vue-portfolio/blob/master/src/assets/old_portfolio.png',
          languages: [
            {
              name: 'Angular 1',
              color: 'red darken-3'
            },
            {
              name: 'Angular Material',
              color: 'indigo darken-2'
            }
          ]
        },
        {
          name: 'Angular Material Portfolio',
          link: 'https://sirb0rab0g1.github.io/angular4-portfolio/',
          src: 'https://github.com/sirb0rab0g1/vue-portfolio/blob/master/src/assets/new_portfolio_angular.png',
          languages: [
            {
              name: 'Angular 4',
              color: 'red darken-3'
            },
            {
              name: 'Angular Material',
              color: 'indigo darken-2'
            },
            {
              name: 'Bootstrap 4',
              color: 'indigo darken-1'
            }
          ]
        },
        {
          name: 'Angular 4 + Material + Prime Faces',
          link: 'https://sirb0rab0g1.github.io/angularjs4-word-online/',
          src: 'https://github.com/sirb0rab0g1/vue-portfolio/blob/master/src/assets/word.png',
          languages: [
            {
              name: 'Angular 4',
              color: 'red darken-3'
            },
            {
              name: 'Angular Material',
              color: 'indigo darken-2'
            },
            {
              name: 'Prime Faces',
              color: 'red darken-3'
            }
          ]
        },
        {
          name: 'Angular 4 + Firebase Deployment',
          link: 'https://fir-angular-47dce.firebaseapp.com/',
          src: 'https://github.com/sirb0rab0g1/vue-portfolio/blob/master/src/assets/angular_firebase.png',
          languages: [
            {
              name: 'Angular 4',
              color: 'red darken-3'
            },
            {
              name: 'Angular Material',
              color: 'indigo darken-2'
            }
          ]
        },
        {
          name: 'Django on Heroku',
          link: 'https://my-rest-api-postgre.herokuapp.com/info/personal/',
          src: 'https://github.com/sirb0rab0g1/vue-portfolio/blob/master/src/assets/django_heroku.png',
          languages: [
            {
              name: 'Django',
              color: 'teal darken-4'
            }
          ]
        },
        {
          name: 'Angular + Django',
          link: 'https://sirb0rab0g1.github.io/angularjs4-tutorial/#/advance',
          src: 'https://github.com/sirb0rab0g1/vue-portfolio/blob/master/src/assets/angular_django.png',
          languages: [
            {
              name: 'Angular 4',
              color: 'red darken-3'
            },
            {
              name: 'Angular Material',
              color: 'indigo darken-2'
            },
            {
              name: 'Django',
              color: 'teal darken-4'
            }
          ]
        },
        {
          name: 'Vue + Django',
          link: 'https://sirb0rab0g1.github.io/rest-vue/#/',
          src: 'https://github.com/sirb0rab0g1/vue-portfolio/blob/master/src/assets/material_vue.png',
          languages: [
            {
              name: 'Vue 2',
              color: 'teal lighten-1'
            },
            {
              name: 'Vue Material',
              color: 'indigo darken-2'
            },
            {
              name: 'Django',
              color: 'teal darken-4'
            }
          ]
        },
        {
          name: 'Vue + Docker',
          link: 'https://github.com/sirb0rab0g1/vuetify-docker',
          src: 'https://github.com/sirb0rab0g1/vue-portfolio/blob/master/src/assets/vue_docker.png',
          languages: [
            {
              name: 'Vue 2',
              color: 'teal lighten-1'
            },
            {
              name: 'Vuetify',
              color: 'indigo darken-2'
            },
            {
              name: 'Docker',
              color: 'light-blue darken-2'
            }
          ]
        },
        {
          name: 'Django + Docker',
          link: 'https://github.com/sirb0rab0g1/sample-docker-django-rest-api',
          src: 'https://github.com/sirb0rab0g1/vue-portfolio/blob/master/src/assets/django_docker.png',
          languages: [
            {
              name: 'Django',
              color: 'teal darken-4'
            },
            {
              name: 'Docker',
              color: 'light-blue darken-2'
            }
          ]
        }
      ]
    })
  }
</script>

<style lang="stylus">
.name-margin
  margin-top: 10px
  margin-bottom: 10px

.project-name
  margin-left: 10px
  text-shadow: -1px 0 #424242, 0 1px #424242, 1px 0 #424242, 0 -1px #424242
</style>