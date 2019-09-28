<template>
  <div class="home">
    <Menu></Menu>
    <section class="hero is-info is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container ">
          <h1 class="title has-text-centered is-size-1">
            Bienvenido a Planning Poker
          </h1>
          <div class="columns is-vcentered">
            <div class="column has-text-right-tablet has-text-centered-mobile">
               <b-button @click="handleNewGame()" type="is-white"
                inverted rounded size="is-medium">
                Crear nuevo juego
            </b-button>
            </div>
            <div class="column has-text-left-tablet has-text-centered-mobile">
               <b-button type="is-white" outlined rounded size="is-medium">
                Unirse a partida
            </b-button>
            </div>
          </div>
        </div>
      </div>
    </section>
     <footer class="footer">
      @lennux23
    </footer>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
export default {
  name: 'home',
  components: {
    Menu
  },
  methods:{
    handleNewGame(){
      this.$router.push({name:'newgame'})
    }
  }
}
</script>
