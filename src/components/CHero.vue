<template>
  <q-parallax :src="img" :height="225">
    <div class="container">
      <div class="row top-hero q-gutter-x-md items-center">
        <c-avatar size="128px" :id="id" :tribe="tribe" />
        <div class="name text-weight-medium text-white text-h3">
          {{ title }}
        </div>
      </div>
    </div>
    <div class="absolute-bottom tabs">
      <div class="container">
        <q-tabs class="text-white" align="left">
          <q-route-tab v-for="tab in tabs" :key="tab.label" :label="tab.label" :to="tab.to" />
        </q-tabs>
      </div>
    </div>
  </q-parallax>
</template>

<script lang="ts">
import { Options, Prop, Vue } from "vue-property-decorator";
import { RouteLocationRaw } from "vue-router";
import { CAvatar } from "src/components";

@Options({ components: { CAvatar } })
export default class Hero extends Vue {
  @Prop({ default: 0 }) id!: number;
  @Prop({ default: false }) tribe!: boolean;
  @Prop({ default: "" }) title!: string;
  @Prop({ default: "" }) img!: string;
  @Prop({ default: [] }) tabs!: { label: string; to: RouteLocationRaw }[];
}
</script>

<style scoped>
.top-hero {
  transform: translate(0px, -25px);
}

.avatar {
  width: 128px;
  height: 128px;
  overflow: hidden;
}

.avatar img {
  width: 134px;
  height: 134px;
  margin: -3px -3px;
}

.name {
  text-shadow: 0px 0px 6px #000000;
}

.tabs {
  background-color: rgba(0, 0, 0, 0.75);
}
</style>
