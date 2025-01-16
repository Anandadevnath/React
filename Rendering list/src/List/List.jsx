import './List.css';

function List() {

    const Colors = [
        { id: 1, name: 'red', number: 2 },
        { id: 2, name: 'green', number: 6 },
        { id: 3, name: 'blue', number: 3 },
        { id: 4, name: 'yellow', number: 7 },
        { id: 5, name: 'black', number: 5 },
        { id: 6, name: 'white', number: 1 }
    ];

    // Colors.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetic order
    // Colors.sort((a, b) => b.name.localeCompare(a.name)); // Reverse alphabetic order
    // Colors.sort((a, b) => a.number - b.number); // Numeric order
    // Colors.sort((a, b) => b.number - a.number); // Reverse numeric order

    const LowNumColors = Colors.filter(Color => Color.number < 5); // low number colors

    // const listItems = Colors.map(Color => <li key={Color.id}>
    //     {Color.name}: &nbsp;   {/* here nbsp is used to give space between color name and number  */}
    //     {Color.number}</li>);


    const listItems = LowNumColors.map(LowNumColors => <li key={LowNumColors.id}>
        {LowNumColors.name}: &nbsp;
        {LowNumColors.number}</li>);


    return (
        <>
            <h1 className="h1listcolors">OriginalColors</h1>
            <ul className="ullistcolors">{listItems}</ul>
        </>
        );
}

export default List;