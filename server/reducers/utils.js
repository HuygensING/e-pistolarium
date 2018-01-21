"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setProps = (obj, props) => (Object.assign({}, obj, props));
exports.unsetProp = (obj, prop) => exports.setProps(obj, { [prop]: null });
exports.renameProp = (obj, oldKey, newKey) => {
    const nextObj = Object.assign({}, obj, {
        [newKey]: obj[oldKey]
    });
    delete nextObj[oldKey];
    return nextObj;
};
exports.replaceItemInArray = (array, ...items) => {
    const found = items.map(i => false);
    const nextArray = array.map(x => {
        const index = items.findIndex(y => y.id === x.id);
        if (index > -1)
            found[index] = true;
        return index > -1 ? items[index] : x;
    });
    const notFoundItems = found.reduce((prev, curr, index) => {
        if (!curr)
            prev.push(items[index]);
        return prev;
    }, []);
    return nextArray.concat(notFoundItems);
};
exports.updatePropInItemInArray = (array, item, props) => array.map((aItem, index) => (aItem.id === item.id) ? exports.setProps(aItem, props) : aItem);
