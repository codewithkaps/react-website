export default function About() {

	return (
		<div class="flex relative z-20 items-center min-h-full">
        <div class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
          <div class="flex flex-col">
            <p class="text-3xl my-6 text-center dark:text-white">
              Hi,
          </p>
            <h2 class="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
              I build digital products and experiences.
          </h2>
            <div class="flex items-center justify-center mt-4">
              <a href="#" class="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md">
                CONNECT WITH ME
            </a>
            </div>
          </div>
        </div>
      </div>
	)
}

