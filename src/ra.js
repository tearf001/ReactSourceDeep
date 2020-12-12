export const createElement = (type, props = {}, ...children) => {
    console.info('react/createElement', { type, props, children });
    return {
        type,
        props:{
            ...props,
            children: children.map(child=> typeof child === "object" ? child : createTextElement(child)) //递归树
        }
    }
};

function createTextElement(child){
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: child            
        }
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { createElement }