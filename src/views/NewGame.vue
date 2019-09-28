<template>
  <div class="new-game">
    <section class="hero is-dark is-fullheight-with-navbar">
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
                  label-position="on-border"
                >
                  <b-input name="name" icon="briefcase"></b-input>
                </b-field>
                <b-field
                  label="Alias"
                  label-position="on-border"
                >
                  <b-input name="alias" icon="account" ></b-input>
                </b-field>
                <div class="card-button has-text-centered">
                  <b-button
                    type="is-primary"
                    class="is-fullwidth"
                    rounded
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
  border-radius: 8px;
}
.card-content {
  padding-top: 50px;
}
.card-button {
  padding-top: 25px;
}

</style>

