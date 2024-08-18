function createElement({ tag, className = '', src = '', content = '', parent, attributes = {} }) {
    const element = document.createElement(tag);
    if (className) {
        className.split(' ').forEach(cls => element.classList.add(cls));
    }
    if (src) {
        element.src = src;
    }
    if (content) {
        element.textContent = content;
    }
    if (parent) {
        parent.appendChild(element);
    }
    if (attributes) {
        for (const [key, value] of Object.entries(attributes)) {
            element.setAttribute(key, value);
        }
    }
    return element;
}

export default createElement;