<template>
  <div class="col-12 bg-dark text-white q-pa-lg row">
    <div class="col-12 col-md-3 text-h6">
      <!-- A community of Transformice addicts -->
      <img src="img/logo.png" style="height: 100px" />
    </div>
    <div class="col-12 col-md-1 q-pa-lg">
      <!-- Separator -->
    </div>
    <footer-section
      v-for="section in sections"
      :key="section.title"
      :label="section.label"
      :title="section.title"
      :items="section.items"
    >
      <template v-slot:preference>
        <q-list dense class="q-px-sm">
          <q-item style="padding-left: 0; padding-right: 0">
            <q-select
              dark
              color="secondary"
              v-model="language"
              :options="languageOptions"
              dense
              borderless
              emit-value
              map-options
              options-dense
            />
          </q-item>
        </q-list>
      </template>
    </footer-section>
  </div>
</template>

<script lang="ts">
import { Options, Vue, Watch } from "vue-property-decorator";
import i18n from "src/i18n";
import FooterSection, { FooterItem } from "./FooterSection.vue";

interface FooterSectionInfo {
  title: string;
  label?: string;
  items?: FooterItem[];
}

@Options({ components: { FooterSection } })
export default class AppFooter extends Vue {
  language = "en";

  get languageOptions() {
    return Object.entries(i18n).map(([value, language]) => ({
      value,
      label: language.languageName,
    }));
  }

  get sections(): FooterSectionInfo[] {
    const options: FooterSectionInfo[] = [
      {
        title: this.$t("contribute"),
        items: [
          {
            label: this.$t("translation"),
            to: { name: "translation" },
          },
          {
            label: this.$t("sourceCode"),
            to: { name: "github" },
          },
        ],
      },
      {
        title: this.$t("contactUs"),
        items: [
          {
            label: "Discord",
            link: "https://discord.gg/xeRNaKTKxN",
          },
        ],
      },
      {
        title: this.$t("information"),
        items: [
          {
            label: this.$t("faq"),
            to: { name: "faq" },
          },
          {
            label: this.$t("serverStatus"),
            to: { name: "status" },
          },
        ],
      },
    ];

    const preference: FooterSectionInfo = { title: this.$t("preference"), label: "preference" };
    this.$q.screen.lt.sm ? options.unshift(preference) : options.push(preference);
    return options;
  }

  mounted() {
    this.language = this.$i18n.locale;
  }

  @Watch("language")
  onLanguageChange() {
    this.$i18n.locale = this.language;
    window.localStorage.setItem("language", this.language);
  }
}
</script>
