<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @vite('resources/css/app.css')
    <title>Assessment</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />


    <style>
        .highlight-column {
            background-color: rgba(255, 0, 0, 0.2);
            /* Semi-transparent red background */
        }
    </style>
</head>

<body>
    <h1 class="text-3xl font-bold text-center mb-8">
        Mahesh Dama Assessment
    </h1>

    <div class="grid grid-cols-3 gap-6">
        <div>
            <h4 class="text-2xl font-bold text-center mb-2 mt-2">
                Chart 1
            </h4>
            <div class="text-1xl text-center mb-2 mt-2 text-gray-500">
                15 Apr - 21 Apr
            </div>
            <div id="chart-1"></div>
        </div>

        <div>
            <h4 class="text-2xl font-bold text-center mb-2 mt-2">
                Chart 2
            </h4>
            <div class="text-1xl text-center mb-2 mt-2 text-gray-500">
                Lorem ipsum dolor
            </div>





            <!-- Slider -->
            <div data-hs-carousel='{
    "loadingClasses": "opacity-0"
  }' class="relative">
                <div class="hs-carousel relative overflow-hidden w-full min-h-96 bg-white rounded-lg">
                    <div
                        class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                        <div class="hs-carousel-slide">
                            <div class="flex justify-center h-full w-full bg-white p-0">
                                <div class="w-full" id="chart-2"></div>
                            </div>
                        </div>
                        <div class="hs-carousel-slide">
                            <div class="flex justify-center h-full w-full bg-white p-0">
                                <div class="w-full" id="chart-2a"></div>
                            </div>
                        </div>
                        <div class="hs-carousel-slide">
                            <div class="flex justify-center h-full w-full bg-white p-0">
                                <div class="w-full" id="chart-2b"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
                    <span
                        class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                    <span
                        class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                    <span
                        class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"></span>
                </div>
            </div>
            <!-- End Slider -->






        </div>

        <div>
            <h4 class="text-2xl font-bold text-center mb-2 mt-2">
                Chart 3
            </h4>
            <div class="text-1xl text-center mb-2 mt-2 text-gray-500">
                15 Apr - 21 Apr
            </div>
            <div id="chart-3"></div>
        </div>


        <div>
            <h4 class="text-2xl font-bold text-center mb-2 mt-2">
                Chart 4
            </h4>
            <div class="text-1xl text-center mb-2 mt-2 text-gray-500">
                15 Apr - 21 Apr
            </div>
            <div id="chart-4"></div>
        </div>

        <div>
            <h4 class="text-2xl font-bold text-center mb-2 mt-2">
                Chart 5
            </h4>
            <div class="text-1xl text-center mb-2 mt-2 text-gray-500">
                15 Apr - 21 Apr
            </div>
            <div id="chart-5"></div>
        </div>

    </div>


    @vite('resources/js/home.js')
    @vite('resources/js/app.js')
</body>

</html>
