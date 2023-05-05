
import React from 'react';

const Blog = () => {
    return (
        <div>
            <div class="bg-white py-24 sm:py-32">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl lg:mx-0">
                        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                        <p class="mt-2 text-lg leading-8 text-gray-600">Here are some Questions and Answers</p>
                    </div>
                    <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <article class="flex max-w-xl flex-col items-start font-semibold justify-between">
                            Q. Tell us the differences between uncontrolled and controlled components.
                            <div class="group relative">
                                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">

                                </h3>
                                <p class="mt-5  text-sm leading-6 text-gray-600">In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally</p>
                            </div>
                        </article>
                        <article class="flex max-w-xl flex-col items-start font-semibold justify-between">
                            Q. How to validate React props using PropTypes
                            <div class="group relative">
                                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">

                                </h3>
                                <p class="mt-5  text-sm leading-6 text-gray-600">In React,  We combine components into an app by passing data from parent components to child components. To do this, we pass data with props.
                                To validate that, we usePropTypes.any: The prop can be of any data type
PropTypes.bool: The prop should be a Boolean
PropTypes.number: The prop should be a number
PropTypes.string: The prop should be a string
PropTypes.func: The prop should be a function
PropTypes.array: The prop should be an array
PropTypes.object: The prop should be an object
PropTypes.symbol: The prop should be a symbol
</p>
                            </div>
                        </article>
                        <article class="flex max-w-xl flex-col items-start font-semibold justify-between">
                            Q. Tell us the difference between nodejs and express js.
                            <div class="group relative">
                                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">

                                </h3>
                                <p class="mt-5  text-sm leading-6 text-gray-600">NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
                            </div>
                        </article>
                        <article class="flex max-w-xl flex-col items-start font-semibold justify-between">

                            Q. What is a custom hook, and why will you create a custom hook?
                            <div class="group relative">
                                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">

                                </h3>
                                <p class="mt-5  text-sm leading-6 text-gray-600">React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;

