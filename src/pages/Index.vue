<template>
  <Layout>
    <h2 class="mb-5 mt-5">
      Artist list
      <font-awesome :icon="['fas', 'music']"/>
    </h2>
    <table class="table table-dark table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col" sortable>Nr. of songs</th>
          <th scope="col">Year</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in $page.posts.edges" :key="item.node.id">
          <th scope="row">{{ index + 1 }}.</th>
          <td>
            <g-link class="name" :to="item.node.path">{{ item.node.name }}</g-link>
          </td>
          <td>{{ item.node.songs.length }}</td>
          <td>{{ item.node.osnutak + '.' }}</td>
        </tr>
      </tbody>
    </table>
  </Layout>
</template>

<page-query>
query fireArtists {
	posts: allFireArtists(sortBy: "name" order: ASC) {
    edges {
      node {
        id
        name
        songs
        osnutak
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Kasia Song List'
  }
}
</script>

<style scoped>
.table {
    font-family: Roboto;
    font-size: 20px;
    color: white;
}
h2 {
  color: white;
}
thead {
  background-color:#323031;
}
a {
  color: white;
  text-transform: uppercase;
}
</style>
