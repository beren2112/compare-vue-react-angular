<template>
  <div class='faq'>
      <div class='container'>
        <section class='section pd-top-bot-only'>
          <h1 class='title'>FAQ</h1>
          <h2 class='subtitle is-4'>Lorem isum dolor sit amet and all of that jazz</h2>

          <div class='columns' v-if='faqs && faqs.length'>
              <div class='column is-one-third' v-for='faq of faqs'>
                <div class='card'>
                  <div class='card-content'>
                    <p class='title'>{{ faq.title }}</p>
                    <p class='answer'>{{ faq.body }}</p>
                  </div>
                </div>
              </div>
          </div>
        </section>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'faq',
  data: () =>({
    faqs: [],
    errors: []
  }),

  created() {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.faqs = response.data.slice(0,12);
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='sass' scoped>
@import '../mq'

.pd-top-bot-only
  padding-left: 0
  padding-right : 0

.pd
  padding: 2em 0 1.5em 0

.answer
  margin-top: 10px !important
  color: gray

.columns
  flex-wrap: wrap

.card
  height: 100%

section
  +mobile
    padding-left: 15px
    padding-right: 15px


</style>
