// This is the proper setProps function, but due to a Typescript error, it does not
// work yet, see:  https://github.com/Microsoft/TypeScript/issues/14409
// export function setProps<T extends object>(obj: T, props: Partial<T>): T {
// 	return ({ ...obj, ...props});
// }
export const setProps = (obj, props) => ({ ...obj, ...props})

export const unsetProp = (obj, prop) => setProps(obj, { [prop]: null });

export const renameProp = (obj, oldKey, newKey) => {
	const nextObj =	{
		...obj,
		...{
			[newKey]: obj[oldKey]
		}
	};

	delete nextObj[oldKey];

	return nextObj;
};

export const replaceItemInArray = (array, ...items) => {
	const found = items.map(i => false)

	const nextArray = array.map(x => {
		const index = items.findIndex(y => y.id === x.id);
		if (index > -1) found[index] = true
		return index > -1 ? items[index] : x;
	});

	const notFoundItems = found.reduce((prev, curr, index) => {
		if (!curr) prev.push(items[index])
		return prev
	}, [])

	return nextArray.concat(notFoundItems)
}

export const updatePropInItemInArray = (array, item, props) =>
	array.map((aItem, index) =>
		(aItem.id === item.id) ? setProps(aItem, props) : aItem
	);
