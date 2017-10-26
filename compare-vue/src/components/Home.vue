<template>
  <div class="home">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ heading }}</h1>
          <div class="is-two-thirds column is-paddingless">
            <h2 class="subtitle is-4">
              {{ subheading }}
            </h2>
          </div>
          <a class="button is-large is-primary" id="learn">Learn More</a>

        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns is-desktop">
          <div class="column is-1 has-text-centered">
            <i class="fa fa-cog is-primary"></i>
          </div>
          <div class="column is-one-third-desktop">
            <p class="title"><strong>We provide superior logistics so that your business can succeed in a crazy world.</strong></p>
          </div>
          <div class="column">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus ex, dignissim ac cursus et, malesuada ut justo. </p>
          </div>
        </div>
      </div>

      <div class="columns pd">
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">“There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”</p>
              <p class="subtitle">- Jeff Atwood</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">“There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”</p>
              <p class="subtitle">- Jeff Atwood</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">“There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”</p>
              <p class="subtitle">- Jeff Atwood</p>
            </div>
          </div>
        </div>
      </div>
    </section>



  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return{
      heading:  "Soaring to new heights",
      subheading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus ex, dignissim ac cursus et, malesuada ut justo. '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import "../mq"

.hero
  background: url('../assets/clouds.jpg')
  background-size:  cover

  .title
    +mobile
      font-weight: bold
    +tablet
      font-size: 2.5rem
    +desktop
      font-size: 4rem
      margin-top: 2rem

h2
  margin: 1.5rem 0 2rem 0!important

#learn
  +desktop
    margin-bottom: 2rem


.fa-cog
  font-size: 40px

.pd
  +tablet
    padding: 2em 0

</style>
