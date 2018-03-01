<template>
  <flat-surface-shader class="shader"
                     type="canvas" 
                     :light="{ambient: '#424242', diffuse: '#212121', draw: false, autopilot: true}" 
                     :mesh="{segments: 20, slices: 20, width: 2, height: 2}">
</flat-surface-shader>
</template>

<style type="text/css">
  .shader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>