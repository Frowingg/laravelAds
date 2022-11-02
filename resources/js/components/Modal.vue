<template>
  <div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Spotify</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                $7.90
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Subscribe</button>
            </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
export default {
    name: "Modal"
}
</script>

<style scoped>
*{
    color: black;
}
.modal-header{
    background-color: greenyellow;
}

</style>