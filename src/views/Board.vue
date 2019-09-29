<template>
  <section class="hero is-light">
    <div class="hero-body">
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-5 is-vertical is-parent">
            <div class="tile is-child ">
              <p class="subtitle">Miembros conectados</p>
              <ul class="members">
                <li>
                  <span class="badge">
                  </span>
                  <span class="name">Nombre </span>
                  <span class="result">Voto</span>
                </li>
                <li>
                <li>
                  <span class="badge">
                    <b-icon
                      :type="{ 'is-success': true }"
                      icon="account"
                    ></b-icon>
                  </span>
                  <span class="name">Alejandro </span>
                  <span class="result">10</span>
                </li>
                <li>
                  <span class="badge">
                    <b-icon
                      :type="{ 'is-success': true }"
                      icon="account"
                    ></b-icon>
                  </span>
                  <span class="name">Alejandro </span>
                  <span class="result">10</span>
                </li>
              </ul>
            </div>
            <div class="tile is-child ">
              <ul>
                <li>uno</li>
                <li>dos</li>

                <li>tres</li>
              </ul>
            </div>
          </div>
          <div class="tile is-parent">
            <div class="tile is-child ">
              <div class="columns is-mobile is-multiline ">
                <div class="column is-one-half-mobile is-one-quarter-tablet">
                  <div
                    class="card"
                    @click="selected()"
                    :class="{ 'is-selected': true }"
                  >
                    <div class="card-content">
                      <div class="corner-tl">1/2</div>
                      <div class="main-number has-text-centered">1/2</div>
                      <div class="corner-br">1</div>
                    </div>
                  </div>
                </div>
                <div class="column is-one-half-mobile is-one-quarter-tablet">
                  <div class="card">
                    <div class="card-content">
                      <div class="corner-tl">1/2</div>
                      <div class="main-number has-text-centered">1/2</div>
                      <div class="corner-br">1</div>
                    </div>
                  </div>
                </div>
                <div class="column is-one-half-mobile is-one-quarter-tablet">
                  <div class="card">
                    <div class="card-content">
                      <div class="corner-tl">1/2</div>
                      <div class="main-number has-text-centered">1/2</div>
                      <div class="corner-br">1</div>
                    </div>
                  </div>
                </div>
                                <div class="column is-one-half-mobile is-one-quarter-tablet">
                  <div class="card">
                    <div class="card-content">
                      <div class="corner-tl">1/2</div>
                      <div class="main-number has-text-centered">1/2</div>
                      <div class="corner-br">1</div>
                    </div>
                  </div>
                </div>
                                <div class="column is-one-half-mobile is-one-quarter-tablet">
                  <div class="card">
                    <div class="card-content">
                      <div class="corner-tl">1/2</div>
                      <div class="main-number has-text-centered">1/2</div>
                      <div class="corner-br">1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    selected () {

    }
  }
}
</script>


<style lang="scss" scoped>
.column {
  .corner-tl {
    position: absolute;
    font-size: 0.75rem;
    top: 2px;
    left: 4px;
    color: blue;
  }
  .corner-br {
    position: absolute;
    font-size: 0.75rem;
    bottom: 2px;
    right: 4px;
    color: blue;
  }
  .main-number {
    font-size: 1.75rem;
    padding: 1.5em 0;
  }
  margin: 10px 10px;
  padding: 0;
  

  cursor: pointer;
  .card {
    border-radius: 5px;
  }
  .is-selected{
    background-color: black;
  }
}
.members li {
  display: flex;

  margin: 5px 0;
}
.members li:nth-child(1) {
  color:red;
}
.members li span:nth-child(1) {
  min-width: 50px;
  width: 50px;
}
.members li span:nth-child(2) {
  width: 150px;
  min-width: 60px;
}
.members li span:nth-child(3) {
  width: 70px;
  text-align: right;
  min-width: 60px;
}
</style>
