import { useState } from "react";
import { FaIceCream, FaTrashAlt } from "react-icons/fa";
const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "Item 1"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }


    ]);


    const handleCheck = (id) => {
        console.log(`key:${id}`);
        const listItems = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));

    };

    const handleDelete = (id) => {
        console.log(id);
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }
    return (
        <>
            <br />
            <main className="container w-50 pt-5 ">
                {items.length ? (
                    <ul>
                        {/* array.map iterate over all index and update its values */}
                        {items.map((x) => (
                            <li className="border-3 fs-5 alert-danger" key={x.id}>
                                <input
                                    onChange={() => handleCheck(x.id)}
                                    type='checkbox'
                                    checked={x.checked}
                                />
                                <label
                                    className={(x.checked) ? "badge bg-primary" : null}
                                    onDoubleClick={() => handleCheck(x.id)}
                                >
                                    {x.item}
                                </label>
                                <FaTrashAlt onClick={() => handleDelete(x.id)} role="button"
                                    tabIndex="0" />
                            </li>

                        ))}
                    </ul>
                ) : (
                    <h1 className="text-center">Your list is empty</h1>)}
                        
                    
                  
                    </main>
            </>
            )
                }


export default Content