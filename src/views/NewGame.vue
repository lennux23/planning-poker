<template>
  <div class="new-game">
    <section class="hero is-info is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered ">
            <div class="card login is-size-5 has">
              <header class="card-header is-capitalized">
                <p class="card-header-title has-text-primary ">
                  Nuevo grupo
                </p>
              </header>
              <div class="card-content">
                <b-field
                  label="Nombre del grupo"
                  type="is-info"
                >
                  <b-input
                    name="name"
                    placeholder="mi-nuevo-grupo"
                  ></b-input>
                </b-field>
                <b-field
                  label="Alias"
                  type="is-info"
                >
                  <b-input
                    name="alias"
                    placeholder="alex"
                  ></b-input>
                </b-field>
                <div class="has-text-centered">
                  <b-button
                    type="is-primary"
                    rounded
                    size="is-medium"
                    @click="goToNewGame"
                  >
                    Crear
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
  name: 'new-game'
}
</script>

<style lang="css" scoped>
.login {
  border-radius: 10px;
}
</style>

