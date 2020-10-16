if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

function component() {
    var element = document.createElement('pre');

    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to '
    ].join('\n\n');

    return element;
}

document.body.appendChild(component());