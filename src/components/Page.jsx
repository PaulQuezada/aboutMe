import React, { Component } from 'react'
import { Divider, Tooltip, Button, Input } from "@nextui-org/react";
export default function page() {

    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <div className='w-screen h-screen bg-[#212936] overflow-y-auto p-5'>
                <div className='pt-10 w-[600px] flex flex-col mx-auto text-[#f2f5f9]'>
                    <div className='flex flex-row'>
                        <div className='relative bg-[#191e2c] w-[160px] h-[160px] rounded-[100px]'>
                            <img className='p-2 rounded-[100px]' src="https://imageio.forbes.com/specials-images/imageserve/5ed00f17d4a99d0006d2e738/0x0.jpg?format=jpg&crop=4666,4663,x154,y651,safe&height=416&width=416&fit=bounds" />
                            <Tooltip placement='bottom' className='bg-[#55b685] text-[#f2f5f9]' content="Open to work">
                                <button className='bg-[#55b685] text-[#e1e7fd] font-semibold text-xs flex flex-row rounded-xl p-1 absolute bottom-0 right-0'>
                                    <span class="material-symbols-outlined ">
                                        work
                                    </span>
                                </button>
                            </Tooltip>
                        </div>
                        <div className="mx-8 my-auto">
                            <h1 className='mb-3 font-bold text-4xl'>Paul Quezada</h1>
                            <p className='text-xs'>Me conocen como Elon Mask.</p>
                            <p className='text-xs'>I'm a passionate web development and design UI/UX.</p>

                            <button className='bg-[#6466e9] text-[#e1e7fd] font-semibold text-xs flex flex-row rounded-xl p-1 hover:bg-[#5d60d7] mt-2'>
                                <span className="material-symbols-outlined my-auto mx-1">
                                    description
                                </span>
                                <h1 className='mx-1 my-auto'>My curriculum</h1>
                            </button>
                        </div>
                    </div>
                    <Divider className="bg-[#4d5562] my-4" />
                    <h1 className='flex flex-row text-2xl font-bold mt-5'>
                        Experience (me dio paja hacer esta wea)
                        <span class="mx-2 my-auto material-symbols-outlined">
                            workspace_premium
                        </span>
                    </h1>
                    <ol class="relative border-s border-gray-200 dark:border-gray-700 mt-10">
                        <li class="mb-10 ms-4">
                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                            <h3 class="text-lg font-semibold text-[#e1e7fd] dark:text-white">Application UI code in Tailwind CSS</h3>
                            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg></a>
                        </li>
                        <li class="mb-10 ms-4">
                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                            <h3 class="text-lg font-semibold text-[#e1e7fd] dark:text-white">Marketing UI design in Figma</h3>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                        </li>
                        <li class="ms-4">
                            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                            <h3 class="text-lg font-semibold text-[#e1e7fd] dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                        </li>
                    </ol>
                    <h1 className='flex flex-row text-2xl font-bold mt-10'>
                        My Projects 100% Real no fake
                        <span class="mx-2 my-auto material-symbols-outlined">
                            star_half
                        </span>
                    </h1>

                    <div className="flex flex-row mt-10">
                        <div className="w-1/2 h-[248px] bg-[#2d3543] rounded-[30px] p-3 relative overflow-hidden group">
                            <img
                                className="rounded-xl duration-500 transition-all translate-x-9 translate-y-9 group-hover:translate-x-7 group-hover:translate-y-7"
                                src="https://cdn.discordapp.com/attachments/1216239738818789456/1216239795152486400/Captura_de_pantalla_2024-03-10_a_las_1.22.15_a._m..png?ex=65ffaa93&is=65ed3593&hm=7c3f43457a25e96eb50d0f214a002b6c5263a35625bd27a72ca443585a7d5c1a&"
                                alt="" />
                        </div>

                        <div class="w-1/2 flex flex-col my-auto">
                            <h1 className="text-2xl font-semibold mx-10">CarPool</h1>
                            <p className="text-xs mx-10 text-[#5b606d]">Es una aplicacion parecida a uber xd</p>
                            <div className="mx-10 mt-5 flex flex-row">
                                <Tooltip content="Vue">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        className="text-2xl mx-2"
                                    >
                                        <path d="M12 12.765l5.592-9.437h-3.276L12 7.33v.002L9.688 3.328h-3.28z" />
                                        <path d="M18.461 3.332L12 14.235 5.539 3.332H1.992L12 20.672l10.008-17.34z" />
                                    </svg>
                                </Tooltip>
                                <Tooltip content="Express">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        className="text-2xl mx-2"
                                    >
                                        <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
                                    </svg>
                                </Tooltip>
                                <Tooltip content="MongoDB">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        className="text-2xl mx-2"
                                    >
                                        <path d="M13.74 4.23c-.84-1-1.57-2-1.71-2.22H12c-.14.21-.87 1.22-1.71 2.22-7.2 9.19 1.14 15.39 1.14 15.39l.07.05c.06.95.22 2.33.22 2.33h.62s.15-1.37.21-2.33l.07-.06s8.32-6.19 1.12-15.38zM12 19.48a3.48 3.48 0 01-.48-.48L12 9l.45 10a3.57 3.57 0 01-.45.48z" />
                                    </svg>
                                </Tooltip>
                                <Tooltip content="Nodejs">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        className="text-2xl mx-2"
                                    >
                                        <path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 01-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 011.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.22-.221h.954c.11 0 .201.073.201.184.147.971.568 1.449 2.514 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.185-.825-2.587-1.063-1.999-.2-3.246-.643-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.649 2.568a.297.297 0 01-.056.165c-.037.036-.091.073-.146.073h-.953a.212.212 0 01-.202-.164c-.221-1.012-.789-1.34-2.292-1.34-1.689 0-1.891.587-1.891 1.027 0 .531.237.696 2.514.99 2.256.293 3.32.715 3.32 2.294-.02 1.615-1.339 2.531-3.67 2.531z" />
                                    </svg>
                                </Tooltip>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row mt-10">
                        <div className="w-1/2 h-[248px] bg-[#2d3543] rounded-[30px] p-3 relative overflow-hidden group">
                            <img
                                className="rounded-xl duration-500 transition-all translate-x-9 translate-y-9 group-hover:translate-x-7 group-hover:translate-y-7"
                                src="https://media.es.wired.com/photos/6325168c64fe55a038bdcb0c/4:3/w_2999,h_2249,c_limit/WhatsApp_Logo_2-1.jpeg"
                                alt="" />
                        </div>

                        <div class="w-1/2 flex flex-col my-auto">
                            <h1 className="text-2xl font-semibold mx-10">WhatsApp</h1>
                            <p className="text-xs mx-10 text-[#5b606d]">Es una aplicacion pa enviar porno</p>
                            <div className="mx-10 mt-5 flex flex-row">
                                <Tooltip content="Vue">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        className="text-2xl mx-2"
                                    >
                                        <path d="M12 12.765l5.592-9.437h-3.276L12 7.33v.002L9.688 3.328h-3.28z" />
                                        <path d="M18.461 3.332L12 14.235 5.539 3.332H1.992L12 20.672l10.008-17.34z" />
                                    </svg>
                                </Tooltip>
                                <Tooltip content="Express">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        className="text-2xl mx-2"
                                    >
                                        <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
                                    </svg>
                                </Tooltip>
                                <Tooltip content="MongoDB">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        className="text-2xl mx-2"
                                    >
                                        <path d="M13.74 4.23c-.84-1-1.57-2-1.71-2.22H12c-.14.21-.87 1.22-1.71 2.22-7.2 9.19 1.14 15.39 1.14 15.39l.07.05c.06.95.22 2.33.22 2.33h.62s.15-1.37.21-2.33l.07-.06s8.32-6.19 1.12-15.38zM12 19.48a3.48 3.48 0 01-.48-.48L12 9l.45 10a3.57 3.57 0 01-.45.48z" />
                                    </svg>
                                </Tooltip>
                                <Tooltip content="Nodejs">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        className="text-2xl mx-2"
                                    >
                                        <path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 01-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 011.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.22-.221h.954c.11 0 .201.073.201.184.147.971.568 1.449 2.514 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.185-.825-2.587-1.063-1.999-.2-3.246-.643-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.649 2.568a.297.297 0 01-.056.165c-.037.036-.091.073-.146.073h-.953a.212.212 0 01-.202-.164c-.221-1.012-.789-1.34-2.292-1.34-1.689 0-1.891.587-1.891 1.027 0 .531.237.696 2.514.99 2.256.293 3.32.715 3.32 2.294-.02 1.615-1.339 2.531-3.67 2.531z" />
                                    </svg>
                                </Tooltip>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-row mt-10">
                        <div className="w-1/2 h-[248px] bg-[#2d3543] rounded-[30px] p-3 relative overflow-hidden group">
                            <img
                                className="rounded-xl duration-500 transition-all translate-x-9 translate-y-9 group-hover:translate-x-7 group-hover:translate-y-7"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVILef-2fhT17Ix9yBJ7rILUJW5NaqmoINuL7zrT-6AenC3AiK3OH_uqq3AHGbBqmr6pQ&usqp=CAU"
                                alt="" />
                        </div>

                        <div class="w-1/2 flex flex-col my-auto">
                            <h1 className="text-2xl font-semibold mx-10">Facebook</h1>
                            <p className="text-xs mx-10 text-[#5b606d]">Es una aplicacion pa las viejas klas</p>
                            <div className="mx-10 mt-5 flex flex-row">
                                <Tooltip content="Vue">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        className="text-2xl mx-2"
                                    >
                                        <path d="M12 12.765l5.592-9.437h-3.276L12 7.33v.002L9.688 3.328h-3.28z" />
                                        <path d="M18.461 3.332L12 14.235 5.539 3.332H1.992L12 20.672l10.008-17.34z" />
                                    </svg>
                                </Tooltip>
                                <Tooltip content="Express">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        className="text-2xl mx-2"
                                    >
                                        <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
                                    </svg>
                                </Tooltip>
                                <Tooltip content="MongoDB">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        className="text-2xl mx-2"
                                    >
                                        <path d="M13.74 4.23c-.84-1-1.57-2-1.71-2.22H12c-.14.21-.87 1.22-1.71 2.22-7.2 9.19 1.14 15.39 1.14 15.39l.07.05c.06.95.22 2.33.22 2.33h.62s.15-1.37.21-2.33l.07-.06s8.32-6.19 1.12-15.38zM12 19.48a3.48 3.48 0 01-.48-.48L12 9l.45 10a3.57 3.57 0 01-.45.48z" />
                                    </svg>
                                </Tooltip>
                                <Tooltip content="Nodejs">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        className="text-2xl mx-2"
                                    >
                                        <path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 01-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 011.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.22-.221h.954c.11 0 .201.073.201.184.147.971.568 1.449 2.514 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.185-.825-2.587-1.063-1.999-.2-3.246-.643-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.649 2.568a.297.297 0 01-.056.165c-.037.036-.091.073-.146.073h-.953a.212.212 0 01-.202-.164c-.221-1.012-.789-1.34-2.292-1.34-1.689 0-1.891.587-1.891 1.027 0 .531.237.696 2.514.99 2.256.293 3.32.715 3.32 2.294-.02 1.615-1.339 2.531-3.67 2.531z" />
                                    </svg>
                                </Tooltip>
                            </div>
                        </div>
                        
                    </div>

                    <div className="flex flex-row mt-10">
                        <div className="w-1/2 h-[248px] bg-[#2d3543] rounded-[30px] p-3 relative overflow-hidden group">
                            <img
                                className="rounded-xl duration-500 transition-all translate-x-9 translate-y-9 group-hover:translate-x-7 group-hover:translate-y-7"
                                src="https://www.mundodeportivo.com/urbantecno/hero/2022/12/Estas-son-algunas-de-las-mejores-alternativas-a-TikTok.jpg?width=768&aspect_ratio=16:9&format=nowebp"
                                alt="" />
                        </div>

                        <div class="w-1/2 flex flex-col my-auto">
                            <h1 className="text-2xl font-semibold mx-10">Tik Tok</h1>
                            <p className="text-xs mx-10 text-[#5b606d]">Es una aplicacion pa ver weonas bailando</p>
                            <div className="mx-10 mt-5 flex flex-row">
                                <Tooltip content="Vue">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        className="text-2xl mx-2"
                                    >
                                        <path d="M12 12.765l5.592-9.437h-3.276L12 7.33v.002L9.688 3.328h-3.28z" />
                                        <path d="M18.461 3.332L12 14.235 5.539 3.332H1.992L12 20.672l10.008-17.34z" />
                                    </svg>
                                </Tooltip>
                                <Tooltip content="Express">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        className="text-2xl mx-2"
                                    >
                                        <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
                                    </svg>
                                </Tooltip>
                                <Tooltip content="MongoDB">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        className="text-2xl mx-2"
                                    >
                                        <path d="M13.74 4.23c-.84-1-1.57-2-1.71-2.22H12c-.14.21-.87 1.22-1.71 2.22-7.2 9.19 1.14 15.39 1.14 15.39l.07.05c.06.95.22 2.33.22 2.33h.62s.15-1.37.21-2.33l.07-.06s8.32-6.19 1.12-15.38zM12 19.48a3.48 3.48 0 01-.48-.48L12 9l.45 10a3.57 3.57 0 01-.45.48z" />
                                    </svg>
                                </Tooltip>
                                <Tooltip content="Nodejs">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        className="text-2xl mx-2"
                                    >
                                        <path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 01-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 011.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.22-.221h.954c.11 0 .201.073.201.184.147.971.568 1.449 2.514 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.185-.825-2.587-1.063-1.999-.2-3.246-.643-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.649 2.568a.297.297 0 01-.056.165c-.037.036-.091.073-.146.073h-.953a.212.212 0 01-.202-.164c-.221-1.012-.789-1.34-2.292-1.34-1.689 0-1.891.587-1.891 1.027 0 .531.237.696 2.514.99 2.256.293 3.32.715 3.32 2.294-.02 1.615-1.339 2.531-3.67 2.531z" />
                                    </svg>
                                </Tooltip>
                            </div>
                        </div>
                        
                    </div>

                    <div className="flex flex-row mt-10">
                        <div className="w-1/2 h-[248px] bg-[#2d3543] rounded-[30px] p-3 relative overflow-hidden group">
                            <img
                                className="rounded-xl duration-500 transition-all translate-x-9 translate-y-9 group-hover:translate-x-7 group-hover:translate-y-7"
                                src="https://media.tycsports.com/files/2023/07/24/597083/twitter_862x485.webp"
                                alt="" />
                        </div>

                        <div class="w-1/2 flex flex-col my-auto">
                            <h1 className="text-2xl font-semibold mx-10">Twitter/X</h1>
                            <p className="text-xs mx-10 text-[#5b606d]">Es una aplicacion pa funar</p>
                            <div className="mx-10 mt-5 flex flex-row">
                                <Tooltip content="Vue">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        className="text-2xl mx-2"
                                    >
                                        <path d="M12 12.765l5.592-9.437h-3.276L12 7.33v.002L9.688 3.328h-3.28z" />
                                        <path d="M18.461 3.332L12 14.235 5.539 3.332H1.992L12 20.672l10.008-17.34z" />
                                    </svg>
                                </Tooltip>
                                <Tooltip content="Express">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        className="text-2xl mx-2"
                                    >
                                        <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
                                    </svg>
                                </Tooltip>
                                <Tooltip content="MongoDB">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        className="text-2xl mx-2"
                                    >
                                        <path d="M13.74 4.23c-.84-1-1.57-2-1.71-2.22H12c-.14.21-.87 1.22-1.71 2.22-7.2 9.19 1.14 15.39 1.14 15.39l.07.05c.06.95.22 2.33.22 2.33h.62s.15-1.37.21-2.33l.07-.06s8.32-6.19 1.12-15.38zM12 19.48a3.48 3.48 0 01-.48-.48L12 9l.45 10a3.57 3.57 0 01-.45.48z" />
                                    </svg>
                                </Tooltip>
                                <Tooltip content="Nodejs">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        height="1em"
                                        width="1em"
                                        className="text-2xl mx-2"
                                    >
                                        <path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 01-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 011.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.22-.221h.954c.11 0 .201.073.201.184.147.971.568 1.449 2.514 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.185-.825-2.587-1.063-1.999-.2-3.246-.643-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.649 2.568a.297.297 0 01-.056.165c-.037.036-.091.073-.146.073h-.953a.212.212 0 01-.202-.164c-.221-1.012-.789-1.34-2.292-1.34-1.689 0-1.891.587-1.891 1.027 0 .531.237.696 2.514.99 2.256.293 3.32.715 3.32 2.294-.02 1.615-1.339 2.531-3.67 2.531z" />
                                    </svg>
                                </Tooltip>
                            </div>
                        </div>
                        
                    </div>

                    <h1 className='flex flex-row text-2xl font-bold mt-10'>
                        Socials
                        <span class="mx-2 my-auto material-symbols-outlined">
                            alternate_email
                        </span>
                    </h1>


                    <div className="flex flex-row my-6">
                        <Button className="text-md font-semibold p-5">
                            <i class="fa fa-github fa-2x" /> <h1 className="font-semibold text-md"> GitHub</h1>
                        </Button>
                        <Button className="mx-2 text-md font-semibold p-5">
                            <i class="fa fa-linkedin fa-2x" /> <h1 className="font-semibold text-md"> Linkedin</h1>
                        </Button>
                    </div>

                    <h1 className='flex flex-row text-2xl font-bold mt-10'>
                        Email
                        <span class="mx-2 my-auto material-symbols-outlined">
                            mail
                        </span>
                    </h1>

                    <div className="mb-10 mt-5 flex flex-row">
                        <Input
                            isDisabled
                            type="email"
                            defaultValue="paulqueza123@gmail.com"
                            className="w-full rounded-md text-[#cdd5e0] bg-[#2c3440] text-xs h-[38px]"


                        />
                        <Tooltip className='bg-[#6466e9] text-[#f2f5f9]' content="Send me email">
                            <Button isIconOnly className="bg-[#6466e9] text-md font-semibold p-5 w-[38px] mx-2">
                                <i class="fa fa-paper-plane" style={{ color: "white" }} />
                            </Button>
                        </Tooltip>
                        <Tooltip className='bg-[#6466e9] text-[#f2f5f9]' content="Copy email">
                            <Button isIconOnly className="bg-[#6466e9] text-md font-semibold p-5 w-[38px]"

                            >
                                <i class="fa fa-copy" style={{ color: "white" }} />
                            </Button>
                        </Tooltip>

                    </div>
                </div>
            </div>
        </>
    )

}