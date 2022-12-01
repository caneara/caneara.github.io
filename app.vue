<template>
    <main class="font-sans leading-none flex flex-col min-h-screen">

        <!-- Header -->
        <header class="bg-cyan-900">
            <div class="container flex justify-center items-center py-4">

                <!-- About -->
                <NuxtLink to="/"
                          class="font-medium text-12px text-gray-300 hover:text-white tracking-wider uppercase mr-10px md:mr-6">

                    <!-- Text -->
                    About

                </NuxtLink>

                <!-- Projects -->
                <NuxtLink to="/projects"
                          class="font-medium text-12px text-gray-300 hover:text-white tracking-wider uppercase mx-10px md:mx-6">

                    <!-- Text -->
                    Projects

                </NuxtLink>

                <!-- Logo -->
                <img alt="Logo"
                     src="/vectors/logo.svg"
                     class="h-24px md:h-[34px] mx-3 md:mx-6">

                <!-- Articles -->
                <NuxtLink to="/articles"
                          class="font-medium text-12px text-gray-300 hover:text-white tracking-wider uppercase mx-10px md:mx-6">

                    <!-- Text -->
                    Articles

                </NuxtLink>

                <!-- Contact -->
                <span @click="contact()"
                      class="font-medium text-12px text-gray-300 hover:text-white tracking-wider uppercase cursor-pointer transition duration-300 ml-10px md:ml-6">

                    <!-- Text -->
                    Contact

                </span>

            </div>
        </header>

        <!-- Content -->
        <article class="flex flex-col items-center flex-1 p-6 md:p-0 mb-6 md:my-14 lg:my-20">
            <div class="w-full max-w-700px flex-1">

                <!-- Slot -->
                <NuxtPage />

            </div>
        </article>

        <!-- Footer -->
        <footer class="text-11px text-gray-400/80 tracking-wide flex justify-center mb-6 md:mb-12">
            &copy; {{ new Date().getFullYear() }} Caneara. All rights reserved.
        </footer>

    </main>
</template>

<script>
    export default
    {
        /**
         * Execute actions when the component is created.
         *
         */
        created()
        {
            useHead({ titleTemplate : (title) =>
                title && title !== 'Caneara' ? `Caneara - ${title}` : 'Caneara'
            });
        },

        /**
         * Define the supporting methods.
         *
         */
        methods :
        {
            /**
             * Allow the user to send an email.
             *
             */
            contact()
            {
                let target = 'U2FsdGVkX18B00jTY6Ff9YrjfurN12sTo7szgxQlJWqV57+BDRXxtG4/dYKooyvo';

                let decoded = CryptoJS.AES.decrypt(target, 'caneara').toString(CryptoJS.enc.Utf8);

                location.href = decoded;
            },
        }
    }
</script>