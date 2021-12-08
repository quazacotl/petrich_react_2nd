module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
                // require('doiuse')({
                //     browsers: [">0.2%",
                //         "not dead",
                //         "not op_mini all",
                //         "last 2 versions"],
                //     ignore: ['rem']
                // })
            ],
        },
    },
}
