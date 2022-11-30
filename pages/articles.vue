<template>

    <!-- Title -->
    <h1>
        Articles
    </h1>

    <!-- Summary -->
    <p class="mb-16">
        I sometimes scribble down thoughts on a particular topic or coding
        feature that interests me in some way. I also occasionally write
        about useful tips and tricks.
    </p>

    <!-- List -->
    <ContentList path="/articles" v-slot="{ list }">

        <!-- Article -->
        <NuxtLink :to="article._path"
                  :key="article._path"
                  v-for="article in list"
                  class="block mb-12 last-of-type:mb-0">

            <!-- Heading -->
            <h4 class="mb-0">
                {{ article.title }}
            </h4>

            <!-- Date -->
            <p class="text-13px text-gray-400 mb-4">
                {{ article.date }}
            </p>

            <!-- Description -->
            <p>
                {{ article.description }}
            </p>

        </NuxtLink>

    </ContentList>

</template>