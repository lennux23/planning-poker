<template>
  <div class="form-lobby">
    <section class="hero is-dark is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered ">
            <div class="card login is-size-5 has">
              <header class="card-header is-capitalized">
                <p class="card-header-title has-text-primary ">
                  {{title}}
                </p>
              </header>
              <div class="card-content">
                <div v-if="$route.params.option === 'new-game'">
                  <b-field
                    label="Nombre del grupo"
                    label-position="on-border"
                  >
                    <b-input
                      name="name"
                      icon="briefcase"
                    ></b-input>
                  </b-field>
                  <b-field
                    label="Alias"
                    label-position="on-border"
                  >
                    <b-input
                      name="alias"
                      icon="account"
                    ></b-input>
                  </b-field>
                </div>
                <div v-else>
                  <b-field
                    label="Grupo"
                    label-position="on-border"
                  >
                    <b-select 
                      v-model="groupIdSelected"
                      placeholder="Selecciona grupo a unirte">
                      <option
                       
                        v-for="option in groups"
                        :value="option.id"
                        :key="option.id"
                      >
                        {{ option.name }}
                      </option>
                    </b-select>
                  </b-field>
                </div>
                <div class="card-button has-text-centered">
                  <b-button
                    type="is-primary"
                    class="is-fullwidth"
                    rounded
                    @click="goToBoard"
                  >
                    {{buttonTitle}}
                  </b-button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'form-lobby',
  data () {
    return {
      title: null,
      buttonTitle: null,
      groupIdSelected: null,
      groups: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Lucy' },
        { id: 3, name: 'Joss' },
        { id: 4, name: 'Gabriel' }
      ]
    }
  },
  created () {
    if (this.$route.params.option === 'new-game') {
      this.title = 'Nuevo Juego'
      this.buttonTitle = 'Crear'
    } else {
      this.title = 'Juego Existente'
      this.buttonTitle = 'Unirse'
    }
  },
  methods: {
    goToBoard(){
      this.$router.push({ name: 'board', params: {id: 1233} })
    }
  }
}
</script>

<style lang="css" scoped>
.login {
  border-radius: 8px;
}
.card-content {
  padding-top: 50px;
}
.card-button {
  padding-top: 25px;
}
</style>

