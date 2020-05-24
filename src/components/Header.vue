<template>
  <header class="header">
    <b-navbar class="p-0 align-center" toggleable="md" type="light">
      <b-navbar-brand>
        <g-link class="logo-home logo-desktop" to="/">AWESOME SONG LIST</g-link>
      </b-navbar-brand>
    </b-navbar>
  </header>
</template>

<style lang="scss">
nav {
  width: 100%;
  padding-top: 1rem;
}

.align-center {
  display: flex;
  justify-content: center !important;
  align-items: center;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.logo-home {
  font-size: 50px;
  letter-spacing: 2px;
  max-width: 75%;
  font-weight: bold;
  text-align: center;
  color: white;
  &:hover {
    text-decoration: none;
  }
}

.logo-desktop {
  @media(max-width: 419px) {
    display: none;
  }
  @media (min-width: 420px) {
    display: default;
  }
}

.logo–mobile {
  @media(max-width: 419px) {
    display: default;
  }
  @media (min-width: 420px) {
    display: none;
  }
}

.logo-image {
  width: 40px;
}

.nav--link {
  margin-left: 20px;
  @media (max-width: 419px) {
    margin: 0;
    padding: 15px 10px 10px 0;
  }
}

.active--exact {
  font-weight: bold;
}
</style>
