<template>
    <div class="standup">
        <div>
          <section style="position:center">
            <iframe width="1100" height="600" src="https://www.youtube.com/embed/HlHg8aUCmtw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </section>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Standup',

  props: {
    standup:Object
  },
}
</script>

<style scoped>

.card {
  padding: 20px ;
  margin: 20px;
  background: #101010;
  color:#a4a4a4;
  width:900px;
  height:400px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  margin-right:10px;
  margin-bottom: 15px;
  float: left;
}

</style>
