<template>
  <v-layout row wrap class="bypass-particle">
    <v-flex xs12 md6 lg12>
      <v-card dark class="card-margin card-opacity">
        <v-list two-line>
          <template v-for="(item, index) in items">
            <a class="href" :href="item.facebook" target="_blank">
              <v-list-tile avatar ripple :key="index" @click="" style="marign-top: 5px; margin-bottom: 5px;">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title>
                    <small>
                      {{ item.subtitle }}
                    </small>
                  </v-list-tile-sub-title>
                  <v-layout row wrap class="margin-left">
                    <div v-for="(item, index) in item.languages" style="marign-top: 5px; margin-bottom: 10px;">
                      <v-chip :color="item.color" text-color="white" :key="index">
                        <small>
                          {{ item.name }}
                        </small>
                      </v-chip>
                    </div>
                  </v-layout>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                  <v-icon color="grey lighten-1">star_border</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </a>
            <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          action: '2017-Present',
          title: 'Rieljun Liguid',
          facebook: 'https://www.facebook.com/lryuk92',
          subtitle: 'Gives idea with new technologies and letting me explore and implement it.',
          languages: [
            {
              name: 'Angular',
              color: 'red darken-3'
            },
            {
              name: 'Vue',
              color: 'teal lighten-1'
            },
            {
              name: 'Django',
              color: 'teal darken-4'
            }
          ]
        },
        {
          action: '2017',
          title: 'Guy Romelle',
          facebook: 'https://www.facebook.com/mguyromelle',
          subtitle: 'He gives idea towards wordpress basics.',
          languages: [
            {
              name: 'Wordpress',
              color: 'grey darken-2'
            }
          ]
        },
        {
          action: '2017',
          title: 'Daniel Padilla',
          facebook: 'https://www.facebook.com/daniel.fernando.padilla',
          subtitle: 'Introduces AngularJS to me.',
          languages: [
            {
              name: 'Angular',
              color: 'red darken-3'
            }
          ]
        },
        {
          action: '2016',
          title: 'Joven Lanoy',
          facebook: 'https://www.facebook.com/vhenzreign',
          subtitle: 'Introduces Web and how it works',
          languages: [
            {
              name: 'HTML',
              color: 'deep-orange darken-2'
            },
            {
              name: 'CSS',
              color: 'light-blue darken-3'
            },
            {
              name: 'JS',
              color: 'yellow darken-1'
            },
            {
              name: 'PHP',
              color: 'indigo lighten-1'
            }
          ]
        }
      ]
    })
  }
</script>

<style lang="stylus">
.margin-left
  margin-left: -4px
</style>