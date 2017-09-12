export const setProps = (obj, props) => ({ ...obj, ...props});

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

export const replaceItemInArray = (array, ...items) =>
	array.map(x => {
		const item = items.find(y => y.id === x.id);
		return item != null ? item : x;
	});

export const updatePropInArray = (array, id, callback) =>
	array.map((item, index) =>
		(item.id === id) ? setProps(item, callback(item)) : item
	);
