<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item">MyCompany</router-link>
          <button class="button navbar-burger" v-on:click="toggleNav" v-bind:class="{'is-active': isActive}">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div class="navbar-menu navbar-end" v-bind:class="{'is-active': isActive}">
          <router-link to="/" class="navbar-item r-item">Home</router-link>
          <router-link to="faq" class="navbar-item r-item">Features</router-link>
          <router-link to="faq" class="navbar-item r-item">About</router-link>
          <router-link to="faq" class="navbar-item r-item">Faq</router-link>

          <div class="navbar-item">
            <p class="control">
              <a class="button is-primary is-outlined">
                <span class="icon">
                  <i class="fa fa-download"></i>
                </span>
                <span> Join Now</span>
              </a>
            </p>
          </div>

        </div>
      </div>
    </nav>

    <router-view/>

    <footer class="footer is-primary">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p>And this right here is a spiffy footer, where you can put stuff.</p>
          </div>
          <div class="column has-text-right">
            <a class="icon" href="#"><i class="fa fa-facebook"></i></a>
            <a class="icon" href="#"><i class="fa fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function(){
    return{
      isActive: false
    }
  },
  methods: {
    toggleNav: function(){
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style lang="sass">
@import "../node_modules/bulma/bulma.sass"
@import "mq"

.is-primary a
  color:  #1EC9AC

.navbar
  background-color: #383838
  a:hover
    color: gray

.navbar-brand a
  color: #fff
  font-weight: bold
  +desktop
    padding-left: 0

a.r-item
  color: #c1c1c1
  padding: 0.5rem 1.75rem
  background: transparent!important
  &:hover
    color: #f9f9f9
  +mobile
    color: gray!important
    &:hover
      background-color: #f1f1f1

.navbar-menu.is-active a
  &:hover
    color: gray!important

nav .navbar-burger, nav .navbar-burger.is-active
  color: #1EC9AC!important
  background-color: transparent
  border: 0
  box-shadow: none

footer
  background-color: $primary !important
  color:  #fff

  .icon
    color: #fff
    margin-left: 20px


</style>
