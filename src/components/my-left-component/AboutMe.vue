<template>
  <v-layout class="bypass-particle">
    <v-flex >
      <v-card dark class="card-opacity">
        <v-container>
          <v-layout row wrap>
            <v-flex xs12 md12 lg12>
              <span class="caption">
                <i class="material-icons" style="font-size: 10px;">code</i> 
                <strong>About</strong> Me
              </span>
            </v-flex>
            <v-flex xs12 md12 lg12 class="name-margin">
              <span class="caption">
                Hi im Kent Fueconcillo 
              </span>
            </v-flex>
            <v-flex xs12 md12 lg12>
              <span class="caption">
                <strong>Personal Links</strong> 
              </span>
              <div>
                <small>
                  <span>Github: </span>
                    <a href="https://github.com/sirb0rab0g1/">https://github.com/sirb0rab0g1</a>
                </small>
              </div>
              <div>
                <small>
                  <span>Linkedin: </span>
                    <a href="https://www.linkedin.com/in/kentfueconcillo/">https://www.linkedin.com/in/kentfueconcillo/</a>
                </small>
              </div>
            </v-flex>
            <v-flex xs12 md12 lg12 class="name-margin">
              <span class="caption">
                <strong>Social Media</strong> 
              </span>
              <div>
                <small>
                  <span>Facebook: </span>
                    <a href="https://www.facebook.com/zxcasdqwe123qweasdzxc">https://www.facebook.com/zxcasdqwe123qweasdzxc</a>
                </small>
              </div>
            </v-flex>
            <v-flex xs12 md12 lg12 class="name-margin">
              <span class="caption">
                <strong>Work Experience</strong> 
              </span>
              <div>
                <small>
                  <span>DevOps / Lead Developer: </span>
                    <a href="http://infosoftstudio.com/">http://infosoftstudio.com/</a>
                </small>
              </div>
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
      show: false
    })
  }
</script>

<style lang="stylus">
.name-margin
  margin-top: 10px
  margin-bottom: 10px
</style>