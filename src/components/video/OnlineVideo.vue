<template>
  <div>
    <video id="videoElement" controls autoplay muted width="600px" height="300px"></video>
  </div>
</template>

<script>
import flvjs from 'flv.js';
export default {
  data() {
    return {
      flvPlayer: null,
    };
  },
  props: {
    url: {
      type: String,
    },
  },
  mounted() {
    if (flvjs.isSupported()) {
      console.log(this.url, 'this.url')
      var videoElement = document.getElementById('videoElement');
      this.flvPlayer = flvjs.createPlayer({
        type: 'flv',
        isLive: true,
        hasAudio: false,
        url: 'http://124.222.218.232:8000/live/STREAM_NAME2.flv',
      });
      this.flvPlayer.attachMediaElement(videoElement);
      this.flvPlayer.load();
      this.flvPlayer.play();
    }
  },
  methods: {
    play() {
      this.flvPlayer.play();
    },
  },
};
</script>
