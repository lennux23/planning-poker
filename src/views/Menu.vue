<template>
  <b-navbar fixed-top>
    <template slot="brand">
      <b-navbar-item href="/">
        Planning Poker
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item  tag="router-link" :to="{  path: '/'}">
        Inicio
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
