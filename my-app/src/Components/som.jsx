import { useState } from "react";
import Resault from "./resault";
const Som = (props) => {
    const [items, setItems] = useState([
        {
            wight: '',
            hight: '',
            finalResult: '',
            flag: true
        }


    ]);

    const handleFields = (e) => {
        const newItem = { [e.target.name]: e.target.value };
         setItems(newItem);
        console.log(newItem);
    };

    

    function handleSubmit (e) {
        e.preventDefault();
        let BMI =
          (e.target.wight.value / e.target.hight.value / e.target.hight.value) * Math.pow(10, 4);
        console.log(BMI);

        const Message= BMI === 0 ? "enter positive values" : BMI < 18.5 ? "underweight" : BMI < 24.9 && BMI >= 18.5 ? "Normalweight" : BMI < 29.9 && BMI >= 25 ? "Overweight" : "Obesity";
        setItems({ finalResult: Message });
        console.log(Message);
    };


    return (
        <body className="text-center" data-new-gr-c-s-check-loaded="14.1085.0" data-gr-ext-installed="">
            <main className="form-signin w-100 m-auto">
                <img class="mb-4" src="" alt="" width="72" height="57" />

                <div className="container w-25">
                    <form onSubmit={handleSubmit} >
                        <legend>Enter hight:</legend>
                        <input type="text"
                            name="hight"
                            value={items.hight}
                            onChange={handleFields} />
                        <legend>Enter in wight:</legend>
                        <br />
                        <input type="text" className='mb-5'
                            value={items.wight}
                            name="wight"
                            onChange={handleFields} />
                        <input type="submit" className="w-100 btn btn-lg btn-primary" value="Submit" />
                    </form>
                </div>
                <div className='container'>{items.finalResult ? <Resault catch={items.finalResult} /> : ""}</div>
            </main>
        </body >
    );
}

export default Som