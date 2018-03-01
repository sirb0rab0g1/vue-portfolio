<template>
  <vue-particles
    color="#dedede"
    :particleOpacity="0.7"
    :particlesNumber="120"
    shapeType="circle"
    :particleSize="3"
    linesColor="#dedede"
    :linesWidth="1"
    :lineLinked="true"
    :lineOpacity="0.8"
    :linesDistance="150"
    :moveSpeed="5"
    :hoverEffect="true"
    hoverMode="grab"
    :clickEffect="false"
    clickMode="push"
    class="vue-particles"
  >
  </vue-particles>
</template>

<style type="text/css">
  .vue-particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
</style>