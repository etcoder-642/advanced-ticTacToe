export const utils = (()=>{
    const indexes = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const values = ['00', '01', '02', '10', '11', '12', '20', '21', '22'];

    return {
        /*
           Function Description:
              - to convert the single digit values returned by the computerMove 
              to a two digit format like the one in the values array. 
        */
        convertIndextoValue: function (index) {
            let v = 0;
            for (let i = 0; i < indexes.length; i++) {
                if (index === indexes[i]) {
                    v = values[i]
                }
            };
            return v;
        },
        convertValuetoIndexes: function (value) {
            let v = 0o0;
            for (let i = 0; i < value.length; i++) {
                if (value === values[i]) {
                    v = indexes[i];
                }
            }
            return v;
        }
    }
})()