<template>
  <svg
    class="icon"
    aria-hidden="true"
    :style="{ width: size, height: size, color }"
  >
    <use :xlink:href="`#${iconHref}`" />
  </svg>
</template>

<script>
export default {
  name: 'icon-svg',
  props: {
    iconHref: {
      type: String
    },
    size: {
      type: String
    },
    color: {
      type: String
    }
  }
};
</script>

<style lang="less" scoped>
.icon {
  width: 20px;
  height: 20px;
  margin-bottom: 1px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
