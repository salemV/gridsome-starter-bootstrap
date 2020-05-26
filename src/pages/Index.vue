<template>
  <Layout>
    <h2 class="mb-5 mt-5">
      Artist list
      <font-awesome :icon="['fas', 'music']"/>
    </h2>
    <b-table
      show-empty       
      id="my-table"
      :items="$page.posts.edges"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage" 
      class="table table-dark table-striped table-hover">

      <template v-slot:cell(name)="row">
         <g-link class="name" :to="row.item.node.path">{{ row.item.node.name }}</g-link>
      </template>

      <template v-slot:cell(index)="row">
        {{ row.index + 1 }}
      </template>

      <template v-slot:cell(osnutak)="row">
       {{ row.item.node.osnutak }}.
      </template>

      <!-- <thead>
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
      </tbody> -->
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
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
  data() {
    return {
      fields: [ 'index', {key: 'name'}, 'osnutak'],
      perPage: 11,
      currentPage: 1,
    }
  },
  metaInfo: {
    title: 'Kasia Song List'
  },
  computed: {
      rows() {
        return this.$page.posts.edges.length
      }
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
