let ArrayView = (
    array,
    start = 0,
    end = array.length,
) => ({
    start,
    length: end - start,
    toArray: () => array.slice(start, end),
    slice: (dStart, dEnd) =>
        ArrayView(array, start + dStart, start + dEnd),
    get: (index) => {
        let realIndex = start + index;
        return realIndex < end && realIndex >= start
            ? array[realIndex]
            : undefined
        ;
    },
});

export default ArrayView;