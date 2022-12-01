<template>

    <!-- Profile -->
    <div class="flex items-center mb-10">

        <!-- Avatar -->
        <img alt="Avatar"
             src="/images/avatar.jpg"
             class="h-60px md:h-90px rounded-full">

        <!-- Links -->
        <div class="flex gap-x-8 ml-8 md:ml-10">

            <!-- Twitter -->
            <a target="_blank"
               title="Twitter"
               href="https://twitter.com/mattkingshott">

                <!-- Icon -->
                <i class="fab fa-twitter text-[25px] text-gray-400 dark:text-gray-600 hover:text-sky-600 dark:hover:text-sky-600 cursor-pointer transition duration-300"></i>

            </a>

            <!-- Github -->
            <a title="Github"
               target="_blank"
               href="https://github.com/caneara">

                <!-- Icon -->
                <i class="fab fa-github text-[25px] text-gray-400 dark:text-gray-600 hover:text-purple-700 dark:hover:text-purple-500 cursor-pointer transition duration-300"></i>

            </a>

            <!-- Website -->
            <a title="Caneara"
               href="https://caneara.com">

                <!-- Icon -->
                <i class="fas fa-globe text-[25px] text-gray-400 dark:text-gray-600 hover:text-blue-700 dark:hover:text-blue-500 cursor-pointer transition duration-300"></i>

            </a>

        </div>

    </div>

    <!-- Header -->
    <h1>
        Developer, entrepreneur and content creator
    </h1>

    <!-- Overview -->
    <p>
        Hey there&hellip; I'm Matt Kingshott, a full-stack developer,
        open-source enthusiast and content creator. In 2022,
        I formed Caneara to serve as an umbrella for my closed
        and open-source projects, as well as my client and
        consulting work.
    </p>

    <!-- Tech Stack -->
    <p>
        I started my journey back in 1999 with Visual Basic,
        played around with C# for a few years, before finally
        settling on Laravel and PHP as my preferred platform.
        Since then, I've also come to know and love VueJS, Tailwind
        CSS, and most recently InertiaJS.
    </p>

    <!-- DevOps -->
    <p>
        I've built, deployed and maintained client and SaaS projects
        on servers, and have recently dabbled with serverless via
        Amazon Web Services and Laravel Vapor. While still a little
        rough around the edges, it is fast becoming my preferred option.
    </p>

    <!-- Working -->
    <p>
        While my workload is pretty full these days, I'm always open to
        the right challenge when it comes to consulting or client work,
        so please feel free to reach out to me if you're interested in
        the two of us working together.
    </p>

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
            useHead({ title : 'Caneara' });
        }
    }
</script>