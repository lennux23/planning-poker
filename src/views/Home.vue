<template>
  <div class="home">
    <section class="hero is-info is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered is-size-1">
            Bienvenido a Planning Poker
          </h1>
          <div class="columns is-vcentered">
            <div class="column has-text-right-tablet has-text-centered-mobile">
              <b-button
                type="is-white"
                inverted
                rounded
                size="is-medium"
                @click="goToNewGame"
              >
                Crear nuevo juego
              </b-button>
            </div>
            <div class="column has-text-left-tablet has-text-centered-mobile">
              <b-button
                type="is-white"
                outlined
                rounded
                size="is-medium"
                @click="goToExistingGame"
              >
                Unirse a partida
              </b-button>
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
  components: {
  },
  data () {
    return {

    }
  },
  methods: {
    goToNewGame () {
      this.$router.push({ name: 'lobby', params: {option: 'new-game'} })
    },
    goToExistingGame() {
      this.$router.push({ name: 'lobby', params: {option: 'existing-game'} })
    }
  }
}
</script>
