const renderDebug = (vnode, dom) => {
    console.info('ra-dom/render, vode=', vnode, ',dom=', dom);
    const node = document.createElement('pre');
    node.innerHTML = JSON.stringify(vnode, null, 4)
    dom.appendChild(node);

};
function render(element, container) {

    if (typeof element.type === "string") {
        let standardDom;
        if (element.type === "TEXT_ELEMENT")
            standardDom = document.createTextNode("");
        else
            standardDom = document.createElement(element.type); //当前节点

        const isProperty = key => key !== "children"
        Object.keys(element.props || {})
            .filter(isProperty)
            .forEach(name => {
                standardDom[name] = element.props[name]
            });

        console.log('render object...', JSON.stringify(element, null, 4));
        element.props.children && element.props.children.forEach(child => render(child, standardDom)); //挂载子节点
        container.appendChild(standardDom); //挂载父节点
    } else {
        console.log('进入自定义组件调用 typeof(element)', element.constructor, element, container);
        if (element instanceof Array) {
            element.forEach(child => render(child, container))
        } else {
            let dom; // 执行后的组件
            const isClass = element.type.toString().indexOf('class') === 0;
            if (isClass) {
                dom = new element.type(element.props).render();
            } else {
                dom = element.type(element.props);
            }
            render(dom, container)
        }
    }
}
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { render: render }