class Processor {

    static Process(data) {
        let rows = data.split('\n')

        let newRows = []
        rows.forEach(row => {
            let arr = row.split(',')
            newRows.push(arr)
        });
        return newRows;
    }

}


module.exports = Processor