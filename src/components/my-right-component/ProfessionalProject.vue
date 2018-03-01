<template>
  <v-layout row wrap class="bypass-particle">
    <v-flex xs12 md6 lg6 v-for="(item, index) in professional_project" :keys="index">
      <a class="href" :href="item.link" target="_blank">
        <v-card dark class="card-margin card-opacity">
          <v-card-media
            class="white--text"
            height="180px"
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
      title: 'Professional Projects',
      professional_project: [
        {
          name: 'TrivTrak',
          link: 'http://trivtrak.com/#/',
          src: require('@/assets/trivtrak.png'),
          role: 'Front End Web Developer',
          languages: [
            {
              name: 'Angular',
              color: 'red darken-3'
            },
            {
              name: 'Django',
              color: 'teal darken-4'
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