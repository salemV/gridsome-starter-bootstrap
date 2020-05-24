<template>
  <Layout>
    <div class="d-flex justify-content-between">
      <div class="white mb-4">
        <h3>Name: {{ $page.post.name }} </h3>
        <h5>Year: {{ $page.post.osnutak + '.' }}</h5>
      </div>
      <div class="pt-2">
        <g-link to="/">
            <b-button variant="primary"> 
              <font-awesome :icon="['far', 'hand-point-left']"/>
              Go back
            </b-button>
        </g-link>
      </div>
    </div>
    <div role="tablist">
        <b-card no-body class="mb-1" v-for="(song, index) in $page.post.songs" :key="index">
        <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button-group class="d-flex">
              <b-button block v-b-toggle="'accordion-' + index" variant="primary"> 
                  {{ song }} 
              </b-button>
              <b-button>
                <b-icon-star-fill v-if="$page.post.favorites[index]" variant="warning"/>
                <b-icon-star v-else variant="warning"/>              
              </b-button>
            </b-button-group>
        </b-card-header>
        <b-collapse :id="'accordion-' + index" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <div>
              </div>
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" :src="$page.post.links[index]" allowfullscreen></iframe>
              </div>
            </b-card-body>
        </b-collapse>
        </b-card>
    </div>
  </Layout>
</template>

<page-query>
query fireArtists ($path: String!) {
  post: fireArtists (path: $path) {
    name
    osnutak
    songs
    links
    lryics
    favorites
  }
}
</page-query>


<style lang="scss" scoped>
.white {
  color: white;
}
.meta {
  display: flex;
}

.box {
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 0;
  
  .label {
    font-weight: bold;
  }
}

.blogImage {
  max-height: 400px;
  width: 100%;
}
</style>
