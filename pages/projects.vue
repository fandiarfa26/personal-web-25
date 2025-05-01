<script setup lang="ts">
import type { TableColumn } from "@nuxt/ui";
import projects from "~/assets/data/projects.json";

definePageMeta({
  layout: "inside",
  title: "Projects",
});

type ProjectLink = {
  url?: string;
  github?: string;
  figma?: string;
  video?: string;
  playstore?: string;
};

type Project = {
  name: string;
  year: string;
  assoc: string;
  tech: string[];
  links: ProjectLink;
};

const data = ref<Project[]>(projects);

const linkIcons = {
  url: "lucide:globe",
  github: "lucide:github",
  figma: "lucide:figma",
  video: "lucide:video",
  playstore: "tabler:brand-google-play",
};

const columns: TableColumn<Project>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "year",
    header: "Year",
  },
  {
    accessorKey: "assoc",
    header: "Association",
  },
  {
    accessorKey: "tech",
    header: "Tech Stack",
    cell: ({ row }) => {
      const techs: string[] = row.getValue("tech");
      return h(
        "div",
        { class: "flex gap-2" },
        techs.map((tech) => {
          return h(
            resolveComponent("UBadge"),
            { color: "neutral", variant: "outline" },
            tech
          );
        })
      );
    },
  },
  {
    accessorKey: "links",
    header: "Link",
    cell: ({ row }) => {
      const links: ProjectLink = row.getValue("links");
      const linkElements = [];
      for (const [key, value] of Object.entries(links)) {
        if (value) {
          linkElements.push(
            h(resolveComponent("UButton"), {
              to: value,
              target: "_blank",
              color: "neutral",
              variant: "outline",
              icon:
                linkIcons[key as keyof typeof linkIcons] ??
                "lucide:external-link",
              ui: {
                leadingIcon: "text-primary",
              },
            })
          );
        }
      }

      return h("div", { class: "flex gap-2" }, linkElements);
    },
  },
];
</script>

<template>
  <section>
    <UContainer>
      <h1 class="mb-2 text-2xl">My Projects</h1>
      <p class="mb-5 text-lg">
        I have created
        <span class="font-bold text-primary">{{ projects.length }}</span>
        projects in the form of websites and applications.
      </p>

      <UTable sticky :data="data" :columns="columns" class="flex-1" />
    </UContainer>
  </section>
</template>
